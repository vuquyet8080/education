import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TargetItemLink from "../TargetItemLink";
import TargetItem from "../BE/TargetItem";

export default function ReactTarget({ isMobile }) {
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
        State Management (Context, Redux / Toolkit, Mobx)
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
            title={"Vượt qua 70% câu hỏi React"}
          />
          {isMobile ? (
            <>
              <div className="flex flex-col gap-y-3">
                <TargetItem
                  title={
                    "Nắm được các khái niệm về Mobx (Observable State, Observables, Computed Properties, Actions, MobX Store, Provider, Inject, Reactive Programming,...)"
                  }
                />
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
