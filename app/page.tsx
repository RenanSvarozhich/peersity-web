import Link from "next/link";

export default function Home() {
  return (
    <main id="content" role="main" className="shrink-0">
      <div className="relative overflow-hidden w-full h-full before:absolute before:inset-0 before:bg-[url('/home-bg.jpg')] before:bg-no-repeat before:bg-cover before:-z-10">
        <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="mt-5 max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            Let's <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-sky-600 text-transparent">skill up!</span> Together
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400">Learning resources recommendations and reviews.</p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <Link className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-sky-600 hover:from-sky-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-write focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" href="/skills">
              <svg className="flex-shrink-0 size-4" width="16" height="16" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.63,25.93l7.48,3h0a1,1,0,0,0,.74,0h0L16,26.08l7.11,2.84h0a1,1,0,0,0,.74,0h0l7.48-3A1,1,0,0,0,32,25V17.5a1,1,0,0,0-.07-.35.93.93,0,0,0-.05-.1.86.86,0,0,0-.13-.2l-.08-.08a.78.78,0,0,0-.24-.16s0,0-.05,0h0L24.5,13.82V7a1,1,0,0,0-.07-.35.47.47,0,0,0-.05-.1.86.86,0,0,0-.13-.2l-.08-.08a.78.78,0,0,0-.24-.16s0,0-.05,0h0l-7.5-3a1,1,0,0,0-.74,0l-7.5,3h0s0,0,0,0a.78.78,0,0,0-.24.16.27.27,0,0,0-.07.08.9.9,0,0,0-.14.2.93.93,0,0,0,0,.1A1,1,0,0,0,7.5,7v6.82L.63,16.57h0s0,0-.05,0a.78.78,0,0,0-.24.16.6.6,0,0,0-.08.08.86.86,0,0,0-.13.2l0,.1A1,1,0,0,0,0,17.5V25A1,1,0,0,0,.63,25.93ZM15,24.32l-5.5,2.2V21.18L15,19Zm7.5,2.2L17,24.32V19l5.5,2.2Zm7.5-2.2-5.5,2.2V21.18L30,19ZM28.31,17.5,23.5,19.42,18.69,17.5l4.81-1.92ZM22.5,13.82,17,16V10.68l5.5-2.2ZM16,5.08,20.81,7,16,8.92,11.19,7ZM9.5,8.48l5.5,2.2V16l-5.5-2.2Zm-1,7.1,4.81,1.92L8.5,19.42,3.69,17.5ZM2,19l5.5,2.2v5.34L2,24.32Z"/>
              </svg>
              Find skills
            </Link>
          </div>

          <Link href="/auth/signin">Sign In</Link>
        </div>
      </div>
    </main>
  );
}
