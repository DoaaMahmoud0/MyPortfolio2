import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animation/Animation1.json";
import contactAnimation from "../../../src/animation/Animation2.json";


const Contact = () => {
  const [state, handleSubmit] = useForm("xqaebklj");

  return (
    <section className="contactUs" id="Contact">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="subtitle">Contact us for more information</p>

      <div style={{justifyContent:"space-between"}} className="flex">
        <form onSubmit={handleSubmit} className="flex">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              id="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea required id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting...." : "Submit"}
          </button>

          {state.succeeded && (
            <p  className="flex" style={{ fontSize: "18px", marginTop: "1.7rem" }}>
              <Lottie loop={false} style={{ height: 55 }} animationData={doneAnimation} />
              Your Message has been sent Successfully
            </p>
          )}
        </form>

        <div className="animation ">
        <Lottie style={{ height:350 }} animationData={contactAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
