import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import LinkedIn from "../../assets/linkedin.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "51431aa9-c8d1-4a43-bb15-adb595f3cdbc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Email sent successfully"); // Show success toast
      event.target.reset(); // Clear form fields
    } else {
      toast.error("Failed to send email"); // Show error toast
    }
  };

  return (
    <div id="contact" className="contact">
      <ToastContainer /> {/* Add ToastContainer here */}
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently open to new job opportunities, so feel free to reach
            out if you have a position that aligns with my skills. You can
            contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>rayyanarif@65@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+923100020842</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Karachi, Pakistan</p>
            </div>
            <div className="contact-detail">
              <img src={LinkedIn} alt="" />
              <p>
              <a href="https://www.linkedin.com/in/muhammad-rayyan-828762203" target="_blank">Linked In/Muhammad Rayyan</a></p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right" autoComplete="off">
          {" "}
          {/* Disable autocomplete */}
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            autoComplete="off"
          />{" "}
          {/* Disable autocomplete for input */}
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            autoComplete="off"
          />{" "}
          {/* Disable autocomplete for input */}
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            rows="8"
            autoComplete="off"
          ></textarea>{" "}
          {/* Disable autocomplete for textarea */}
          <button className="contact-submit" type="submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
