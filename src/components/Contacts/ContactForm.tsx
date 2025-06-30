import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { createPortal } from "react-dom";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_raxqrxg",
        "template_kprgmgh",
        form,
        "U_Z2HhNHEjoxi9KvR"
      )
      .then(() => {
        setSuccess(true);
        setForm({ name: "", email: "", message: "", phone: "" });
      })
      .catch(() => alert("Failed to send message"))
      .finally(() => setLoading(false));
  };

  return (
    <>
      {/* ✅ Toast rendered to body directly so it's visible always */}
      {success &&
        createPortal(
          <div className="fixed top-5 right-5 z-[9999] bg-yellow-100 border border-yellow-500 text-yellow-800 px-4 py-2 rounded-md shadow-lg">
            Message sent successfully!
          </div>,
          document.body
        )}

      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your phone (Optional)"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-500 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
