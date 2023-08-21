/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Container from "./Container";

export const Blog = () => {
  return (
    <div id="blog">
      <Container>
        <div class="mt-20 mb-12 space-y-2 text-center">
          <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Intern's Spotlight
          </h2>
          <p class="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300"></p>
        </div>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div class="relative overflow-hidden rounded-xl">
              <div className="relative object-cover object-top w-full transition duration-500 group-hover:scale-105">
                <Image
                  width={600}
                  height={600}
                  src="/levion_preview.webp"
                  alt="art cover"
                  loading="lazy"
                  // unoptimized
                  className="object-cover w-full aspect-square bg-red-50"
                />
              </div>
            </div>
            <div class="mt-6 relative">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                Levion
              </h3>
              <p class="mt-6 text-gray-600 dark:text-gray-300">
                Unlock Your English Potential - Learn, Connect, Excel!
              </p>
              <a class="inline-block" href="#">
                <span class="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
          <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div class="relative overflow-hidden rounded-xl">
              <div className="relative object-cover object-top w-full transition duration-500 group-hover:scale-105">
                <Image
                  // fill
                  width={600}
                  height={600}
                  src="/hrm_preview.webp"
                  alt="art cover"
                  loading="lazy"
                  // unoptimized
                  className="object-cover w-full aspect-square"
                />
              </div>
            </div>
            <div class="mt-6 relative">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                HRM
              </h3>
              <p class="mt-6 text-gray-600 dark:text-gray-300">
                Revolutionize Your Workplace with Our Cutting-Edge HRM Solution
              </p>
              <a class="inline-block" href="#">
                <span class="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
          <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div class="relative overflow-hidden rounded-xl">
              <div className="relative object-cover object-top w-full transition duration-500 group-hover:scale-105">
                <Image
                  // fill
                  width={600}
                  height={600}
                  src="/crm_prewview.webp"
                  alt="art cover"
                  loading="lazy"
                  // unoptimized
                  className="object-cover w-full aspect-square "
                />
              </div>
            </div>
            <div class="mt-6 relative">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                CRM
              </h3>
              <p class="mt-6 text-gray-600 dark:text-gray-300">
                Empower Customer Relationships with Our Advanced CRM Solution
              </p>
              <a class="inline-block" href="#">
                <span class="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
