import data from "../../data/listFuntions.json";
import CardFunction from "./CardFunciont";

export default function Functions() {
  return (
    <section className="flex flex-col gap-y-8 mx-auto w-full max-w-[1216px] h-fit pt-16 md:pt-0 px-3 lg:px-0">
      <h2 className="text-3xl font-semibold capitalize text-center">
        ¿ Como funciona ?
      </h2>
      <ul className="flex flex-col gap-y-4 items-center">
        {data.map((item) => (
          <CardFunction
            key={item.id}
            id={item.id}
            image={item.image}
            description={item.description}
            color={item.color}
          />
        ))}
      </ul>
    </section>
  );
}
