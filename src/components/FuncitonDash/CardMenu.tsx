interface PropCardMenu {
  id: string;
  index: number;
  isSelect: number;
  setIsSelect: (x: number) => void;
  icon: string;
  name: string;
}
export default function CardMenu({
  id,
  index,
  isSelect,
  setIsSelect,
  icon,
  name,
}: PropCardMenu) {
  return (
    <li
      key={id}
      className={` ${
        isSelect === index
          ? "bg-acent-v3 text-primaryColor-black"
          : "text-acent-v1 bg-primaryColor-white"
      } text-xl font-semibold flex items-center gap-x-2 px-4 py-1 cursor-pointer rounded-lg transition-all duration-300`}
      onClick={() => setIsSelect(index)}
    >
      <i className={`${icon} text-3xl font-normal`}></i>
      <span className="capitalize">{name}</span>
    </li>
  );
}
