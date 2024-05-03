import { Varela_Round } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import Link from "next/link";

type ComponentAs =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "p"
  | "div";

interface TypographyProps {
  children: React.ReactNode;
}

const VarelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

export const Typography: React.FC<TypographyProps> = ({ children }) => {
  return <h1 className={cn(VarelaRound.className, "text-2xl")}>{children}</h1>;
};

export const Heading: React.FC<{
  as?: ComponentAs;
  content: React.ReactNode;
  clx?: string;
}> = ({ as = "h1", content, clx }) => {
  const Component = as;
  return (
    <Component className={cn(GeistMono.className, "text-9xl", clx)}>
      {content}
    </Component>
  );
};

export const AnimateHeading: React.FC<{
  content: string;
  clx?: string;
  staggerInitalCtrl: number;
}> = ({ content, clx, staggerInitalCtrl }) => {
  return (
    <h1 className={cn(GeistMono.className, "text-9xl", clx)}>
      {content.split("").map((char, index) => {
        return (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 + staggerInitalCtrl }}
            key={index}
          >
            {char}
          </motion.span>
        );
      })}
    </h1>
  );
};
