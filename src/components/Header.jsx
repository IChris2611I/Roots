import NavBar from "./NavBar";
import video from "../assets/videoALT.mp4";
import Button from "./Button";

export default function Header({ onButtonClick }) {
  return (
    <header className="relative h-screen">
      <NavBar />
      <div className="relative flex items-center justify-center h-full">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          src={video}
          type="video/mp4"
        ></video>
      </div>
      <div className="absolute p-10 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="relative p-10">
          <h1 className="relative z-20 p-1 text-6xl font-semibold text-white">
            WELCOME BACK <br /> TO YOUR{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
              ROOTS
            </span>
          </h1>
        </div>
      </div>
      <div className="absolute transform -translate-x-1/2 bottom-10 left-1/2">
        <Button onClick={onButtonClick} />
      </div>
    </header>
  );
}
