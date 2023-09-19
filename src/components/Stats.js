import Image from "next/image";
import Container from "./Container";
import { FigmaIcon } from "@/constants/icons";
import Link from "next/link";

export const Stats = ({ showLinkFigma = true, data }) => {
  return (
    <div id="solution">
      <Container>
        <div className="flex-row-reverse justify-between space-y-6 text-gray-600 md:flex md:gap-6 md:space-y-0 lg:gap-12">
          <div className="md:w-1/2 ">
            <div className="relative object-cover object-top w-full transition duration-500 group-hover:scale-105">
              <Image
                width={400}
                height={400}
                src={data?.image}
                alt="art cover"
                loading="lazy"
                // unoptimized
                className="object-cover w-full aspect-square "
              />
            </div>
          </div>
          <div className="h-full md:w-1/2">
            <p className="text-xl font-bold text-gray-600 dark:text-white md:text-2xl">
              {data?.name}
            </p>
            <p className="my-6 text-gray-600 dark:text-gray-300">
              {data?.description}
            </p>
            {showLinkFigma && (
              <div className="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
                <Link target="_blank" href={data?.urlFigma}>
                  <div className="flex gap-4 mt-8 md:items-center hover:cursor-pointer ">
                    <div className="flex items-center justify-center w-12 h-12 gap-4 bg-indigo-100 rounded-full hover:scale-105 dark:bg-indigo-900/20">
                      <FigmaIcon />
                    </div>
                    <div className="w-5/6 ">
                      <h3 className="text-lg font-semibold text-gray-700 dark:text-indigo-300">
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
