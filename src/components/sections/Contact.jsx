// src/components/Contact.jsx
import React, { useState } from "react";
import "../styles/Contact.css";
import { motion } from "framer-motion";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message: "" }

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "Please fill name, email and message." });
      return false;
    }
    // basic email regex
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: data.message || "Message sent successfully." });
        setForm(initialForm);
      } else {
        setStatus({ type: "error", message: data.message || "Failed to send message. Try again." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Network error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Want to collaborate or hire me? Send a short message and I’ll reply within 24–48 hours.
        </p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> italiyaharshil78@gmail.com</p>
            <p><strong>Phone:</strong> +91 93289 40845</p>
            <div className="contact-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              <a href="mailto:italiyaharshil78@gmail.com">Email</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject (optional)"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              placeholder="Write your message..."
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? <span className="spinner" /> : "Send Message"}
            </button>

            {status && (
              <div className={`form-status ${status.type === "success" ? "success" : "error"}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
