import Container from "./Container";

export const HeroSection = () => {
  return (
    <div className="relative pb-8" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative ml-auto pt-36">
          <div className="mx-auto text-center lg:w-2/3">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white md:text-6xl xl:text-7xl">
              Just.engineer <br />
              <span className="text-primary dark:text-white">
                Training intern
              </span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Khởi Đầu Sự Sáng Tạo. Học Về Frontend, Backend, Mobile!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
