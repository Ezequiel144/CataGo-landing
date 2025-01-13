import type { PropCardFac } from "../../interface/Fac.interface";

export default function CardFac({
  index,
  isActive,
  setIsActive,
  question,
  response,
}: PropCardFac) {
  return (
    <li
      className="flex flex-col gap-y-3 overflow-hidden"
      onClick={() => {
        isActive === index ? setIsActive(null) : setIsActive(index);
      }}
    >
      <div className="flex items-center justify-between cursor-pointer">
        <span className=" text-xl sm:text-2xl font-semibold">
          ¿ {question} ?
        </span>
        <i className="ri-add-fill text-2xl" />
      </div>
      <p
        className={`${
          isActive === index ? "translate-y-0 h-fit" : " translate-y-full h-0"
        } transition-all duration-500 `}
      >
        {response}
      </p>
    </li>
  );
}
