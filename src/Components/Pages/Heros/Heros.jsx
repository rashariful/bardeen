import React from "react";

const Heros = () => {
  return (
    <section className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2 overflow-hidden">
      <div className="lg:h-auto">
        <img
          src="https://blogs.worldbank.org/sites/default/files/styles/card/public/2022-11/green_finance_twitter_card.jpg.webp"
          loading="lazy"
          alt="hero"
          className="w-full object-cover object-center"
        />
        <p className="mt-3">
          <small className="text-gray-500">2022-12-15</small>
        </p>
        <h1 className="text-2xl font-semibold mb-5 mt-2">
          The leader of most finance teams is the Chief Financial Officer (CFO)
        </h1>

        <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
          The leader of most finance teams is the Chief Financial Officer (CFO)
          and they report to the CEO. At smaller companies the top finance
          position might instead be the Vice President of Finance or Treasurer.
        </p>
      </div>

      {/* <!-- content - start --> */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row items-center border  overflow-hidden">
          <a
            href="/#"
            className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
          >
            <img
              src="https://henley.imgix.net/v3/heroImages/Smart-city-3_191206_103609.jpg?auto=compress%2Cformat&crop=focalpoint&fit=min&fm=jpg&fp-x=0.5&fp-y=0.5&fp-z=&h=1080&q=80&w=1920"
              loading="lazy"
              alt=" by Minh Pham"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
          </a>

          <div className="flex flex-col gap-2 p-4 lg:p-6">
            <span className="text-gray-400 text-sm">July 19, 2021</span>

            <h2 className="text-gray-800 text-xl font-bold">
              <a
                href="/#"
                className="hover:text-rose-500 active:text-rose-600 transition duration-100"
              >
                New trends in Tech
              </a>
            </h2>

            <p className="text-gray-500">
              This is a section of some simple filler text, also known as
              placeholder text.
            </p>

            <div>
              <a
                href="/#"
                className="text-rose-500 hover:text-rose-600 active:text-rose-700 font-semibold transition duration-100"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center border  overflow-hidden">
          <a
            href="/#"
            className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
          >
            <img
              src="https://www.smallbusiness.wa.gov.au/sites/default/files/media-library/images/Finance-processes-and-procedures.jpg"
              loading="lazy"
              alt=" by Minh Pham"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
          </a>

          <div className="flex flex-col gap-2 p-4 lg:p-6">
            <span className="text-gray-400 text-sm">July 19, 2021</span>

            <h2 className="text-gray-800 text-xl font-bold">
              <a
                href="/#"
                className="hover:text-rose-500 active:text-rose-600 transition duration-100"
              >
                New trends in Tech
              </a>
            </h2>

            <p className="text-gray-500">
              This is a section of some simple filler text, also known as
              placeholder text.
            </p>

            <div>
              <a
                href="/#"
                className="text-rose-500 hover:text-rose-600 active:text-rose-700 font-semibold transition duration-100"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center border  overflow-hidden">
          <a
            href="/#"
            className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
          >
            <img
              src="https://www.mnialive.com/media/pp3p0ay4/fintech.jpg"
              loading="lazy"
              alt=" by Minh Pham"
              className="w-full h-full object-cover object-center absolute inset-0 "
            />
          </a>

          <div className="flex flex-col gap-2 p-4 lg:p-6">
            <span className="text-gray-400 text-sm">July 19, 2021</span>

            <h2 className="text-gray-800 text-xl font-bold">
              <a
                href="/#"
                className="hover:text-rose-500 active:text-rose-600 transition duration-100"
              >
                New trends in Tech
              </a>
            </h2>

            <p className="text-gray-500">
              This is a section of some simple filler text, also known as
              placeholder text.
            </p>

            <div>
              <a
                href="/#"
                className="text-rose-500 hover:text-rose-600 active:text-rose-700 font-semibold transition duration-100"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heros;
