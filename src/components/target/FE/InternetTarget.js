import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TargetItem from "../BE/TargetItem";

export default function InternetTarget() {
  return (
    <AccordionItem value="INTERNET">
      <AccordionTrigger className="pl-2 text-gray-900">
        INTERNET
      </AccordionTrigger>
      <AccordionContent className="pl-6 text-gray-500">
        {/* How does the internet work? */}
        Internet hoạt động như thế nào?
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Nắm vững các http request methods (GET, POST, PUT, DELETE, PATCH)
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        {/* What is HTTP? */}
        HTTP, HTTPS là gì?
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Domain Name là gì?
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Hosting là gì?
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        {/* DNS and how it works? */}
        DSN là gì?
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        {/* Browsers and how they work? */}
        Browsers là gì và hoạt động như thế nào?
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        <p className="mb-3 text-xl font-bold text-zinc-700 dark:text-indigo-600">
          Target
        </p>
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        <div className="flex flex-col gap-y-3">
          <TargetItem title={"Nắm chắc khái niệm về giao thức HTTP - HTTPS"} />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
