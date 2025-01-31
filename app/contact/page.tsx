
"use client"
import { useState } from 'react';

export default function ContactUs ()  {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // toast({
      //   title: "Form submitted!",
      //   description: "We'll get back to you soon.",
      // });
      setFormData({ name: '', email: '', phone: '', description: '' });
    }, 2000);
  }

  return (
    <div className="container mx-auto px-4 py-8 my-14 text-black">
      <div className="max-w-2xl mx-auto border p-6 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2">
            We&apos;d love to hear from you. Please fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-6 mt-6">
          <div className="form-item">
            <label className="block text-lg font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="form-item">
            <label className="block text-lg font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="form-item">
            <label className="block text-lg font-medium" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+91 83456xxxxx"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <p className="mt-1 text-sm text-gray-500">Please include your country code.</p>
          </div>

          <div className="form-item">
            <label className="block text-lg font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Tell us how we can help you..."
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-amber-600 text-black font-bold rounded-lg hover:bg-amber-800 disabled:bg-gray-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};


