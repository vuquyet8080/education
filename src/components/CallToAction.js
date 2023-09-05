import Container from "./Container";

export const CallToAction = () => {
  return (
    <div className="relative py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid w-full grid-cols-2 m-auto h-max -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative">
          <div className="flex items-center justify-center -space-x-2">
            <img
              loading="lazy"
              width="400"
              height="400"
              src="./images/avatars/avatar.webp"
              alt="member photo"
              className="object-cover w-8 h-8 rounded-full"
            />
            <img
              loading="lazy"
              width="200"
              height="200"
              src="./images/avatars/avatar-2.webp"
              alt="member photo"
              className="object-cover w-12 h-12 rounded-full"
            />
            <img
              loading="lazy"
              width="200"
              height="200"
              src="./images/avatars/avatar-3.webp"
              alt="member photo"
              className="z-10 object-cover w-16 h-16 rounded-full"
            />
            <img
              loading="lazy"
              width="200"
              height="200"
              src="./images/avatars/avatar-4.webp"
              alt="member photo"
              className="relative object-cover w-12 h-12 rounded-full"
            />
            <img
              loading="lazy"
              width="200"
              height="200"
              src="./images/avatars/avatar-1.webp"
              alt="member photo"
              className="object-cover w-8 h-8 rounded-full"
            />
          </div>
          <div className="m-auto mt-6 space-y-6 md:w-8/12 lg:w-7/12">
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white md:text-5xl">
              Get Started now
            </h1>
            <p className="text-xl text-center text-gray-600 dark:text-gray-300">
              Be part of millions people around the world using tailus in modern
              User Interfaces.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="relative flex items-center justify-center w-full h-12 px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white dark:text-dark">
                  Get Started
                </span>
              </a>
              <a
                href="#"
                className="relative flex items-center justify-center w-full h-12 px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  More about
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
