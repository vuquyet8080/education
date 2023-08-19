import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    </AccordionItem>
  );
}
