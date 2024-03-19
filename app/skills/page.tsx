import Link from "next/link";

export default function Skills() {
  return (
    <main id="content" role="main" className="max-w-7x1 shrink-0">
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
        <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-sky-600 text-transparent">Skills</span>              
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400">Skills are modules that group learning resources by theme. </p>
          </div>
        </div>
      </div>

      <div className="max-w-7x1 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-6">

          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
            <div className="h-60 rounded-t-xl bg-[url('/skills/c.webp')] bg-cover bg-no-repeat bg-center">
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold bg-clip-text bg-gradient-to-tl from-blue-600 to-sky-600 text-transparent">
                C language
              </h3>
              <p className="mt-3 text-gray-500">
                A software that develops products for software developers and developments.
              </p>
            </div>
          </div>

          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
            <div className="h-60 rounded-t-xl bg-[url('/skills/java.webp')] bg-cover bg-no-repeat bg-center">
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold bg-clip-text bg-gradient-to-tl from-blue-600 to-sky-600 text-transparent">
                Java language
              </h3>
              <p className="mt-3 text-gray-500">
                A software that develops products for software developers and developments.
              </p>
            </div>
          </div>

          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
            <div className="h-60 rounded-t-xl bg-[url('/skills/rust.webp')] bg-cover bg-no-repeat bg-center">
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold bg-clip-text bg-gradient-to-tl from-blue-600 to-sky-600 text-transparent">
                Rust language
              </h3>
              <p className="mt-3 text-gray-500">
                A software that develops products for software developers and developments.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
