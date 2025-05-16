import LilianRibeiro from "../assets/lilian_corretora_imoveis_logo_nome.png";
import ClickFishing from "../assets/click-fishing.png";
import RelogioImportado from "../assets/relogio-importado.png";
import JuniorVisagista from "../assets/junior-visagista.png";

const portfolio = [
  {
    name: "Lilian Ribeiro",
    description: "Corretora de Imóveis",
    type: "Site",
    img: LilianRibeiro,
    url: "https://lilianribeiroimoveis.com",
  },
  {
    name: "David Castro",
    description: "Gestor de Tráfego",
    type: "Site",
    img: "",
    url: "https://boost-connect.vercel.app",
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
    name: "Relógio Importado",
    description: "Relogios importados",
    type: "Loja Virtual",
    img: RelogioImportado,
    url: "https://relogioimportado1.lojavirtualnuvem.com.br",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="portfolio mx-auto flex h-full min-h-screen w-full flex-col items-center justify-center"
    >
      <div className="m-auto mt-40 grid w-full grid-cols-2 gap-x-8 gap-y-10 p-5 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
        {portfolio.map((v, i) => {
          return (
            <div key={i} className="flex flex-col items-center justify-center">
              <img src={v.img} alt={v.description} className="w-1/4" />
              <h2 className="text-1xl font-semibold">
                <a href={v.url}>{v.name}</a>
              </h2>
              <h3 className="italic">{v.description}</h3>
              <p>{v.type}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
