import Activities from "./Activities";
import Carousel from "./Carousel";
import Rules from "./Rules";
import SignUpSection from "./SignUpSection";

export default function MainSection({ mainRef, data }) {
  return (
    <main ref={mainRef} className="relative h-screen mt-10 ">
      <div className="mx-[10%]">
        <p>{data.description}</p>
        <div className="flex justify-center mt-20">
          <Carousel />
        </div>
      </div>
      <section>
        <Activities data={data.activities} />
      </section>
      <section>
        <Rules dataIcon={data.rulesIcons} />
      </section>
      <SignUpSection dataText={data.signInTitle} buttonText={data.signInBtn} />
    </main>
  );
}
