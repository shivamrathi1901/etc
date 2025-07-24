import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://script.google.com/macros/s/AKfycbxajbGKTw5ceS5OnEUoHJIKaW59l1PWjNXGgSrj_JdE_jV2u_GhhaAWLsONQ-f_fOio/exec", {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        // Show styled success message with animation
        setShowSuccess(true);

        // Reload after animation ends (1.5s)
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    };

    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="section-title" style={{ textAlign: "center" }}>
                    Contact Us
                </h2>
                <p className="section-subtitle">
                    Fill out the form below and we’ll get back to you shortly.
                </p>

                {showSuccess && (
                    <div className="success-alert">
                        Message Sent Successfully!
                    </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit" className="primary">
                        Send Message
                    </button>
                </form>
            </div>

            {/* Inline CSS (move to .css file if needed) */}
            <style>{`
        .success-alert {
          position: fixed;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          background: #4caf50;
          color: white;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 500;
          opacity: 0;
          animation: slideFade 1.5s ease forwards;
          z-index: 9999;
        }

        @keyframes slideFade {
          0% {
            top: -50px;
            opacity: 0;
          }
          20% {
            top: 30px;
            opacity: 1;
          }
          80% {
            top: 30px;
            opacity: 1;
          }
          100% {
            top: -50px;
            opacity: 0;
          }
        }
      `}</style>
        </section>
    );
}
