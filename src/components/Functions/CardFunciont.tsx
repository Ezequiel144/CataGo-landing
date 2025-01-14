import type { PropCardFunction } from "../../interface/Function.interface";

export default function CardFunction({
  id,
  image,
  description,
  color,
}: PropCardFunction) {
  return (
    <li className="size-full py-10 md:py-0 md:w-[650px] md:h-[420px] rounded-lg border border-primaryColor-black relative overflow-hidden shadow-lg hover:-translate-y-2 duration-300">
      <div
        className={`flex items-center justify-between size-full ${
          id === "selectProducts"
            ? "md:flex-row flex-col pr-1 gap-x-2"
            : id === "addCart"
            ? "md:flex-row-reverse flex-col pl-2"
            : id === "checkout"
            ? "flex-col items-center justify-center py-8"
            : id === "sendSms"
            ? "flex-col-reverse items-center justify-center py-8"
            : ""
        }`}
      >
        <div className=" size-full md:w-[420px] md:h-[273px] rounded-lg px-3 md:px-0">
          <img
            src={image}
            alt={id}
            className="rounded-lg size-full object-cover"
          />
        </div>
        <h3
          className={` text-base md:text-xl font-normal ${
            (id === "checkout" || id === "sendSms") &&
            "text-center max-w-[430px]"
          } ${description === " productos" && "font-pacifico"}`}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div
        className={`size-full absolute top-0 bg-gradient-to-t -z-10 ${
          color === "blue"
            ? "from-secondaryColor-blue"
            : color === "aqua"
            ? "from-secondaryColor-aqua"
            : color === "magenta"
            ? "from-secondaryColor-magenta"
            : "from-secondaryColor-orange"
        }`}
      ></div>
    </li>
  );
}
