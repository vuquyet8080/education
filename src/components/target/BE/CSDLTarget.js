import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TargetItemLink from "../TargetItemLink";
import TargetItem from "./TargetItem";

export default function CSDLTarget() {
  return (
    <AccordionItem value="REACT">
      <AccordionTrigger className="pl-2 text-gray-900">
        CSDL (MySQL)
      </AccordionTrigger>

      <AccordionContent className="pl-6 text-gray-500">
        Phân biệt 2 loại cơ sở dữ liệu SQL và NoSQL
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Cài đặt MySQL và kết nối với CSDl
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
        Hiểu về index trong SQL, ưu và nhược điểm, khi nào nên sử dụng.
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Cách hoạt động của Full-Text Search
      </AccordionContent>
      {/* <AccordionContent className="pl-6 text-gray-500">
        MongoDB and Mongoose
      </AccordionContent> */}

      <AccordionContent className="pl-6 text-gray-500">
        <p className="mb-3 text-xl font-bold text-zinc-700 dark:text-indigo-600">
          Target
        </p>
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        <div className="flex flex-col gap-y-3">
          <TargetItem title={"Hiểu rõ cách hoạt động của SQL"} />
        </div>
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        <div className="flex flex-col gap-y-3">
          <TargetItem
            title={
              "Cài đặt và cấu hình MySQL trên máy tính cá nhân hoặc máy chủ."
            }
          />
        </div>
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        <div className="flex flex-col gap-y-3">
          <TargetItem
            title={
              "Biết cách tạo cơ sở dữ liệu mới, bảng, và quản lý cấu trúc của chúng."
            }
          />
        </div>
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        <div className="flex flex-col gap-y-3">
          <TargetItem
            title={
              "Hiểu cách truy vấn dữ liệu từ cơ sở dữ liệu bằng câu lệnh SQL, bao gồm lọc, sắp xếp, và tổng hợp dữ liệu."
            }
          />
        </div>
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        <div className="flex flex-col gap-y-3">
          <TargetItem
            title={
              "Biết cách thêm, sửa đổi và xóa dữ liệu từ bảng trong cơ sở dữ liệu."
            }
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
