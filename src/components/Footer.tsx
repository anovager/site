import Logo from "../assets/logo-anovager.png";

const year = new Date().getFullYear();

const navigation = [
  { name: "Serviços", href: "/services" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Sobre", href: "/sobre" },
];

export default function Footer() {
  return (
    <footer className="flex h-full w-full flex-col items-center bg-gray-900 p-5 text-gray-400">
      <div>
        <img src={Logo} alt="Anovager logomarca" className="w-15" />
      </div>
      <div className="m-auto flex w-lg justify-around p-5 text-sm">
        {navigation.map((v, i) => {
          return (
            <a href={v.href} key={i} className="hover:text-gray-300">
              {v.name}
            </a>
          );
        })}
      </div>
      <div>
        <p className="m-1.5 italic">© {year} Anovager, All rights reserved.</p>
      </div>
    </footer>
  );
}
