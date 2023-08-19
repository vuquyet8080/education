import Image from "next/image";
import Link from "next/link";
import React from "react";

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
          className="text-blue-500 hover:opacity-80"
          href={link}
        >
          {/* Vượt qua 70% câu hỏi Basic JavaScript */}
          {title}
        </Link>
      </div>
    </>
  );
}
