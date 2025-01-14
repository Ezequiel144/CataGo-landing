import { listNavbar } from "../../../utils/navbar";

export default function Footer() {
  return (
    <footer className="w-full h-fit lg:h-[280px] bg-primaryColor-black text-primaryColor-white py-16 px-3 xl:px-0">
      <section className="w-full lg:max-w-[1216px] mx-auto h-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-y-10">
        <article className="h-full flex flex-col items-center lg:items-start justify-between gap-y-8">
          <ul className="flex flex-col lg:flex-row items-center gap-4 font-normal text-xl">
            {listNavbar.map((item, index: number) => (
              <li
                key={index}
                className="hover:text-acent-v1 transition-all duration-200"
              >
                <a href={`#${item.id}`}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-4">
            <a href="#" className="size-fit">
              <i className="ri-instagram-line text-3xl hover:text-acent-v1 transition-all duration-200" />
            </a>
            <a href="#" className="size-fit">
              <i className="ri-tiktok-fill text-3xl hover:text-acent-v1 transition-all duration-200" />
            </a>
          </div>
        </article>
        <article className="h-full flex flex-col gap-y-8 justify-between">
          <img src="/svg/logo-footer.svg" alt="" />
          <ul className="flex items-center gap-x-4 text-xl font-pacifico">
            <li>
              <a
                href="#"
                className="hover:text-acent-v1 transition-all duration-200"
              >
                Cosultas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-acent-v1 transition-all duration-200"
              >
                Email
              </a>
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
}
