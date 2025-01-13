import type { PropCardDash } from "../../interface/FunctionDash.interface";

export default function CardDash({
  id,
  index,
  isSelect,
  img,
  description,
}: PropCardDash) {
  return (
    <li
      key={id}
      className={`${
        isSelect === index ? "block" : "hidden"
      } flex flex-col gap-y-2 md:flex-row items-center justify-center gap-x-8 size-full animate-fade-left px-3 md:px-0`}
    >
      <div className="size-full md:h-[285px] md:w-[440px] rounded-lg border border-acent-v1 overflow-hidden">
        <img
          src={img}
          className="size-full object-contain md:object-cover "
          alt={id}
        />
      </div>
      <p
        className="size-fit max-w-[265px] text-base text-center md:text-left"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </li>
  );
}
