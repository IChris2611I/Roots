function Button({ onClick }) {
  return (
    <div>
      <button
        className="px-4 py-2 text-lg font-semibold text-white transition duration-300 border-2 border-white rounded-md bg-white/0 hover:bg-gradient-to-r hover:from-green-400/20 hover:to-green-700/30 hover:border-white hover:scale-105 hover:backdrop-filter backdrop-blur-sm hover:backdrop-blur-sm"
        onClick={onClick}
      >
        Scroll Down
      </button>
    </div>
  );
}

export default Button;
