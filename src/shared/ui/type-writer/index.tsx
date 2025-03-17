"use client";
import { TypeAnimation } from "react-type-animation";

interface TypeWriterProps {
  textList: {
    text: string;
    delay: number;
  }[];
}

export const TypeWriter = ({ textList }: TypeWriterProps) => {
  const sequence = textList.flatMap(({ text, delay }) => [text, delay]);

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      deletionSpeed={10}
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "var(--global-xxxl-font-size)",
        display: "inline-block",
      }}
    />
  );
};
