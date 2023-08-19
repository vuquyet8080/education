import Container from "@/components/Container";
import { Stats } from "@/components/Stats";
import CssTarget from "@/components/target/FE/CssTarget";
import GitTarget from "@/components/target/FE/GitTarget";
import HtmlTarget from "@/components/target/FE/HtmlTarget";
import InternetTarget from "@/components/target/FE/InternetTarget";
import JavascriptTarget from "@/components/target/FE/JavascriptTarget";
import ReactTarget from "@/components/target/FE/ReactTarget";
import { Accordion } from "@/components/ui/accordion";
export default function FrondEnd() {
  return (
    <div class="min-h-screen pb-32">
      <div id="frond_end ">
        <Container>
          <div class="md:w-2/3 lg:w-1/2">
            <h2 class="my-6 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
              Lộ trình đào tạo Front-end
            </h2>
            <p class="text-gray-600 dark:text-gray-300 pb-2">
              Frontend tập trung vào việc phát triển giao diện của các ứng dụng
              web. Trong quá trình này, bạn sẽ học cách sử dụng HTML để xây dựng
              cấu trúc nội dung, CSS để làm giao diện hấp dẫn và JavaScript để
              tạo sự tương tác và động đẹp mắt cho trang web.
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              Bạn cũng được làm việc với các Libraries và Frameworks phổ biến
              như React, Redux, Axios, Formik...
            </p>
          </div>
          <h2 class=" mb-8 pt-10 md:pt-12 lg:pt-14 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Nội dung đào tạo
          </h2>

          <Accordion type="multiple" collapsible>
            <HtmlTarget />

            <CssTarget />
            <JavascriptTarget />
            <InternetTarget />
            <ReactTarget />
            <GitTarget />
          </Accordion>
          <h2 class=" mb-10 pt-12 md:pt-14 lg:pt-16 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Resource
          </h2>
          <Stats />
          <Container>
            <div class="pt-6 md:pt-10">
              <div class="w-full">
                <p class="mt-10 text-xl font-bold text-gray-600 dark:text-white md:text-2xl ">
                  Tính năng
                </p>
                <div className="flex flex-col my-6 gap-y-3">
                  <p class=" text-gray-600 dark:text-gray-300">
                    Quản lý hồ sơ nhân viên: Lưu trữ thông tin cá nhân, kỹ năng,
                    kinh nghiệm, học vấn và lịch sử làm việc của nhân viên.
                  </p>
                  <p class=" text-gray-600 dark:text-gray-300">
                    Quản lý chấm công và lương: Ghi nhận giờ làm việc, nghỉ
                    phép, ngày nghỉ, tính lương và thưởng.
                  </p>
                  <p class=" text-gray-600 dark:text-gray-300">
                    Quản lý thông tin về chế độ phúc lợi: Quản lý thông tin về
                    bảo hiểm, chế độ nghỉ phép, và các quyền lợi khác của nhân
                    viên.
                  </p>
                </div>
              </div>
            </div>
          </Container>
          <Container>
            <div class="">
              <div class="w-full">
                <p class="mt-14  lg:mt-14 text-xl font-bold text-gray-600 dark:text-white md:text-2xl ">
                  Công cụ và Công nghệ
                </p>
                <div className="flex flex-col my-6 gap-y-3">
                  <p class=" text-gray-600 dark:text-gray-300">
                    ReactJS: React là một thư viện JavaScript phổ biến để xây
                    dựng giao diện người dùng tương tác
                  </p>
                  <p class=" text-gray-600 dark:text-gray-300">
                    React Router: Thư viện giúp quản lý định tuyến (routing)
                    trong ứng dụng React, cho phép chuyển đổi giữa các trang mà
                    không cần tải lại toàn bộ trang.
                  </p>
                  <p class=" text-gray-600 dark:text-gray-300">
                    Axios hoặc Fetch: Để thực hiện các yêu cầu HTTP từ phía
                    client đến server, giúp tương tác với dữ liệu từ các API.
                  </p>
                  <p class=" text-gray-600 dark:text-gray-300">
                    Tailwind CSS: Giúp tạo giao diện đẹp mắt và thân thiện với
                    người dùng một cách nhanh chóng.
                  </p>
                  <p class=" text-gray-600 dark:text-gray-300">
                    Formik hoặc React Hook Form: Cung cấp các công cụ để quản lý
                    và xác thực biểu mẫu trong ứng dụng.
                  </p>
                  <p class=" text-gray-600 dark:text-gray-300">
                    ESLint và Prettier: Các công cụ giúp kiểm tra mã và đảm bảo
                    mã nguồn tuân thủ quy chuẩn viết mã và có cấu trúc rõ ràng.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Container>
      </div>
    </div>
  );
}
