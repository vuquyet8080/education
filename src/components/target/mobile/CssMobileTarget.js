import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TargetItemLink from "../TargetItemLink";

export default function CssMobileTarget() {
  return (
    <AccordionItem value="CSS-Mobile">
      <AccordionTrigger className="pl-2 text-gray-900">CSS</AccordionTrigger>
      <AccordionContent className="pl-6 text-gray-500">
        Khác biệt giữa style React vs React-Native.
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Sử dụng CSS trong React-Native
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Ưu tiên trong CSS
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Các thuộc tính cơ bản (margin, padding, background, position, flex...)
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Responsive
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        <p className="mb-3 text-xl font-bold text-zinc-700 dark:text-indigo-600">
          Target
        </p>
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        <div className="flex flex-col gap-y-3">
          <TargetItemLink
            link={
              "https://www.freecodecamp.org/learn/responsive-web-design/#basic-css"
            }
            title={"Vượt qua 70% câu hỏi Basic CSS"}
          />

          <TargetItemLink
            link={"https://flexboxfroggy.com"}
            title={"Vượt qua 24 levels FLEXBOX FROGGY"}
          />
          <TargetItemLink
            link={
              "https://www.figma.com/file/sVFeLC0sVlJ1Kqb6bJVPJ2/E-commerce-Application-by-Fively-%2F-Dark-version-(Copy)?type=design&node-id=28%3A9&mode=design&t=zyyJ0NUoPcaDneXP-1"
            }
            title={
              "Áp dụng kiến thức về Component, CSS, hoàn thiện UI (Sign-Up, Login, Forgot password)"
            }
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
