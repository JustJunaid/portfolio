import React from "react";
import { handleTrackCustomEvent } from "../utils";

export default function ContactForm() {
  return (
    <>
      <div class="form-row">
        <div class="form-group col-md-6">
          <input
            class="form-control form-control-lg"
            type="text"
            name="name"
            placeholder="Your Name"
            required="true"
          />
        </div>

        <div class="form-group col-md-6">
          <input
            class="form-control form-control-lg"
            type="email"
            name="email"
            placeholder="Your Email Address"
          />
        </div>
      </div>

      <div class="form-group">
        <textarea
          class="form-control form-control-lg"
          rows="4"
          placeholder="Your Message"
          name="message"
        ></textarea>
      </div>

      <div class="form-group">
        <div data-netlify-captcha="true"></div>
      </div>

      <div class="text-center">
        <button
          class="btn btn-lg btn-primary"
          type="submit"
          onClick={() => handleTrackCustomEvent("SUBMIT_INQUIRY")}
        >
          Submit Inquiry
        </button>
      </div>
    </>
  );
}
