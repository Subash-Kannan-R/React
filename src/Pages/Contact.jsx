import { useState } from "react";
import Footer from "../Components/Footer";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	const NAME_LIMIT = 100;
	const MESSAGE_LIMIT = 500;

	const handleSubmit = (e) => {
		e.preventDefault();
		// simple submit action - replace with real submit logic
		console.log({ name, email, phone, message });
		alert("Form submitted (check console). Thanks!");
	};

	return (
		<div className="min-h-screen bg-amber-50 py-12 px-6">
			<div className="max-w-3xl mx-auto">
				<h1 className="text-4xl font-serif font-bold text-rose-800 mb-4">Contact Us</h1>
				<p className="text-gray-700 mb-6">If you have any queries, suggestions or feedback, please contact us by filling the form below.</p>

				<div className="bg-white p-8 rounded shadow">
					<p className="text-sm text-gray-600 mb-4">Fields marked with an <span className="text-red-600">*</span> are required</p>

					<form onSubmit={handleSubmit}>
						<div className="mb-6">
							<label className="block text-sm font-medium text-rose-800 mb-2">Name <span className="text-red-600">*</span></label>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								maxLength={NAME_LIMIT}
								className="w-full border border-gray-300 bg-gray-50 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300"
								placeholder="Enter your name"
								required
							/>
							<div className="text-xs text-gray-500 mt-1">{NAME_LIMIT - name.length} of {NAME_LIMIT} Character(s) left</div>
						</div>

						<div className="mb-6">
							<label className="block text-sm font-medium text-rose-800 mb-2">Email Id <span className="text-red-600">*</span></label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full border border-gray-300 bg-gray-50 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300"
								placeholder="you@example.com"
								required
							/>
						</div>

						<div className="mb-6">
							<label className="block text-sm font-medium text-rose-800 mb-2">Contact Number <span className="text-red-600">*</span></label>
							<input
								type="tel"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="w-full border border-gray-300 bg-gray-50 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300"
								placeholder="+91 8888888888"
								required
							/>
						</div>

						<div className="mb-4">
							<label className="block text-sm font-medium text-rose-800 mb-2">Message <span className="text-red-600">*</span></label>
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								maxLength={MESSAGE_LIMIT}
								rows={8}
								className="w-full border border-gray-300 bg-gray-50 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300"
								placeholder="Type your message here"
								required
							/>
							<div className="text-xs text-gray-500 mt-1">{MESSAGE_LIMIT - message.length} of {MESSAGE_LIMIT} Character(s) left</div>
						</div>

						<div className="mt-6">
							<button
								type="submit"
								className="inline-block bg-rose-800 text-white px-5 py-2 rounded shadow hover:bg-rose-900 transition"
							>
								Proceed
							</button>
						</div>
					</form>
				</div>
			</div>
                    <Footer />

		</div>

	);
};

export default Contact;


