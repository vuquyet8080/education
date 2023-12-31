import Container from "@/components/Container";
import { Stats } from "@/components/Stats";
import CssTarget from "@/components/target/FE/CssTarget";
import GitTarget from "@/components/target/FE/GitTarget";
import HtmlTarget from "@/components/target/FE/HtmlTarget";
import InternetTarget from "@/components/target/FE/InternetTarget";
import JavascriptTarget from "@/components/target/FE/JavascriptTarget";
import ReactTarget from "@/components/target/FE/ReactTarget";
import { Accordion } from "@/components/ui/accordion";
import { PROJECT_FE_CONTENT } from "@/constants/projectFeContent";
export default function FrontEnd() {
  return (
    <div className="min-h-screen pb-32">
      <div id="front_end ">
        <Container>
          <div className="md:w-2/3 lg:w-1/2">
            <h2 className="my-6 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
              Lộ trình đào tạo Front-end
            </h2>
            <p className="pb-2 text-gray-600 dark:text-gray-300">
              Frontend tập trung vào việc phát triển giao diện của các ứng dụng
              web. Trong quá trình này, bạn sẽ học cách sử dụng HTML để xây dựng
              cấu trúc nội dung, CSS để làm giao diện hấp dẫn và JavaScript để
              tạo sự tương tác và động đẹp mắt cho trang web.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Bạn cũng được làm việc với các Libraries và Frameworks phổ biến
              như React, Redux, Axios, Formik...
            </p>
          </div>
          <h2 className="pt-10 mb-8 text-2xl font-bold text-gray-700 md:pt-12 lg:pt-14 dark:text-white md:text-4xl">
            Nội dung đào tạo
          </h2>

          <Accordion type="multiple" collapsible>
            <HtmlTarget />

            <CssTarget />
            <JavascriptTarget />
            <InternetTarget />
            <GitTarget />

            <ReactTarget />
          </Accordion>
          <h2 className="pt-12 mb-10 text-2xl font-bold text-gray-700 md:pt-14 lg:pt-16 dark:text-white md:text-4xl">
            Resource
          </h2>
          <Stats data={PROJECT_FE_CONTENT} />

          <Container>
            <div className="pt-6 md:pt-10">
              <div className="w-full">
                <p className="mt-10 text-xl font-bold text-gray-600 dark:text-white md:text-2xl ">
                  Tính năng
                </p>

                <ul className="flex flex-col my-6 text-gray-500 list-disc list-inside gap-y-3 dark:text-gray-400">
                  {PROJECT_FE_CONTENT?.features?.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          </Container>
          <Container>
            <div className="">
              <div className="w-full">
                <p className="text-xl font-bold text-gray-600 mt-14 lg:mt-14 dark:text-white md:text-2xl ">
                  Công cụ và Công nghệ
                </p>
                <ul className="flex flex-col my-6 text-gray-500 list-disc list-inside gap-y-3 dark:text-gray-400">
                  <li>
                    ReactJS: React là một thư viện JavaScript phổ biến để xây
                    dựng giao diện người dùng tương tác
                  </li>
                  <li>
                    React Router: Thư viện giúp quản lý định tuyến (routing)
                    trong ứng dụng React, cho phép chuyển đổi giữa các trang mà
                    không cần tải lại toàn bộ trang.
                  </li>
                  <li>
                    Axios hoặc Fetch: Để thực hiện các yêu cầu HTTP từ phía
                    client đến server, giúp tương tác với dữ liệu từ các API.
                  </li>
                  <li>
                    Tailwind CSS: Giúp tạo giao diện đẹp mắt và thân thiện với
                    người dùng một cách nhanh chóng.
                  </li>
                  <li>
                    Formik hoặc React Hook Form: Cung cấp các công cụ để quản lý
                    và xác thực biểu mẫu trong ứng dụng.
                  </li>
                  <li>
                    ESLint và Prettier: Các công cụ giúp kiểm tra mã và đảm bảo
                    mã nguồn tuân thủ quy chuẩn viết mã và có cấu trúc rõ ràng.
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </Container>
      </div>
    </div>
  );
}
