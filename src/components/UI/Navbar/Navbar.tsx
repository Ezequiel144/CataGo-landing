import { useState } from "react";
import { listNavbar } from "../../../utils/navbar";
import SideBar from "../Sidebar/SideBar";

export default function Navbar() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <header className="flex items-center justify-between h-24 w-full max-w-[1216px] mx-auto px-3 xl:px-0">
      <img src="/svg/logo-desktop.svg" alt="" />
      <nav>
        <ul className="hidden items-center gap-x-4 md:flex">
          {listNavbar.map((item) => (
            <li
              key={item.id}
              className=" hover:text-acent-v1 transition-all duration-200"
            >
              <a
                href={`#${item.id}`}
                className="text-xl font-normal capitalize"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="block md:hidden" onClick={() => setIsActive(true)}>
          <i className="ri-menu-line text-2xl" />
        </button>
      </nav>
      <SideBar isActive={isActive} setIsActive={setIsActive} />
    </header>
  );
}
