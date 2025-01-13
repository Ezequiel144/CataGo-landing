interface PropCardDash {
  id: string;
  index: number;
  isSelect: number;
  img: string;
  description: string;
}

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
      } flex items-center justify-center gap-x-8 size-full animate-fade-left`}
    >
      <div className="h-[285] w-[440px] rounded-lg border border-acent-v1 overflow-hidden">
        <img src={img} className="size-full object-cover " alt={id} />
      </div>
      <p
        className="size-fit max-w-[265px] text-base"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </li>
  );
}
