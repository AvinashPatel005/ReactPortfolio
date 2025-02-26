import React, { useReducer, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import MotionPath from "./motion_path";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const reducer = (state, newState) => ({ ...state, ...newState });

const Contact = () => {
  const form = useRef();
  const [state, updateState] = useReducer(reducer, initialState);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (state.loading) return;

    const formData = new FormData(form.current);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    let errors = [];

    if (!name) errors.push("Name is required.");
    if (!email) errors.push("Email is required.");
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) errors.push("Invalid email address.");
    if (!message) errors.push("Message cannot be empty.");

    if (errors.length > 0) {
        toast.error(errors.join("\n"), { position: "bottom-right", duration: 5000 });
        return;
    }

    updateState({ loading: true, error: null, success: false });

    try {
        await emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            { publicKey: import.meta.env.VITE_PUBLIC_KEY }
        );

        updateState({ loading: false, success: true });
        form.current.reset();
        toast.success("Email sent successfully!", { position: "bottom-right" });

    } catch (error) {
        updateState({ loading: false, error: "Failed to send email" });
        toast.error("Failed to send email. Try again.", { position: "bottom-right" });
    }
};
  const ref = useRef(null);
  const { scrollYProgress: headingScroll } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const headingY = useTransform(headingScroll, [0, 1], [-100, 0]);
  const headingOpacity = useTransform(headingScroll, [0.2, 1], [0, 1]);

  return (
    <section className="contact" id="contact" ref={ref}>
      <Toaster />
      <div className="contact-wrapper">
        <motion.div initial="hidden" whileInView="visible" className="left-contact">
          <motion.h1 style={{ y: headingY, opacity: headingOpacity }}>GET IN TOUCH</motion.h1>
          <motion.form ref={form} onSubmit={sendEmail}>
            <motion.label htmlFor="name">Name</motion.label>
            <motion.input id="name" type="text" placeholder="Enter your name" name="name" />

            <motion.label htmlFor="email">Email</motion.label>
            <motion.input id="email" type="email" placeholder="Enter your email" name="email" />

            <motion.label htmlFor="message">Message</motion.label>
            <motion.textarea id="message" rows={5} placeholder="Enter your message" name="message" />

            <motion.button type="submit" disabled={state.loading} style={{ cursor: state.loading ? "not-allowed" : "pointer" }}>
              {state.loading ? "SENDING..." : "SEND"}
            </motion.button>
          </motion.form>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" className="right-contact">
          <motion.img src="/assets/contacts.png" alt="contact" />
          <MotionPath />
          <motion.div>
            <motion.div className="contact-card">
              <i className="bi bi-envelope-fill"></i>
              <p>awinash123patel@gmail.com</p>
            </motion.div>
            <motion.div className="contact-card">
              <i className="bi bi-telephone-fill"></i>
              <p>+91 706 189 8451</p>
            </motion.div>
          </motion.div>
          <motion.div className="small-contact-card">
            <motion.a href="https://www.instagram.com/_avinash_patel__" target="blank">
              <img src="/assets/contacts/instagram.png" alt="Instagram" />
            </motion.a>
            <motion.a href="https://github.com/AvinashPatel005" target="blank">
              <img src="/assets/contacts/github.png" alt="GitHub" />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/avinash-patel-9b5812298/" target="blank">
              <img src="/assets/contacts/linkedin.png" alt="LinkedIn" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Contact;
