import Button from "../UI/Button/Button";
export default function ActionSteps() {
  return (
    <section className="w-full h-fit md:h-[300px] flex bg-primaryColor-black text-primaryColor-white mt-14">
      <article className="w-full max-w-[1216px] flex flex-col md:flex-row items-center justify-between mx-auto py-8 md:py-0 px-3 xl:px-0 gap-y-8">
        <div className="flex flex-col gap-y-4 items-start">
          <h3 className="font-normal text-3xl text-center md:text-left">
            Tan solo 4 pasos para hacer una compra
          </h3>
          <Button
            name={"Probalo ahora"}
            href={"#"}
            type={2}
            style="mx-auto md:mx-0 w-full md:w-fit text-center md:text-left"
          />
        </div>
        <ul className="flex flex-col items-center md:flex-row font-pacifico text-3xl gap-5">
          <li>facil</li>
          <li>sencillo</li>
          <li>rapido</li>
          <li>sin comisión</li>
        </ul>
      </article>
    </section>
  );
}
