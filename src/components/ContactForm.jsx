import { useState } from "react";

const initialForm = { firstName: "", lastName: "", email: "", phone: "", message: "" };

export default function ContactForm() {
	const [form, setForm] = useState(initialForm);
	const [touched, setTouched] = useState({});

	const errors = {
		firstName: !form.firstName ? "Requis" : undefined,
		lastName: !form.lastName ? "Requis" : undefined,
		email: !/^\S+@\S+\.\S+$/.test(form.email) ? "Email invalide" : undefined,
		phone: !/^\+?\d[\d\s.-]{7,}$/.test(form.phone) ? "Téléphone invalide" : undefined,
		message: form.message.trim().length < 10 ? "Min. 10 caractères" : undefined,
	};

	const isValid = Object.values(errors).every((e) => !e);

	function handleChange(e) {
		const { name, value } = e.target;
		setForm((f) => ({ ...f, [name]: value }));
	}

	function handleBlur(e) {
		const { name } = e.target;
		setTouched((t) => ({ ...t, [name]: true }));
	}

	return (
		<form className="grid gap-4 max-w-xl">
			<div className="grid md:grid-cols-2 gap-4">
				<div>
					<label className="block text-sm text-gray-700">Prénom</label>
					<input name="firstName" value={form.firstName} onChange={handleChange} onBlur={handleBlur} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Prénom" />
					{touched.firstName && errors.firstName && <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>}
				</div>
				<div>
					<label className="block text-sm text-gray-700">Nom</label>
					<input name="lastName" value={form.lastName} onChange={handleChange} onBlur={handleBlur} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Nom" />
					{touched.lastName && errors.lastName && <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>}
				</div>
			</div>
			<div>
				<label className="block text-sm text-gray-700">Email</label>
				<input name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="vous@exemple.fr" />
				{touched.email && errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
			</div>
			<div>
				<label className="block text-sm text-gray-700">Téléphone</label>
				<input name="phone" value={form.phone} onChange={handleChange} onBlur={handleBlur} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="+33 6 12 34 56 78" />
				{touched.phone && errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
			</div>
			<div>
				<label className="block text-sm text-gray-700">Message</label>
				<textarea name="message" rows={5} value={form.message} onChange={handleChange} onBlur={handleBlur} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Votre message..." />
				{touched.message && errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
			</div>
			<div className="flex gap-3">
				<button type="button" disabled={!isValid} className="inline-flex items-center rounded-md bg-green-700 px-4 py-2 text-white disabled:opacity-50">Envoyer via WhatsApp</button>
				<button type="button" disabled={!isValid} className="inline-flex items-center rounded-md border border-green-700 px-4 py-2 text-green-700 disabled:opacity-50">Envoyer par e‑mail</button>
			</div>
		</form>
	);
}


