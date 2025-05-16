import LilianRibeiro from "../assets/lilian_corretora_imoveis_logo_nome.png";
import ClickFishing from "../assets/click-fishing.png";
import RelogioImportado from "../assets/relogio-importado.png";
import JuniorVisagista from "../assets/junior-visagista.png";

const portfolio = [
  {
    name: "Relógio Importado",
    description: "Relogios importados",
    type: "Loja Virtual",
    img: RelogioImportado,
    url: "https://relogioimportado1.lojavirtualnuvem.com.br",
  },
  {
    name: "Lilian Ribeiro",
    description: "Corretora de Imóveis",
    type: "Site",
    img: LilianRibeiro,
    url: "https://lilianribeiroimoveis.com",
  },

  {
    name: "Junior Visagista",
    description: "Visagista e Barbeiro",
    type: "Site",
    img: JuniorVisagista,
    url: "https://juniorvisagista.com.br",
  },
  {
    name: "Click Fishing",
    description: "Pescaria e Camping",
    type: "Loja Virtual",
    img: ClickFishing,
    url: "https://www.clickfishing.com.br",
  },

  {
    name: "David Castro",
    description: "Gestor de Tráfego",
    type: "Site",
    img: "",
    url: "https://boost-connect.vercel.app",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="portfolio mx-auto flex h-full min-h-screen w-full flex-col items-center justify-center"
    >
      <div className="m-auto mt-40 grid w-full grid-cols-1 gap-x-8 gap-y-10 p-5 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
        {portfolio.map((v, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-around p-6 shadow-md"
            >
              <img src={v.img} alt={v.description} className="w-1/4" />
              <h2 className="text-1xl font-semibold">
                <a href={v.url}>{v.name}</a>
              </h2>
              <h3 className="italic">{v.description}</h3>
              <p>{v.type}</p>
              <a
                href={v.url}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                VER PROJETO
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
