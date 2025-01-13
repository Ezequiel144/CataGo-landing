import Button from "../UI/Button/Button";
export default function ActionSteps() {
  return (
    <section className="w-full h-[300px] flex bg-primaryColor-black text-primaryColor-white mt-14">
      <article className="w-full max-w-[1216px] flex items-center justify-between mx-auto">
        <div className="flex flex-col gap-y-4 items-start">
          <h3 className="font-normal text-3xl">
            Tan solo 4 pasos para hacer una compra
          </h3>
          <Button name={"Probalo ahora"} href={"#"} type={2} />
        </div>
        <ul className="flex font-pacifico text-3xl gap-x-5">
          <li>facil</li>
          <li>sencillo</li>
          <li>rapido</li>
          <li>sin comisión</li>
        </ul>
      </article>
    </section>
  );
}
