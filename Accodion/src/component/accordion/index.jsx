import React from "react";
import { useState } from "react";

import { motion } from "motion/react";

import data from "./data";

export default function Accordion() {
  const [view, setView] = useState(0);

  const handleView = (id) => {
    if (id != view) {
      setView(id);
    } else {
      setView(0);
    }
  };

  return (
    <>
      <section className="w-full h-screen bg-neutral-50 flex flex-col items-center justify-center">
        <div className="w-5/10 flex flex-col justify-center items-center gap-4">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <motion.div
                onClick={() => handleView(dataItem.id)}
                className="w-full flex flex-col border border-neutral-700 p-2 rounded-xl cursor-pointer"
                key={dataItem.id}
                animate={
                  view === dataItem.id
                    ? { backgroundColor: "oklch(95.1% 0 0)" }
                    : { backgroundColor: "oklch(98.5% 0 0)" }
                }
              >
                <div className="w-full flex flex-row justify-between text-neutral-700">
                  <h3>{dataItem.question}</h3>
                  <motion.span
                    initial={false}
                    animate={
                      view === dataItem.id ? { rotate: 180 } : { rotate: 0 }
                    }
                    transition={{ duration: 0.2 }}
                  >
                    <i className="ri-arrow-down-s-line"></i>
                  </motion.span>
                </div>
                <motion.div
                  className=" text-neutral-950 overflow-hidden"
                  animate={
                    view === dataItem.id
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p>{dataItem.answer}</p>
                </motion.div>
              </motion.div>
            ))
          ) : (
            <div>No data found ~</div>
          )}
        </div>
      </section>
    </>
  );
}
