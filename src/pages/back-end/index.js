import Container from "@/components/Container";
import { Stats } from "@/components/Stats";
import NodeAndExpressTarget from "@/components/target/BE/NodeAndExpressTarget";
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
              Lộ trình đào tạo Back-end
            </h2>
            <p class="text-gray-600 dark:text-gray-300 pb-2">
              Học lập trình backend là khám phá thế giới bí ẩn của sự vận hành
              đằng sau những ứng dụng web và dịch vụ trực tuyến mà chúng ta
              thường xuyên sử dụng. Trong lộ trình học này, bạn sẽ được dẫn dắt
              qua hành trình từng bước để hiểu rõ cách các máy chủ hoạt động,
              làm thế nào chúng tương tác với cơ sở dữ liệu, và quản lý dữ liệu
              và yêu cầu từ phía client.
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              Bằng cách tìm hiểu về ngôn ngữ lập trình phía server như Node.js,
              bạn sẽ có khả năng xây dựng các ứng dụng mạnh mẽ, linh hoạt và có
              khả năng mở rộng. Sử dụng các framework như Express.js, bạn có thể
              tạo ra các API để giao tiếp giữa phía frontend và backend, xử lý
              yêu cầu từ người dùng và cung cấp dữ liệu.
            </p>
          </div>
          <h2 class=" mb-8 pt-10 md:pt-12 lg:pt-14 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Nội dung đào tạo
          </h2>

          <Accordion type="multiple" collapsible>
            <InternetTarget />
            <JavascriptTarget />
            <NodeAndExpressTarget />
            <GitTarget />
          </Accordion>
          <h2 class=" mb-10 pt-12 md:pt-14 lg:pt-16 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Resource
          </h2>
          <Stats showLinkFigma={false} />
          <Container>
            <div class="pt-6 md:pt-10">
              <div class="w-full">
                <p class="mt-10 text-xl font-bold text-gray-600 dark:text-white md:text-2xl ">
                  Tính năng
                </p>
                <ul class=" my-6 gap-y-3 flex flex-col text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li>Đăng nhập và phân quyền</li>
                  <li>
                    Quản lý hồ sơ nhân viên: Lưu trữ thông tin cá nhân, kỹ năng,
                    kinh nghiệm, học vấn và lịch sử làm việc của nhân viên.
                  </li>
                  <li>
                    Quản lý chấm công và lương: Ghi nhận giờ làm việc, nghỉ
                    phép, ngày nghỉ, tính lương và thưởng.
                  </li>
                  <li>
                    Quản lý thông tin về chế độ phúc lợi: Quản lý thông tin về
                    bảo hiểm, chế độ nghỉ phép, và các quyền lợi khác của nhân
                    viên.
                  </li>
                </ul>
              </div>
            </div>
          </Container>
          {/* <Container>
            <div class="">
              <div class="w-full">
                <p class="mt-14  lg:mt-14 text-xl font-bold text-gray-600 dark:text-white md:text-2xl ">
                  Công cụ và Công nghệ
                </p>
                <ul class=" my-6 gap-y-3 flex flex-col text-gray-500 list-disc list-inside dark:text-gray-400">
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
          </Container> */}
        </Container>
      </div>
    </div>
  );
}