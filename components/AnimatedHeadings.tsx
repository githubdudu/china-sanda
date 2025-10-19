"use client";

import { useState, useEffect } from "react";

const AnimatedHeadings = () => {
  const [showEnglish, setShowEnglish] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowEnglish((prev) => !prev);
    }, 5000); // Toggle every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[200px] sm:min-h-[180px]">
      {/* English Heading */}
      <div
        className={`relative inset-0 transition-opacity duration-[2s] ease-out ${
          showEnglish ? "opacity-100" : "opacity-0"
        }`}
      >
        <Heading1
          s1Normal="Welcome to"
          s1Stress="China Sanda Club"
          s2Normal="The World-Class"
          s2Stress="Sanda Club"
        />
      </div>

      {/* Chinese Heading */}
      <div
        className={`absolute top-0 inset-0 transition-opacity duration-[2s] ease-out ${
          !showEnglish ? "opacity-100" : "opacity-0"
        }`}
      >
        <Heading1
          s1Normal="欢迎来到"
          s1Stress="中国散打"
          s2Normal="世界一流的"
          s2Stress="散打搏击俱乐部"
        />
      </div>
    </div>
  );
};

export default AnimatedHeadings;

interface Heading1Props {
  s1Normal: string;
  s1Stress: string;
  s2Normal: string;
  s2Stress: string;
}

const Heading1 = ({
  s1Normal,
  s1Stress,
  s2Normal,
  s2Stress,
}: Heading1Props) => {
  return (
    <h1 className="text-4xl sm:text-5xl font-extrabold text-center sm:text-left leading-tight">
      <div className="mb-2">
        {s1Normal}
        &nbsp;
        <span className="underline underline-offset-4 decoration-primary">
          {s1Stress}
        </span>
      </div>
      <div>
        <span className="underline underline-offset-4 decoration-primary">
          {s2Normal}
        </span>
        &nbsp;
        {s2Stress}
      </div>
    </h1>
  );
};
