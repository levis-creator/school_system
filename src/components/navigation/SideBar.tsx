import { MenuItem } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Animation } from "rsuite";
interface SideBarProps {
  isOpen: boolean;
  open_menu: () => void;
  windowWidth: number;
  menu_list: MenuItem[];
  base_route: string;
}
const SideBar: FC<SideBarProps> = ({
  isOpen,
  open_menu,
  windowWidth,
  menu_list,
  base_route,
}) => {
  let menuItemStyle = windowWidth >= 640 && isOpen === false ? "hidden" : "";

  return (
    <Animation.Slide in={isOpen} placement="left">
      <aside
        className={` ${isOpen ? "fixed" : "hidden"} top-0 left-0 z-40 w-64`}
      >
        <div className={`h-screen px-3 py-4 overflow-y-auto bg-white`}>
          <ul className="space-y-2 font-medium">
            <li className="flex items-center justify-center">
              {!isOpen ? (
                <span className="font-serif text-4xl block text-center text-blue-600">
                  S
                </span>
              ) : (
                <Image
                  src="/assets/images/schoolpre-high-resolution-logo-transparent.png"
                  width={0}
                  height={0}
                  alt="logo"
                  unoptimized
                  className="h-20 w-auto "
                />
              )}
            </li>
            {menu_list.map((item, i) => (
              <DashBoardItem data={item} key={i} className={menuItemStyle} />
            ))}
          </ul>
        </div>
      </aside>
    </Animation.Slide>
  );
};
// Single menuItems
const DashBoardItem = ({
  data,
  className,
  base_route,
}: {
  data: MenuItem;
  className?: string;
  base_route: string; // Base route for generating menu links  // Example: "/dashboard" or "/admin"
}) => {
  return (
    <li>
      <Link
        href={`${base_route}/${data.menu_link}`}
        className="flex items-center p-2 text-gray-600 rounded-lg hover:bg-blue-100 group"
      >
        <div className="p-1">{data.menu_icon}</div>
        <span className={`ms-3 ${className}`}>{data.menu_title}</span>
      </Link>
    </li>
  );
};

export default SideBar;
