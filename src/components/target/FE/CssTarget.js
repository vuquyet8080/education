import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TargetItemLink from "../TargetItemLink";

export default function CssTarget() {
  return (
    <AccordionItem value="CSS">
      <AccordionTrigger className="pl-2 text-gray-900">CSS</AccordionTrigger>
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
            title={"Vượt qua 50% câu hỏi Basic CSS"}
          />
          <TargetItemLink
            link={
              "https://www.freecodecamp.org/learn/responsive-web-design/#css-grid"
            }
            title={"Vượt qua 70% câu hỏi CSS Grid"}
          />
          <TargetItemLink
            link={"https://flexboxfroggy.com"}
            title={"Vượt qua 24 levels FLEXBOX FROGGY"}
          />
          <TargetItemLink
            link={
              "https://www.figma.com/file/cscfd0GLreET6egwT3hdfj/Responsive-Landing-Page-Design-%7C-Website-Home-Page-Design-%7C-Agency-Website-UI-Design-(Community)-(Community)?type=design&node-id=1%3A2&mode=design&t=jT4wUiOGkOWtKFh9-1"
            }
            title={
              "Áp dụng kiến thức HTML, CSS, semantic tags hoàn thiện trang web"
            }
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
