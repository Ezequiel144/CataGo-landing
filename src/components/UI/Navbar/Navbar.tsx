import { listNavbar } from "../../../utils/navbar";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between h-24 w-full max-w-[1216px] mx-auto px-3 xl:px-0">
      <img src="/svg/logo-desktop.svg" alt="" />
      <nav>
        <ul className="hidden items-center gap-x-4 md:flex">
          {listNavbar.map((item) => (
            <li className=" hover:text-acent-v1 transition-all duration-200">
              <a
                href={`#${item.id}`}
                className="text-xl font-normal capitalize"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="block md:hidden">
          <i className="ri-menu-line text-2xl" />
        </button>
      </nav>
    </header>
  );
}
