/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Container from "./Container";

export const Features = () => {
  return (
    <div id="features">
      <Container>
        <div className="pt-10 md:pt-14 lg:pt-16 sm:pt-12 md:w-2/3 lg:w-1/2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="blue"
            className="w-6 h-6 text-secondary"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>

          <h2 className="my-6 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Lộ trình đào tạo
          </h2>
          <p className="pb-2 text-gray-600 dark:text-gray-300">
            Với Front end, bạn sẽ khám phá cách tạo ra giao diện người dùng, từ
            việc xây dựng các trang web thân thiện với người dùng đến việc thể
            hiện dữ liệu một cách hấp dẫn và hiệu quả.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Trong khi đó, Back end sẽ giúp bạn hiểu hơn máy chủ và dữ liệu. Bạn
            sẽ tìm hiểu về cách xây dựng và quản lý các hệ thống máy chủ mạnh
            mẽ, đảm bảo sự ổn định và bảo mật cho ứng dụng.
          </p>
        </div>
        <div className="grid mt-16 overflow-hidden text-gray-600 border border-gray-100 divide-x divide-y divide-gray-100 dark:divide-gray-700 rounded-3xl dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative p-8 py-12 space-y-8">
              <img
                src="/web-development.png"
                className="w-20"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 transition dark:text-white group-hover:text-secondary">
                  Front-end
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Bạn sẽ học cách tạo ra trải nghiệm trực quan và hấp dẫn cho
                  người dùng, đồng thời tìm hiểu cách làm việc hiệu quả với các
                  công cụ và thư viện phổ biến.
                </p>
              </div>
              <Link
                href="/front-end"
                className="flex items-center justify-between group-hover:text-secondary"
              >
                <span className="text-sm">Xem chi tiết</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-2xl transition duration-300 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative p-8 py-12 space-y-8">
              <img
                src="/api.png"
                className="w-20"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 transition dark:text-white group-hover:text-secondary">
                  Back-end
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Bạn sẽ khám phá cách tạo ra các API (Application Programming
                  Interface) để cho phép giao tiếp giữa các phần khác nhau của
                  ứng dụng.
                </p>
              </div>
              <Link
                href="/back-end"
                className="flex items-center justify-between group-hover:text-secondary"
              >
                <span className="text-sm">Xem chi tiết</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-2xl transition duration-300 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative p-8 py-12 space-y-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
              <img
                src="/mobile-coding.png"
                className="w-20"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 transition dark:text-white group-hover:text-secondary">
                  Mobile
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Bạn sẽ được học cách xây dựng những ứng dụng cho các nền tảng
                  Android và iOS, tạo ra những trải nghiệm tương tác độc đáo
                  trên các thiết bị di động.
                </p>
              </div>
              <Link
                href="/mobile"
                className="flex items-center justify-between group-hover:text-secondary"
              >
                <span className="text-sm">Xem chi tiết</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-2xl transition duration-300 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
