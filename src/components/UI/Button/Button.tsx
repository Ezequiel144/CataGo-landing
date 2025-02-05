export default function button({
  name,
  href,
  type,
  style,
}: {
  name: string;
  href: string;
  type: 1 | 2;
  style?: string;
}) {
  if (type === 1) {
    return (
      <a
        href={href}
        className={`${style} w-fit cursor-pointer bg-primaryColor-black px-4 py-2 rounded-lg text-primaryColor-white font-semibold text-xl group`}
      >
        <div className="relative overflow-hidden capitalize">
          <p
            className={`group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] ${style}`}
          >
            {name}
          </p>
          <p
            className={`absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] ${style}`}
          >
            {name}
          </p>
        </div>
      </a>
    );
  } else {
    return (
      <a
        href={href}
        className={` ${style} w-fit cursor-pointer bg-primaryColor-white px-4 py-2 rounded-lg text-primaryColor-black font-semibold text-xl group`}
      >
        <div className="relative overflow-hidden">
          <p
            className={`group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] ${style}`}
          >
            {name}
          </p>
          <p
            className={`absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] ${style}`}
          >
            {name}
          </p>
        </div>
      </a>
    );
  }
}
