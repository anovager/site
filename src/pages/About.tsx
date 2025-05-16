import Logo from "../assets/logo-anovager.png";

export default function About() {
  return (
    <div className="min-h-screen bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-left">
        <img src={Logo} alt="Anovager" className="m-auto w-3xs" />
        <p className="mt-6 text-lg leading-8 text-gray-700">
          A <strong>Anovager</strong> é uma empresa fundada em Uberlândia por{" "}
          <strong>Arthur Martins</strong>, especializada em soluções digitais
          personalizadas. Com foco em inovação, oferecemos serviços de
          desenvolvimento de sites modernos e responsivos, automação de
          processos com RPA (Robotic Process Automation), e criação de lojas
          virtuais utilizando plataformas como <strong>Nuvemshop</strong> e{" "}
          <strong>Tray</strong>.
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-700">
          Nosso objetivo é impulsionar negócios por meio da tecnologia,
          entregando qualidade, eficiência e resultados reais.
        </p>
      </div>
    </div>
  );
}
