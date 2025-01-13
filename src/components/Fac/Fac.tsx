import { useState } from "react";
import data from "../../data/listFac.json";
import CardFac from "./CardFac";

export default function Fac() {
  const [isActive, setIsActive] = useState<number | null>(null);
  return (
    <section className="w-full max-w-[1216px] h-fit mx-auto text-primaryColor-black flex items-start justify-between pt-10 pb-20">
      <article>
        <h2 className="text-3xl font-semibold w-[180px]">
          Preguntas frecuentes
        </h2>
      </article>
      <ul className="bg-acent-v3 rounded-lg px-8 py-4 flex flex-col gap-y-8 w-full max-w-[800px]">
        {data.map((item, index: number) => (
          <CardFac
            index={index}
            isActive={isActive}
            setIsActive={setIsActive}
            question={item.question}
            response={item.response}
          />
        ))}
      </ul>
    </section>
  );
}
