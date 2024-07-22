"use client";
import React from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";

const AgronomyFAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "What are ph values?",
      content: [
        "- Contact Your Insurance Provider ",
        <br key="1" />,
        "- Update Personal Information.",
        <br key="2" />,
        "- Review Renewal Terms.",
        <br key="3" />,
        "- Make Necessary Adjustments",
        <br key="4" />,
        "- Submit Required Documents.",
        <br key="5" />,
        "- Pay Renewal Premium",
        <br key="6" />,
        "- Receive Confirmation",
      ],
    },
    {
      title: "Can I plant avocados during December?",
      content: [
        "- Contact Your Insurance Provider ",
        <br key="1" />,
        "- Gather Necessary Documentation.",
        <br key="2" />,
        "- Complete Claim Forms.",
        <br key="3" />,
        "- Submit Documentation",
        <br key="4" />,
        "- Cooperate with Investigations.",
        <br key="5" />,
        "- Maintain Records",
        <br key="6" />,
        "- Receive Compensation",
      ],
    },
    {
      title: "What is the best fertilizer?",
      content: "Something Important LOL :)",
    },
  ];

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full mb-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg shadow-md mt-2"
        >
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => onItemClick(index)}
          >
            <div
              className="font-bold text-darkerGreen"
              style={{ fontFamily: "Poppins" }}
            >
              {item.title}
            </div>
            <div>{index === activeIndex ? <ExpandMore /> : <ExpandLess />}</div>
          </div>
          {index === activeIndex && (
            <div
              className="p-4 pt-0"
              style={{ fontFamily: "Quicksand", fontWeight: "600" }}
            >
              {Array.isArray(item.content)
                ? item.content.map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>{line}</React.Fragment>
                  ))
                : item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AgronomyFAQs;
