import { useLoaderData } from "react-router-dom";
import { useRef, useState } from "react";
import Header from "../components/Header";
import MainSection from "../components/MainSection";

export default function HomePage() {
  const data = useLoaderData();

  const mainRef = useRef(null);

  const handleButtonClick = () => {
    if (mainRef.current) {
      const scrollOffset =
        mainRef.current.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Header onButtonClick={handleButtonClick} />
      <MainSection mainRef={mainRef} data={data} />
    </div>
  );
}
