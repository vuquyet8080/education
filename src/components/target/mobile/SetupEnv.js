import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TargetItem from "../BE/TargetItem";

export default function SetupEnv() {
  return (
    <AccordionItem value="SetupEnv">
      <AccordionTrigger className="pl-2 text-gray-900">
        React Native Environment Setup
      </AccordionTrigger>
      <AccordionContent className="pl-6 text-gray-500">
        Installing dependencies
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Xcode & Android Studio
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Installing an iOS Simulator in Xcode
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Install CocoaPods
      </AccordionContent>

      <AccordionContent className="pl-6 text-gray-500">
        <p className="mb-3 text-xl font-bold text-zinc-700 dark:text-indigo-600">
          Target
        </p>
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        <div className="flex flex-col gap-y-3">
          <TargetItem
            title={
              "Creating a new application and Running your React Native application"
            }
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
