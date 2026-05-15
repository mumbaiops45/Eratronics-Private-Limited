"use client";

import { useState } from "react";

const tabs = [
  {
    id: 1,
    tag: "Leadership & Ownership",
    title: "Empower Individuals",
    description:
      "Empowerment is the best lubricant to the exercise of learning. We enable our employees to make more and bigger decisions. Involve team members in taking important decisions. Encouraging employees to play a more active role.",
    keywords: [
      "Team Ownership",
      "Leadership",
      "Collaboration",
      "Growth",
    ],
  },

  {
    id: 2,
    tag: "Continuous Improvement",
    title: "Constantly Improve",
    description:
      "Our goals are aggressive and they demand improvement. it's in our nature. And it's the only way we're going to accomplish everything.",
    keywords: [
      "Innovation",
      "Performance",
      "Improvement",
      "Efficiency",
    ],
  },

  {
    id: 3,
    tag: "Positive Mindset",
    title: "Face Challenges With Optimism",
    description:
      "We value challenges because they produce innovations. We commit to approaching problems with enthusiasm and optimism.",
    keywords: [
      "Optimism",
      "Problem Solving",
      "Innovation",
      "Confidence",
    ],
  },

  {
    id: 4,
    tag: "Precision & Reliability",
    title: "Be Diligent-Get It Right",
    description:
      "To be diligent means to be very thorough and accurate when it comes to deploying mission critical network. Hence to get it right.",
    keywords: [
      "Accuracy",
      "Quality",
      "Reliability",
      "Excellence",
    ],
  },
];

const getClipPath = (index, total) => {
  if (index === 0)
    return "polygon(0 0, 100% 0, 88% 100%, 0 100%)";

  if (index === total - 1)
    return "polygon(12% 0, 100% 0, 100% 100%, 0 100%)";

  return "polygon(12% 0, 100% 0, 88% 100%, 0 100%)";
};

export default function CoreValues() {
  const [activeId, setActiveId] = useState(1);

  const activeTab = tabs.find((t) => t.id === activeId);

  return (
    <section className="py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="max-w-4xl mb-12">

          <div className="flex items-center gap-3 mb-4">

            <span className="block w-8 h-px bg-[var(--primary)]" />

            <span className="text-[var(--primary)] text-xs font-semibold tracking-[4px] uppercase">
              What We Stand For
            </span>

          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
            Our <span className="text-[var(--primary)]">Core Values</span>
          </h2>

        </div>

        {/* TABS */}
        <div className="flex w-full overflow-x-auto scrollbar-hide">

          {tabs.map((tab, index) => {
            const isActive = activeId === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={`
                  min-w-[260px]
                  lg:min-w-0
                  flex-1
                  h-[58px]
                  text-sm
                  font-semibold
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  whitespace-nowrap
                  cursor-pointer
                  select-none
                  ${
                    isActive
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)]/20"
                  }
                `}
                style={{
                  clipPath: getClipPath(index, tabs.length),
                  marginRight:
                    index !== tabs.length - 1
                      ? "-18px"
                      : "0",
                  zIndex:
                    isActive
                      ? tabs.length + 10
                      : tabs.length - index,
                }}
              >

                <span
                  style={{
                    paddingLeft:
                      index === 0 ? "0" : "20px",
                    paddingRight:
                      index === tabs.length - 1
                        ? "0"
                        : "20px",
                  }}
                >
                  {tab.title}
                </span>

              </button>
            );
          })}

        </div>

        {/* ACTIVE CARD */}
        <div
          key={activeId}
          className="
            mt-0
            border
            border-[var(--primary)]/20
            rounded-b-3xl
            p-8
            lg:p-12
            transition-all
            duration-500
            hover:border-[var(--primary)]/50
            hover:shadow-2xl
            group
            relative
            overflow-hidden
            bg-white
          "
        >

          {/* BG EFFECTS */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[var(--primary)]/5 pointer-events-none transition-all duration-500 group-hover:scale-110" />

          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[var(--primary)]/5 pointer-events-none transition-all duration-500 group-hover:scale-125" />

          {/* LEFT STRIP */}
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[4px] bg-[var(--primary)] transition-all duration-500 group-hover:h-[80%]" />

          <div className="relative z-10">

            {/* TAG */}
            <span className="inline-block text-[var(--primary)] text-xs font-semibold tracking-[3px] uppercase bg-[var(--primary)]/10 px-4 py-1.5 rounded-full">
              {activeTab.tag}
            </span>

            {/* TITLE */}
            <h3 className="text-3xl font-bold text-black mt-5 transition-colors duration-300 group-hover:text-[var(--primary)]">
              {activeTab.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-600 leading-relaxed mt-5 max-w-4xl">
              {activeTab.description}
            </p>

            {/* KEYWORDS */}
            <div className="flex flex-wrap gap-3 mt-8">

              {activeTab.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-[var(--primary)]/20
                    bg-[var(--primary)]/5
                    text-sm
                    text-[var(--primary)]
                    font-medium
                    transition-all
                    duration-300
                    group-hover:bg-[var(--primary)]/10
                    group-hover:border-[var(--primary)]/40
                  "
                >
                  {keyword}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}