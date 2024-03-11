"use client";
import Link from "next/link";
import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { usePathname } from "next/navigation";
const Nav = () => {
  const MotionLink = motion(Link);
  const pathName = usePathname();
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];

  const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
    const inputRange = inputUpper - inputLower;
    const outputRange = outputUpper - outputLower;
    return (value) =>
      outputLower + ((value - inputLower) / inputRange) * outputRange || 0;
  };

  const setTransform = (item, event, x, y) => {
    const rect = item.getBoundingClientRect();
    const relX = event.clientX - rect.left;
    const relY = event.clientY - rect.top;
    const xRange = mapRange(0, rect.width, -1, 1)(relX);
    const yRange = mapRange(0, rect.height, -1, 1)(relY);
    x.set(xRange * 10);
    y.set(yRange * 10);
  };

  return (
    <nav className="p-8">
      <ul className="flex gap-12">
        <AnimatePresence>
          {links.map((link) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const textX = useTransform(x, (latest) => latest * 0.5);
            const textY = useTransform(y, (latest) => latest * 0.5);

            return (
              <motion.li
                key={link.name}
                onPointerMove={(event) => {
                  const item = event.currentTarget;
                  setTransform(item, event, x, y);
                }}
                onPointerLeave={() => {
                  x.set(0);
                  y.set(0);
                }}
                style={{ x, y }}
              >
                <MotionLink
                  href={link.path}
                  className="relative font-medium text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-slate-800 rounded-md"
                >
                  <motion.span
                    className="z-10 relative"
                    style={{ x: textX, y: textY }}
                  >
                    {link.name}
                  </motion.span>
                  {pathName === link.path && (
                    <motion.div
                      transition={{ type: "spring" }}
                      layoutId="underline"
                      className="absolute rounded-md left-0 bottom-0 bg-blue-700 w-full h-full"
                    ></motion.div>
                  )}
                </MotionLink>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </nav>
  );
};

export default Nav;
