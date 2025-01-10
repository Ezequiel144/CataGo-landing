interface PropCardFunction {
  id: string;
  image: string;
  description: string;
  color: string;
}

export default function CardFunction({
  id,
  image,
  description,
  color,
}: PropCardFunction) {
  return (
    <li className="w-[650px] h-[420px] rounded-lg border border-primaryColor-black relative overflow-hidden shadow-lg hover:-translate-y-2 duration-300">
      <div
        className={`flex items-center justify-between size-full ${
          id === "selectProducts"
            ? "flex-row pr-1 gap-x-2"
            : id === "addCart"
            ? "flex-row-reverse pl-2"
            : id === "checkout"
            ? "flex-col items-center justify-center py-8"
            : id === "sendSms"
            ? "flex-col-reverse items-center justify-center py-8"
            : ""
        }`}
      >
        <div className="w-[420px] h-[273px] border border-acent-v3 rounded-lg">
          <img
            src={image}
            alt={id}
            className="rounded-lg size-full object-cover"
          />
        </div>
        <h3
          className={`text-xl font-normal ${
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
