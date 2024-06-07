export default function Rules({ dataIcon }) {
  return (
    <div className="flex flex-col items-center my-12" id="rules">
      <h2 className="mb-6 text-4xl font-semibold text-[#7B8A3E] ">
        Rules of the Roots
      </h2>
      <ul className="flex justify-center gap-10 m-10">
        {dataIcon.map((icon, id) => (
          <li key={id}>
            <img src={icon} alt={id} className="w-14" />
          </li>
        ))}
      </ul>
    </div>
  );
}
