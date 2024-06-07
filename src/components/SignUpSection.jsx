import { useState } from "react";
import cave from "../assets/images/cave.jpg";
import SignInModal from "../components/SignInModal";

export default function SignUpSection({ buttonText }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="relative" id="inscription">
      <div className="relative w-full h-full ">
        {modalOpen && <SignInModal setModalOpen={setModalOpen} />}

        <img src={cave} alt="cave-img" className="w-full h-full object-fit" />
        <div className="absolute text-white left-[30%] top-1/2 ">
          <h2 className="mb-5 text-4xl font-bold">
            Join us in order to live <br /> a great experience far from the
            civilization <br /> and the stress of everyday life!
          </h2>
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 text-lg font-semibold text-white transition duration-300 border-2 border-white rounded-md bg-white/0 hover:bg-gradient-to-r hover:from-green-400/20 hover:to-green-700/30 hover:border-white hover:scale-105 hover:backdrop-filter backdrop-blur-sm hover:backdrop-blur-sm"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
