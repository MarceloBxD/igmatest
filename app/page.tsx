import Image from "next/image";

const AUTHOR_NAME = "Marcelo Bracet";
const AUTHOR_URL = "www.linkedin.com/in/marcelo-bracet/";

const MAIN_IMAGE = {
  src: "/igma.jpg",
  width: 180,
  height: 37,
};

const PAGES = [
  {
    title: "Register Client",
    description: "Cadaster users by name, cpf w/ validation and birth",
    href: "/register-user",
  },
  {
    title: "Find by cpf",
    description: "Find client by cpf and show all data",
    href: "/find-by-cpf",
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Created By
          <code className="font-mono font-bold ml-2">
            <a
              href={`https://${AUTHOR_URL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @<span>{AUTHOR_NAME}</span>
            </a>
          </code>
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-yellow-200 after:via-yellow-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-yellow-500 before:dark:opacity-10 after:dark:from-yellow-300 after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
          src={MAIN_IMAGE.src}
          alt="Next.js Logo"
          width={MAIN_IMAGE.width}
          height={MAIN_IMAGE.height}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {PAGES.map((page) => (
          <a
            key={page.title}
            href={page.href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {page.title}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              {page.description}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
