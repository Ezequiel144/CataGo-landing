import Button from "../UI/Button/Button";
export default function Hero() {
  return (
    <section className="w-full h-fit md:h-[640px]">
      <article
        className="flex flex-col md:flex-row items-center w-full max-w-[1216px] mx-auto px-3 xl:px-0 gap-y-16"
        id="init"
      >
        <div className="w-full max-w-[500px] lg:max-w-[600px] flex flex-col gap-y-5">
          <h1 className="text-4xl leading-[55px] font-normal text-center md:text-left">
            Resive tus pedidos por{" "}
            <span className="font-pacifico">whatsapp</span> y{" "}
            <span className="font-pacifico">sin costo de comisión</span>
          </h1>
          <p className="font-normal leading-8 text-xl text-center md:text-left">
            Con CataGo, organiza y vende tus productos de forma fácil y
            eficiente a través de WhatsApp. Sin complicaciones, sin costos
            altos, solo una solución práctica para hacer crecer tu negocio
          </p>
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <Button
              name={"comenzar ahora"}
              href={
                "https://wa.me/1538497927?text=hola,%20quiero%20mi%20catalogo%20"
              }
              type={1}
              style={"mx-auto md:m-0 w-full text-center md:w-fit md:text-left"}
            />
            <Button
              name={"Ver demo"}
              href={"https://catalogoweb-demo.vercel.app/"}
              type={2}
              style={"mx-auto md:m-0 w-full text-center md:w-fit md:text-left"}
            />
          </div>
        </div>
        <div className=" size-full max-w-[596px] max-h-[441px]">
          <img src="/images/image-hero.png" className="size-full" alt="" />
        </div>
      </article>
      <article className="absolute top-0 bg-gradient-to-t from-secondaryColor-green w-full h-[640px] -z-10"></article>
    </section>
  );
}
