import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function SignInModal({ setModalOpen }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vytidjm", "template_y3867sn", form.current, {
        publicKey: "84gKbC-920B9AFK0o",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    setModalOpen(false);
  };

  function onClose(e) {
    if (e.target.id === "backdrop") setModalOpen(false);
  }

  return (
    <section
      className="absolute top-0 left-0 z-50 flex flex-col items-center justify-center w-screen h-full bg-black/50"
      onClick={(e) => onClose(e)}
      id="backdrop"
    >
      <div className="p-10 text-white rounded-lg bg-green-800/80 backdrop-filter backdrop-blur-sm">
        <form
          action=""
          className="flex flex-col"
          onSubmit={(e) => sendEmail(e)}
          ref={form}
        >
          <div className="flex gap-x-4">
            <label className="form-item" htmlFor="firstname">
              firstname
              <input type="text" name="firstname" />
            </label>
            <label className="form-item" htmlFor="lastname">
              lastname
              <input type="text" name="lastname" />
            </label>
          </div>
          <label className="form-item" htmlFor="email">
            email
            <input type="mail" name="email" />
          </label>
          <label className="form-item" htmlFor="phone">
            phone number
            <input type="tel" name="phone" placeholder="Not required..." />
          </label>
          <div className="flex justify-center gap-4">
            <label className="form-item" htmlFor="debutDate">
              Check-in:
              <input className="text-black" type="date" name="debutDate" />
            </label>
            <label className="form-item" htmlFor="endDate">
              Check-out:
              <input className="text-black" type="date" name="endDate" />
            </label>
          </div>
          <button className="p-2 mt-4 border-2" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}
