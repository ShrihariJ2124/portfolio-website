import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // -----------------------------
  // FORM STATE
  // -----------------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // -----------------------------
  // INPUT HANDLER
  // -----------------------------
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // -----------------------------
  // VALIDATION
  // -----------------------------
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // -----------------------------
  // SUBMIT HANDLER (SEND ONLY 1 EMAIL TO YOU)
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          to_email: "shriharikodiyala04@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  // -----------------------------
  // CONTACT ITEMS
  // -----------------------------
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "shriharikodiyala04@gmail.com",
      link: "mailto:shriharikodiyala04@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "9353986707",
      link: "tel:9353986707",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Mysore, India",
      link: "", // no scroll
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/shrihari-jayaramu/",
      link: "https://www.linkedin.com/in/shrihari-jayaramu/",
    },
  ];

  // -----------------------------
  // SVG ICONS FOR CONNECT SECTION
  // -----------------------------
  const GitHubIcon = (
    <svg
      className="w-7 h-7"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.9.1-.7.4-1.1.6-1.4-2.6-.3-5.4-1.4-5.4-6 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1.9-.2 1.9-.4 2.9-.4 1 0 2 .1 2.9.4 2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.6-2.8 5.7-5.5 6 .4.4.7 1 .7 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );

  const LinkedInIcon = (
    <svg
      className="w-7 h-7"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.45 20.45h-3.6v-5.6c0-1.3-.03-3-1.85-3s-2.15 1.4-2.15 2.9v5.7H9.3V9h3.4v1.6h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.35 4.22 5.4v6.3zM5.34 7.43c-1.15 0-2.07-.92-2.07-2.06 0-1.13.92-2.06 2.07-2.06 1.14 0 2.06.93 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM7.13 20.45H3.55V9h3.58v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.73v20.55C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.73C24 .77 23.2 0 22.23 0z" />
    </svg>
  );

  const EmailIcon = (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth="2"
        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto my-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ----------------- FORM ----------------- */}
          <div data-aos="fade-right">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 bg-gray-700/50 text-white border rounded-lg ${
                    errors.name ? "border-red-500" : "border-gray-600/50"
                  }`}
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 bg-gray-700/50 text-white border rounded-lg ${
                    errors.email ? "border-red-500" : "border-gray-600/50"
                  }`}
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}

                {/* MESSAGE */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Your Message"
                  className={`w-full px-4 py-3 bg-gray-700/50 text-white border rounded-lg resize-none ${
                    errors.message ? "border-red-500" : "border-gray-600/50"
                  }`}
                />
                {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}

                {/* BTN */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* STATUS */}
                {submitStatus === "success" && (
                  <p className="text-green-400 text-sm p-3 bg-green-500/20 rounded-lg">
                    Message sent successfully!
                  </p>
                )}

                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm p-3 bg-red-500/20 rounded-lg">
                    Something went wrong. Try again.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* ----------------- CONTACT INFO ----------------- */}
          <div className="space-y-6" data-aos="fade-left">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                onClick={() => info.link && window.open(info.link, "_blank")}
                className="cursor-pointer bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 flex items-center space-x-4"
              >
                <div className="text-2xl">{info.icon}</div>
                <div>
                  <p className="text-white font-semibold">{info.title}</p>
                  <p className="text-gray-400 text-sm">{info.value}</p>
                </div>
              </div>
            ))}

            {/* SOCIAL */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-xl text-white font-bold mb-6">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Shriharikodiyala13"
                  target="_blank"
                  className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
                >
                  {GitHubIcon}
                </a>

                <a
                  href="https://www.linkedin.com/in/shrihari-jayaramu/"
                  target="_blank"
                  className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
                >
                  {LinkedInIcon}
                </a>

                <a
                  href="mailto:shriharikodiyala04@gmail.com"
                  className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
                >
                  {EmailIcon}
                </a>
              </div>
            </div>

            {/* AVAILABILITY */}
            <div className="bg-green-500/10 p-6 rounded-2xl border border-green-500/20">
              <h4 className="text-white font-semibold mb-2">Available for Opportunities</h4>
              <p className="text-gray-300 text-sm">
                I’m open to full-time roles, freelance work, and collaborations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
