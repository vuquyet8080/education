import Image from "next/image";
import Link from "next/link";

export default function TargetItemLink({ title, link }) {
  return (
    <>
      <div className="flex flex-row items-center gap-x-2">
        <div className="relative h-6 w-7 md:w-8 md:h-7">
          <Image
            src={"/target.png"}
            alt="target"
            fill
            className="absolute inset-0 h-full w-f"
          />
        </div>
        <Link
          target="_blank"
          className="text-blue-500 dark:text-blue-600 hover:opacity-80"
          href={link}
        >
          {title}
        </Link>
      </div>
    </>
  );
}
