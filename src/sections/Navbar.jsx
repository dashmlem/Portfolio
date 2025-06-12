import { useState } from "react";
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link">Home</a>
      </li>
      <li className="nav-li">
        <a className="nav-link">Home</a>
      </li>
      <li className="nav-li">
        <a className="nav-link">Home</a>
      </li>
      <li className="nav-li">
        <a className="nav-link">Home</a>
      </li>
      <li className="nav-li">
        <a className="nav-link">Home</a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-autp c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
            Daria
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "'assets/menu.svg'"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex"></nav>
          <Navigation />
        </div>
      </div>
      <div className="block overflow-hidden text-center sm:hidden"></div>
    </div>
  );
};

export default Navbar;
