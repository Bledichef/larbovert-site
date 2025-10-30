import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
	return (
		<main className="max-w-6xl mx-auto px-4 py-10">
			<h1 className="text-2xl font-semibold">Contact</h1>
			<p className="mt-4 text-gray-600">Remplissez le formulaire ci‑dessous, nous reviendrons vers vous rapidement.</p>
			<div className="mt-6">
				<ContactForm />
			</div>
		</main>
	);
}


