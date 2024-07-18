"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>

          <motion.div
            key={pathname}
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: {
                dalayy: 1,
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
            transition={{ duration: 0.4 }}
            className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
