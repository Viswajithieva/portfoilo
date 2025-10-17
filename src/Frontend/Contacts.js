import React, { useState } from "react";
import "./Contacts.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return false;
    return /\S+@\S+\.\S+/.test(form.email);
  };

  // Replace with your Formspree form endpoint
  const FORM_ENDPOINT = "https://formspree.io/f/your_form_id_here";

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("ok");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Mailto fallback
  const mailto = `mailto:viswajithviswajith91@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
    form.name || "Viswajith"
  )}&body=${encodeURIComponent(form.message || "")}`;

  return (
    <section className="contact-section" id="contact">
      <h2>Contact</h2>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={form.message}
            onChange={onChange}
            placeholder="Tell me about your project or question..."
            required
          />

          <div className="form-actions">
            <button
              type="submit"
              className="btn-primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            <a className="btn-secondary" href={mailto}>
              Send with Email
            </a>
          </div>

          {status === "ok" && <p className="form-success">Thanks — message sent!</p>}
          {status === "error" && (
            <p className="form-error">Please fill all fields correctly or try again later.</p>
          )}
        </form>

        <aside className="contact-info">
          <div className="info-item">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <a href="mailto:viswajithviswajith91@gmail.com">
                viswajithviswajith91@gmail.com
              </a>
            </div>
          </div>

          <div className="info-item">
            <FaPhone />
            <div>
              <h4>Phone</h4>
              <a href="tel:+911234567890">+917598128786</a>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <span> kalakad,Tirunelveli, Tamil Nadu, India</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contacts;
