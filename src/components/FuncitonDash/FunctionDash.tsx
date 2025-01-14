import { useState } from "react";
import data from "../../data/listDashboard.json";
import dataDash from "../../data/listDashDescription.json";
import CardMenu from "./CardMenu";
import CardDash from "./CardDash";

export default function FunctionDash() {
  const [isSelect, setIsSelect] = useState<number>(0);
  //console.log(isSelect);
  return (
    <section className="flex flex-col md:flex-row w-full max-w-[1216px] h-fit mx-auto items-start md:items-center justify-between py-14 px-3 xl:px-0 gap-x-3 gap-y-6" >
      <ul className="flex flex-col gap-y-6 w-full md:max-w-[250px]">
        {data.map((item, index: number) => (
          <CardMenu
            key={index}
            id={item.id}
            index={index}
            isSelect={isSelect}
            setIsSelect={setIsSelect}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </ul>
      <ul className="border rounded-lg size-full py-4 md:py-0 md:w-[800px] h-fit md:h-[400px] shadow-xl bg-primaryColor-white overflow-hidden" id="fac">
        {dataDash.map((item, index: number) => (
          <CardDash
            key={index}
            id={item.id}
            index={index}
            isSelect={isSelect}
            img={item.img}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
}
