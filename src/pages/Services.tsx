import { BsRobot } from "react-icons/bs";
import { AiOutlineProduct, AiOutlineGlobal } from "react-icons/ai";
import { HiArrowRightCircle } from "react-icons/hi2";
import { TiShoppingCart } from "react-icons/ti";

const services = [
  {
    name: "Automação Robótica de Processos (RPA)",
    description:
      "Automação Robótica de Processos (Robotic Process Automation), é uma tecnologia que utiliza robôs de software para automatizar tarefas repetitivas em processos de negócio. Esses 'robôs' simulam ações humanas, como clicar, digitar e ler telas, para otimizar processos, reduzir erros e aumentar a eficiência.",
    icon: <BsRobot className="mb-2.5 size-12" />,
  },
  {
    name: "Landing Page",
    description:
      "Uma landing page, ou página de aterrissagem, é uma página web isolada e otimizada, projetada para direcionar o visitante a uma ação específica, como preencher um formulário, fazer uma compra ou se inscrever em uma lista.",
    icon: <AiOutlineProduct className="mb-2.5 size-12" />,
  },
  {
    name: "Site Institucional",
    description:
      "Um site institucional é a representação online de uma empresa, organização ou instituição, que visa comunicar informações relevantes ao público-alvo.",
    icon: <AiOutlineGlobal className="mb-2.5 size-12" />,
  },
  {
    name: "Loja Virtual",
    description:
      "Uma Loja Virtual, também conhecida como e-commerce, é um site que permite a compra e venda de produtos ou serviços pela internet.",
    icon: <TiShoppingCart className="mb-2.5 size-12" />,
  },
];

export default function Services() {
  return (
    <div className="mx-auto flex flex-col justify-around px-4 py-32 sm:py-48 lg:py-56">
      <h1 className="mb-10 text-center text-3xl underline decoration-blue-600 underline-offset-4">
        Serviços
      </h1>
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
        {services.map((v, i) => (
          <div
            className="flex min-h-[28rem] w-full flex-col items-center justify-between rounded-3xl border border-cyan-100 p-6 shadow-md sm:w-1/3"
            key={i}
          >
            {v.icon}
            <h2 className="text-center text-lg font-bold">{v.name}</h2>
            <p className="text-left text-sm">{v.description}</p>
            <button
              className="mt-4 flex cursor-pointer flex-row items-center rounded-md bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-500"
              onClick={() =>
                window.open(
                  "https://form.jotform.com/243296078510054",
                  "_blank",
                )
              }
            >
              Contratar Serviço
              <HiArrowRightCircle className="ml-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
