import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import TargetItemLink from "../TargetItemLink";

export default function HtmlTarget() {
  return (
    <AccordionItem value="HTML">
      <AccordionTrigger className="pl-2 text-gray-900">HTML</AccordionTrigger>
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
      <AccordionContent className="pl-6 text-gray-500">
        <p className="mb-3 text-xl font-bold">Target</p>
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        <div className="flex flex-col gap-y-3">
          <TargetItemLink
            link={
              "https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5"
            }
            title={"Vượt qua 100% câu hỏi Basic HTML and HTML5"}
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
