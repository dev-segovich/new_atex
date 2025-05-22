'use client';

import { useState } from 'react';
// import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSuccessMessage('Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fbfc] text-[#364350]">
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img
          src="/img/a6.webp"
          alt="Contact Us"
          className="brightness-[0.7] w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">Contact Us</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">We&apos;d love to hear from you</h2>

        {successMessage && (
          <div className="mb-6 bg-green-100 text-green-800 px-4 py-3 rounded border border-green-300 text-center transition">
            {successMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full border ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#364350]`}
              />
              {errors.firstName && (
                <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full border ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#364350]`}
              />
              {errors.lastName && (
                <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#364350]`}
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#364350]`}
            />
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">{errors.message}</p>
            )}
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#364350] text-white px-6 py-3 rounded hover:bg-[#2e3a44] transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
