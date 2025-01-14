import { listNavbar } from "../../../utils/navbar";

export default function SideBar({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: (x: boolean) => void;
}) {
  return (
    <section
      className={`${
        isActive ? "left-0" : " -left-full"
      } transition-all duration-300 fixed top-0 w-full h-screen bg-primaryColor-white z-10 `}
    >
      <article className="flex items-center justify-between bg-primaryColor-black text-primaryColor-white p-4">
        <h2 className="font-semibold text-2xl">Menu</h2>
        <button onClick={() => setIsActive(false)}>
          <i className="ri-close-large-line font-normal text-2xl"></i>
        </button>
      </article>
      <ul className="flex flex-col gap-y-4 p-4">
        {listNavbar.map((item) => (
          <li key={item.id} className="text-2xl font-normal capitalize">
            <a href={`#${item.id}`} onClick={() => setIsActive(false)}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
