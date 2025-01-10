import { listNavbar } from "../../../utils/navbar";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between h-24 w-full max-w-[1216px] mx-auto">
      <img src="/svg/logo-desktop.svg" alt="" />
      <nav>
        <ul className="flex items-center gap-x-4">
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
      </nav>
    </header>
  );
}
