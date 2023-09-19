import Container from "@/components/Container";
import { Stats } from "@/components/Stats";
import GitTarget from "@/components/target/FE/GitTarget";
import InternetTarget from "@/components/target/FE/InternetTarget";
import JavascriptTarget from "@/components/target/FE/JavascriptTarget";
import ReactTarget from "@/components/target/FE/ReactTarget";
import ComponentsMobile from "@/components/target/mobile/ComponentsMobile";
import CssMobileTarget from "@/components/target/mobile/CssMobileTarget";
import SetupEnv from "@/components/target/mobile/SetupEnv";
import { Accordion } from "@/components/ui/accordion";
import { PROJECT_MB_CONTENT } from "@/constants/projectMobileContent";
export default function Mobile() {
  return (
    <div className="min-h-screen pb-32">
      <div id="front_end ">
        <Container>
          <div className="md:w-2/3 lg:w-1/2">
            <h2 className="my-6 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
              Lộ trình đào tạo Mobile
            </h2>
            <p className="pb-2 text-gray-600 dark:text-gray-300">
              Lộ trình đào tạo Mobile là một hành trình dành cho những bạn muốn
              trở thành những nhà phát triển ứng dụng di động đầy tài năng. Đầu
              tiên, bạn sẽ bắt đầu với các kiến thức căn bản về lập trình và nền
              tảng web, sau đó tiến xa hơn vào việc phát triển ứng dụng di động
              thực tế.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Bạn cũng được làm việc với các Libraries và Frameworks phổ biến
              như React, Typescript, Mobx, Axios, React-native...
            </p>
          </div>
          <h2 className="pt-10 mb-8 text-2xl font-bold text-gray-700 md:pt-12 lg:pt-14 dark:text-white md:text-4xl">
            Nội dung đào tạo
          </h2>

          <Accordion type="multiple" collapsible>
            <JavascriptTarget />
            <InternetTarget />
            <CssMobileTarget />
            <SetupEnv />
            <ReactTarget isMobile={true} />
            <ComponentsMobile />
            <GitTarget />
          </Accordion>
          <h2 className="pt-12 mb-10 text-2xl font-bold text-gray-700 md:pt-14 lg:pt-16 dark:text-white md:text-4xl">
            Resource
          </h2>
          <Stats data={PROJECT_MB_CONTENT} />
          <Container>
            <div className="pt-6 md:pt-10">
              <div className="w-full">
                <p className="mt-10 text-xl font-bold text-gray-600 dark:text-white md:text-2xl ">
                  Tính năng
                </p>
                <ul className="flex flex-col my-6 text-gray-500 list-disc list-inside gap-y-3 dark:text-gray-400">
                  {PROJECT_MB_CONTENT?.features?.map((item, index) => {
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
                    React Native Framework: React Native cho phép bạn sử dụng
                    JavaScript hoặc TypeScript để phát triển ứng dụng di động đa
                    nền tảng.
                  </li>
                  <li>
                    React Navigation: là một thư viện quản lý điều hướng trong
                    ứng dụng React Native. Nó cung cấp các thành phần và API cho
                    việc tạo và tùy chỉnh các luồng điều hướng.
                  </li>
                  <li>
                    Quản lý Trạng Thái Ứng Dụng: MobX giúp bạn quản lý trạng
                    thái của ứng dụng, bao gồm thông tin như dữ liệu từ máy chủ,
                    trạng thái đăng nhập, giỏ hàng của người dùng, cài đặt ứng
                    dụng, và nhiều trạng thái khác.
                  </li>
                  <li>
                    Thư viện UI: Có nhiều thư viện UI bên ngoài như React Native
                    Elements, React Native Paper, và NativeBase giúp bạn xây
                    dựng giao diện người dùng nhanh chóng và đẹp mắt.
                  </li>
                  <li>
                    Firebase hoặc AWS Amplify: Các dịch vụ đám mây như Firebase
                    hoặc AWS Amplify được sử dụng cho việc quản lý người dùng,
                    xử lý xác thực, lưu trữ dữ liệu, và thêm tính năng thời gian
                    thực vào ứng dụng.
                  </li>
                  <li>
                    Axios hoặc Fetch: Để thực hiện các yêu cầu HTTP từ phía
                    client đến server, giúp tương tác với dữ liệu từ các API.
                  </li>
                  <li>
                    AsyncStorage và Realm: AsyncStorage là một thư viện cho phép
                    bạn lưu trữ dữ liệu cục bộ trong ứng dụng React Native.
                    Realm là một cơ sở dữ liệu nhẹ được sử dụng cho các tác vụ
                    lưu trữ dữ liệu phức tạp hơn.
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
