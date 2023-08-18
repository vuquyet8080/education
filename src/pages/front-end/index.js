import Container from "@/components/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
export default function FrondEnd() {
  return (
    <div class="min-h-screen">
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
          <h2 class=" mb-6 pt-8 md:pt-10 lg:pt-12 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Mục tiêu đào tạo
          </h2>

          <Accordion type="multiple" collapsible>
            <AccordionItem value="HTML">
              <AccordionTrigger className="pl-2 text-gray-900">
                HTML
              </AccordionTrigger>
              <AccordionContent className="pl-6 text-gray-500">
                Tìm hiểu về HTML, CSS
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                Cấu trúc của 1 file HTML
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                Các thẻ HTML thông dụng
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                Attribute trong HTML là gì?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="CSS">
              <AccordionTrigger className="pl-2 text-gray-900">
                CSS
              </AccordionTrigger>
              <AccordionContent className="pl-6 text-gray-500">
                Sử dụng CSS trong HTML
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                CSS selector (id và class)
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                Ưu tiên trong CSS
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                Các thuộc tính cơ bản (margin, padding, background, position,
                flex...)
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                Responsive
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                <p className="mb-6 text-xl font-bold">Target</p>
                <div className="flex flex-row items-center gap-x-2">
                  <div className="relative h-6 w-7 md:w-8 md:h-7">
                    <Image
                      src={"/target.png"}
                      alt="target"
                      fill
                      className="absolute inset-0 h-full w-f"
                    />
                  </div>
                  <Link
                    target="_blank"
                    className="text-blue-500 hover:opacity-80"
                    href={"https://flexboxfroggy.com"}
                  >
                    Vượt qua 24 levels FLEXBOX FROGGY
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="JAVASCRIPT">
              <AccordionTrigger className="pl-2 text-gray-900">
                JAVASCRIPT
              </AccordionTrigger>
              <AccordionContent className="pl-6 text-gray-500">
                Kiểu dữ liệu
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                Toán tử
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                Function, Array, Object
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                Lệnh rẽ nhánh, toán tử 3 ngôi
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                Vòng lặp
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                Callback
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                ECMAScript 6+
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                <p className="mb-6 text-xl font-bold">Target</p>
                <div className="flex flex-row items-center gap-x-2">
                  <div className="relative h-6 w-7 md:w-8 md:h-7">
                    <Image
                      src={"/target.png"}
                      alt="target"
                      fill
                      className="absolute inset-0 h-full w-f"
                    />
                  </div>
                  <Link
                    target="_blank"
                    className="text-blue-500 hover:opacity-80"
                    href={"https://flexboxfroggy.com"}
                  >
                    Vượt qua 24 levels FLEXBOX FROGGY
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="INTERNET">
              <AccordionTrigger className="pl-2 text-gray-900">
                INTERNET
              </AccordionTrigger>
              <AccordionContent className="pl-6 text-gray-500">
                {/* How does the internet work? */}
                Internet hoạt động như thế nào?
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                {/* What is HTTP? */}
                HTTP, HTTPS là gì?
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                Domain Name là gì?
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                Hosting là gì?
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                {/* DNS and how it works? */}
                DSN là gì?
              </AccordionContent>
              <AccordionContent className="pl-6 text-gray-500">
                {/* Browsers and how they work? */}
                Browsers là gì và hoạt động như thế nào?
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
      </div>
    </div>
  );
}
