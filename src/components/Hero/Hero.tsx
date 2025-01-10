import Button from "../UI/Button/Button";
export default function Hero() {
  return (
    <section className="w-full h-[640px]">
      <article className="flex items-center w-full max-w-[1216px] mx-auto">
        <div className="w-full max-w-[600px] flex flex-col gap-y-5">
          <h1 className="text-4xl leading-[55px] font-normal">
            Resive tus pedidos por{" "}
            <span className="font-pacifico">whatsapp</span> y{" "}
            <span className="font-pacifico">sin costo de comisión</span>
          </h1>
          <p className="font-normal leading-8 text-xl">
            Lorem ipsum dolor sit amet consectetur. Risus viverra massa eget
            viverra sem. At tristique cursus ultrices lacus leo justo in. Nunc
            nulla nisi elementum turpis.
          </p>
          <Button name={"comenzar ahora"} href={"#"} />
        </div>
        <div className=" w-[596px] h-[441px]">
          <img src="/images/image-hero.png" className="size-full" alt="" />
        </div>
      </article>
      <article className="absolute top-0 bg-gradient-to-t from-secondaryColor-green w-full h-[640px] -z-10"></article>
    </section>
  );
}
