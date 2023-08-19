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
              Lộ trình đào tạo Frond-end
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
          <h2 class=" mb-8 pt-10 md:pt-12 lg:pt-14 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Resource
          </h2>
          <Stats />
        </Container>
      </div>
    </div>
  );
}
