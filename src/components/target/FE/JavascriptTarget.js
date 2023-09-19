import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TargetItemLink from "../TargetItemLink";

export default function JavascriptTarget() {
  return (
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
        Data Structures
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Lệnh rẽ nhánh, toán tử 3 ngôi
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Vòng lặp
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        ECMAScript 6+
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Asynchronous JavaScript( Callbacks, Promises, Async/Await)
      </AccordionContent>

      <AccordionContent className="pl-6 text-gray-500">
        Prototype & Class & OOP
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
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript"
            }
            title={"Vượt qua 70% câu hỏi Basic JavaScript"}
          />
          <TargetItemLink
            link={
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#es6"
            }
            title={"Vượt qua 20 câu hỏi ES6 JavaScript"}
          />
          <TargetItemLink
            link={
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#debugging"
            }
            title={"Vượt qua 100% câu hỏi Debugging JavaScript"}
          />
          <TargetItemLink
            link={
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-data-structures"
            }
            title={"Vượt qua 100% câu hỏi Basic Data Structures JavaScript"}
          />
          <TargetItemLink
            link={
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-algorithm-scripting"
            }
            title={"Vượt qua 80% câu hỏi Basic Algorithm Scripting JavaScript"}
          />
          <TargetItemLink
            link={
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#object-oriented-programming"
            }
            title={
              "Vượt qua 80% câu hỏi Object Oriented Programming JavaScript"
            }
          />
          <TargetItemLink
            link={
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#functional-programming"
            }
            title={"Vượt qua 100% câu hỏi Functional Programming JavaScript"}
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
