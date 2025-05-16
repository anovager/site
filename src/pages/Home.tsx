import {
  ArrowPathIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Bate-papo",
    description: "Conversa personalizada para atender as suas necessidades.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Confidecialidade",
    description: "Mantemos o seus procedimentos de forma privada.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Atualização",
    description: "Manutenção para manter a sua automação ativa.",
    icon: ArrowPathIcon,
  },
  {
    name: "Otimização de Tempo",
    description: "Otimizamos o seu tempo para focar no que é mais necessário.",
    icon: ClockIcon,
  },
];

export default function Home() {
  return (
    <>
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Confira os projetos que já realizamos.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Projetos <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="pt-5 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Otimizando o seu tempo. Automatizando processos!
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Automação de processos com robô (RPA), Landing Page e Sites
              institucionais
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://form.jotform.com/243296078510054"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar em Contato
              </a>
              <a
                href="/services"
                className="text-sm/6 font-semibold text-gray-900"
              >
                Saber Mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Desenvolvimento personalizado
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              A automação que você precisa para ter mais tempo!
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Tire da sua rotina tarefas repetitivas na tela do computador.
              Importe-se com o que é mais efetivo.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 pb-2.5 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Quer otimizar processos e aumentar a sua produtividade?
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                Rápido, fácil e personalizado para você!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://form.jotform.com/243296078510054"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Eu Quero!
                </a>
                <a
                  href="/services"
                  className="text-sm/6 font-semibold text-white"
                >
                  Saber Mais <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
