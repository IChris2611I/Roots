import logo from "../assets/ROOTS-logo.png";

function NavBar() {
  return (
    <nav className="absolute z-10 w-full p-5">
      <div className="flex items-center justify-between">
        <img src={logo} alt="roots-logo" />
        <div className="flex items-center px-4 py-2 text-lg font-semibold text-white">
          <ul className="flex text-white font-montserrat">
            <li className="p-3 rounded-tl-xl rounded-bl-xl bg-white/10 hover:bg-[#3cdb56]/30 backdrop-filter backdrop-blur-sm transition duration-300">
              <a href="#activities">ACTIVITIES</a>
            </li>
            <li className="p-3 bg-white/10 hover:bg-[#3cdb56]/30 backdrop-filter backdrop-blur-sm transition duration-300">
              <a href="#rules">RULES</a>
            </li>
            <li className="p-3 rounded-tr-xl rounded-br-xl bg-white/10 hover:bg-[#3cdb56]/30 backdrop-filter backdrop-blur-sm transition duration-300">
              <a href="#inscription">INSCRIPTION</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
