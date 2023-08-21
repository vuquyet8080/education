import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function GitTarget() {
  return (
    <AccordionItem value="GIT">
      <AccordionTrigger className="pl-2 text-gray-900">
        VERSION CONTROL SYSTEM (GIT)
      </AccordionTrigger>
      <AccordionContent className="pl-6 text-gray-500">
        <Link
          target="_blank"
          className="text-blue-500 hover:opacity-80"
          href={"https://backlog.com/git-tutorial/vn/intro/intro1_1.html"}
        >
          Các khái niệm cơ bản về Git
        </Link>
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Các Git commands cơ bản (branch, checkout, commit, merge, fetch, pull,
        push, config...)
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Git stash, pop, revert
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Cherry-pick
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Git flow
      </AccordionContent>
      <AccordionContent className="pl-6 text-gray-500">
        Resolve conflict
      </AccordionContent>
    </AccordionItem>
  );
}
