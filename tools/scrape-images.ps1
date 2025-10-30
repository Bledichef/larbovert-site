$ErrorActionPreference = 'SilentlyContinue'
param(
    [string]$BaseUrl,
    [int]$Limit
)
if (-not $BaseUrl) { $BaseUrl = 'https://www.larbovert.fr/' }
if (-not $Limit) { $Limit = 30 }

Set-Location "$PSScriptRoot\.."
New-Item -ItemType Directory -Force -Path 'public/images/logo' | Out-Null
New-Item -ItemType Directory -Force -Path 'public/images/galerie' | Out-Null

$resp = Invoke-WebRequest -UseBasicParsing -Uri $BaseUrl
$html = $resp.Content

$matches = [regex]::Matches($html, 'src\s*=\s*"([^"]+\.(?:png|jpe?g|webp|svg))"', 'IgnoreCase')
$urls = @()
foreach ($m in $matches) { $urls += $m.Groups[1].Value }
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
    $out = "public/images/galerie/gallery-$i$ext"
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

Write-Host 'Scrape done.'

