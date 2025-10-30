$ErrorActionPreference = 'SilentlyContinue'
param(
    [string]$BaseUrl,
    [int]$Limit
)
if (-not $BaseUrl) { $BaseUrl = 'https://www.larbovert.fr/' }
if (-not $Limit) { $Limit = 60 }

Set-Location "$PSScriptRoot\.."
New-Item -ItemType Directory -Force -Path 'public/images/logo' | Out-Null
New-Item -ItemType Directory -Force -Path 'public/images/galerie' | Out-Null

$resp = Invoke-WebRequest -UseBasicParsing -Uri $BaseUrl
$html = $resp.Content

$matchesSrc = [regex]::Matches($html, 'src\s*=\s*"([^"]+\.(?:png|jpe?g|webp|svg))"', 'IgnoreCase')
$matchesHref = [regex]::Matches($html, 'href\s*=\s*"([^"]+\.(?:png|jpe?g|webp|svg))"', 'IgnoreCase')
$urls = @()
foreach ($m in $matchesSrc) { $urls += $m.Groups[1].Value }
foreach ($m in $matchesHref) { $urls += $m.Groups[1].Value }
$urls = $urls | Select-Object -Unique

function Resolve-Url([string]$u, [string]$base) {
    if ($u -match '^https?://') { return $u }
    if ($u.StartsWith('//')) { return 'https:' + $u }
    if ($u.StartsWith('/')) { return ($base.TrimEnd('/')) + $u }
    return ($base.TrimEnd('/')) + '/' + ($u.TrimStart('/'))
}

$i = 0
foreach ($u in $urls) {
    $i++
    if ($i -gt $Limit) { break }
    $full = Resolve-Url $u $BaseUrl
    $ext = [IO.Path]::GetExtension($full)
    if ([string]::IsNullOrWhiteSpace($ext)) { $ext = '.jpg' }
    $name = [IO.Path]::GetFileNameWithoutExtension($full)
    if (-not $name) { $name = "gallery-$i" }
    # supprimer les paramètres d'URL éventuels
    if ($name -match '\?') { $name = $name.Split('?')[0] }
    $out = "public/images/galerie/$name$ext"
    try { Invoke-WebRequest -UseBasicParsing -Uri $full -OutFile $out } catch {}
}

$logo = ($urls | Where-Object { $_ -match 'logo|brand|header|nav' } | Select-Object -First 1)
if ($logo) {
    $logoFull = Resolve-Url $logo $BaseUrl
    $ext = [IO.Path]::GetExtension($logoFull)
    if ([string]::IsNullOrWhiteSpace($ext)) { $ext = '.png' }
    $logoOut = "public/images/logo/logo$ext"
    try { Invoke-WebRequest -UseBasicParsing -Uri $logoFull -OutFile $logoOut } catch {}
}

# Générer gallery.json à partir des fichiers téléchargés
$galleryDir = "public/images/galerie"
$files = Get-ChildItem -Path $galleryDir -File | Where-Object { $_.Extension -match '\.(png|jpg|jpeg|webp|svg)$' }
$items = @()
$id = 1
foreach ($f in $files) {
    $items += @{ id = $id; src = ("/images/galerie/" + $f.Name); alt = ("Réalisation " + $id); category = "creation" }
    $id++
}
$json = ($items | ConvertTo-Json -Depth 3)
Set-Content -LiteralPath "src/data/gallery.json" -Value $json -Encoding UTF8

Write-Host 'Scrape done and gallery.json updated.'

