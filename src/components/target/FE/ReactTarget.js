import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TargetItemLink from "../TargetItemLink";

export default function ReactTarget() {
  return (
    <AccordionItem value="REACT">
      <AccordionTrigger className="pl-2 text-gray-900">
        REACT JS
      </AccordionTrigger>
      <AccordionContent className="pl-6 text-gray-500">
        {/* How does the internet work? */}
        Tìm hiểu Components, Props, State, Conditional Rendering
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Component Life Cycle, Lists and Keys, Render Props, Refs, Events
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Hooks (useCallback, useMemo, useReducer, useContext, etc.), custom hooks
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Routers, React Router
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        State Management (Context, Redux / Toolkit)
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        API Calls (Axios)
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
              "https://www.freecodecamp.org/learn/front-end-development-libraries/#react"
            }
            title={"Vượt qua 70% câu React"}
          />
          <TargetItemLink
            link={
              "https://www.freecodecamp.org/learn/front-end-development-libraries/#redux"
            }
            title={"Vượt qua 100% câu hỏi Redux"}
          />
          <TargetItemLink
            link={
              "https://www.freecodecamp.org/learn/front-end-development-libraries/#react-and-redux"
            }
            title={"Vượt qua 100% câu hỏi React and Redux"}
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
