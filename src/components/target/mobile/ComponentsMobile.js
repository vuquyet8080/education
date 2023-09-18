import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TargetItem from "../BE/TargetItem";
import TargetItemLink from "../TargetItemLink";

export default function ComponentsMobile() {
  return (
    <AccordionItem value="Components">
      <AccordionTrigger className="pl-2 text-gray-900">
        Components
      </AccordionTrigger>
      <AccordionContent className="pl-6 text-gray-500">
        Các Component cơ bản cần nắm rõ để xây dựng giao diện (View, Text,
        Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList,
        SectionList, Modal, Switch, TouchableHighlight, ActivityIndicator ...)
      </AccordionContent>

      <AccordionContent className="pl-6 text-gray-500">
        <p className="mb-3 text-xl font-bold text-zinc-700 dark:text-indigo-600">
          Target
        </p>
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        <TargetItemLink
          link={
            "https://www.figma.com/file/bJC0H9yVCoWZDn36OYaB8V/Aspen-Travel-App-Exploration--Mobile-App-Design-(Community)?type=design&node-id=0%3A1&mode=design&t=WZO7UBc5BIMWBDZV-1"
          }
          title={"Áp dụng kiến thức về Component, CSS, hoàn thiện UI"}
        />
      </AccordionContent>
    </AccordionItem>
  );
}
