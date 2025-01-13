import { useState } from "react";
import data from "../../data/listDashboard.json";
import dataDash from "../../data/listDashDescription.json";

export default function FunctionDash() {
  const [isSelect, setIsSelect] = useState<number>(0);
  //console.log(isSelect);
  return (
    <section className="flex w-full max-w-[1216px] h-fit mx-auto items-center justify-between py-14">
      <ul className="flex flex-col gap-y-6 w-full max-w-[250px]">
        {data.map((item, index: number) => (
          <li
            key={item.id}
            className={` ${
              isSelect === index
                ? "bg-acent-v3 text-primaryColor-black"
                : "text-acent-v1 bg-primaryColor-white"
            } text-xl font-semibold flex items-center gap-x-2 px-4 py-1 cursor-pointer rounded-lg transition-all duration-300`}
            onClick={() => setIsSelect(index)}
          >
            <i className={`${item.icon} text-3xl font-normal`}></i>
            <span className="capitalize">{item.name}</span>
          </li>
        ))}
      </ul>
      <ul className="border rounded-lg w-[800px] h-[400px] shadow-xl bg-primaryColor-white">
        {dataDash.map((item, index: number) => (
          <li
            key={item.id}
            className={`${
              isSelect === index ? "block" : "hidden"
            } flex items-center justify-center gap-x-8 size-full animate-fade-left`}
          >
            <div className="h-[285] w-[440px] rounded-lg border border-acent-v1 overflow-hidden">
              <img src={item.img} className="size-full object-cover " alt="" />
            </div>
            <p
              className="size-fit max-w-[265px] text-base"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
