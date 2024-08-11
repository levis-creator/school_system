import { Menu } from "lucide-react";
import { FC } from "react";
interface NavBarProps {
  open_menu: () => void;
  isOpen: boolean;
}
const NavBar: FC<NavBarProps> = ({ open_menu, isOpen }) => {
  return (
    <nav className="sticky top-0 z-20 flex justify-between bg-white py-5 sm:px-14 px-2">
      {
        <span className=" font-serif text-4xl sm:hidden block text-center text-blue-600">
          S
        </span>
      }
      <button
        onClick={open_menu}
        className=" bg-blue-600 text-white p-1 rounded-md"
      >
        <Menu />
      </button>
    </nav>
  );
};

export default NavBar;
