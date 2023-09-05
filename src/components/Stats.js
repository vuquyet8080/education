import Image from "next/image";
import Container from "./Container";
import { FigmaIcon } from "@/constants/icons";
import Link from "next/link";

export const Stats = ({ showLinkFigma = true }) => {
  return (
    <div id="solution">
      <Container>
        <div className=" space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 ">
          <div className="md:w-1/2 ">
            <div className="relative object-cover object-top w-full transition duration-500 group-hover:scale-105">
              <Image
                width={400}
                height={400}
                src="/hrm_preview.webp"
                alt="art cover"
                loading="lazy"
                // unoptimized
                className="object-cover w-full aspect-square bg-red-50"
              />
            </div>
          </div>
          <div className="md:w-1/2 h-full">
            <p className=" text-xl font-bold text-gray-600 dark:text-white md:text-2xl ">
              HRM project
            </p>
            <p className="my-6 text-gray-600 dark:text-gray-300">
              Dự án Quản lý Nhân sự nhằm xây dựng một hệ thống toàn diện để quản
              lý thông tin, hoạt động và tương tác liên quan đến nhân sự trong
              tổ chức. Mục tiêu chính của dự án là tối ưu hóa việc quản lý nhân
              sự, tăng cường hiệu suất làm việc, và cải thiện trải nghiệm của cả
              nhân viên lẫn quản lý.
            </p>
            {showLinkFigma && (
              <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                <Link href={"#"}>
                  <div className="mt-8 flex gap-4 md:items-center hover:cursor-pointer ">
                    <div className="hover:scale-105 flex justify-center items-center w-12 h-12  gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                      <FigmaIcon />
                    </div>
                    <div className="w-5/6 ">
                      <h3 className=" font-semibold text-lg text-gray-700 dark:text-indigo-300">
                        Figma
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        UI, Responsive, Design system...
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
