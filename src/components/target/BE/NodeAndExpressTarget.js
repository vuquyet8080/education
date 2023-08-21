import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TargetItemLink from "../TargetItemLink";
import TargetItem from "./TargetItem";

export default function NodeAndExpressTarget() {
  return (
    <AccordionItem value="NODE_EXPRESS">
      <AccordionTrigger className="pl-2 text-gray-900">
        NODE & EXPRESS JS
      </AccordionTrigger>
      <AccordionContent className="pl-6 text-gray-500">
        SSR & CSR
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Basic routing, Query parameters
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Middleware
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Request và Response, làm việc với đối tượng request (yêu cầu từ client)
        và response (phản hồi từ server)
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Xử lý lỗi, hiểu cách xử lý và trả lại lỗi từ phía server đến client
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Bảo mật ứng dụng bằng cách xử lý đầu vào người dùng, sử dụng HTTPS
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Môi trường (Environment) và Cấu hình (Configuration). Hiểu cách quản lý
        môi trường (phát triển, sản xuất) và cách sử dụng cấu hình trong
        Express.
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        CORS (Cross-Origin Resource Sharing). Hiểu về cơ chế cho phép hoặc hạn
        chế truy cập từ các nguồn khác nhau
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
              "https://www.freecodecamp.org/learn/back-end-development-and-apis/#basic-node-and-express"
            }
            title={"Vượt qua 100% câu hỏi Basic Node and Express"}
          />
          <TargetItem
            title={` Hiểu cách xác định các định tuyến (routes) để xử lý các yêu cầu HTTP từ phía client`}
          />
          <TargetItem
            title={"Biết cách làm việc với Mongoose, MongoDB trong NodeJS"}
          />
          {/* <TargetItem
            title={"Biết cách làm việc với Mongoose, MongoDB trong NodeJS"}
          /> */}

          <TargetItem title={"Nắm chắc lý thuyết về API và RESTful API"} />
          <TargetItem title={"Biết cách xây dựng API theo chuẩn RESTful API"} />

          <TargetItem title={"Học được cách tổ chức code trong thực tế"} />
          <TargetItem
            title={"Biết cách deploy (triển khai) website lên internet"}
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
