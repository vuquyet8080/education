import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TargetItemLink from "../TargetItemLink";

export default function CSDLTarget() {
  return (
    <AccordionItem value="REACT">
      <AccordionTrigger className="pl-2 text-gray-900">
        CSDL (SQL & NoSQL)
      </AccordionTrigger>

      <AccordionContent className="pl-6 text-gray-500">
        Phân biệt 2 loại cơ sở dữ liệu SQL và NoSQL
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Các kiểu dữ liệu
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Nắm vững các khái niệm (Table, Row, Column, Primary Key, Foreign Key,
        Query, Schema, Connection String)
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Nắm vững các mệnh đề như (ORDER BY, GROUP BY, HAVING, Joins, Indexs...)
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Nắm vững các câu lệnh như (DELETE, INSERT, UPDATE, WHERE...)
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Table (Truncate, Create, Alter, Drop)
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        MongoDB and Mongoose
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
              "https://www.freecodecamp.org/learn/back-end-development-and-apis/#mongodb-and-mongoose"
            }
            title={"Vượt qua 100% câu hỏi MongoDB and Mongoose"}
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
