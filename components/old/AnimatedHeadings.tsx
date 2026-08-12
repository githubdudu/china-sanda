"use client";

import { useState, useEffect } from "react";
import { Sentence, type HomePage } from "@/sanity/sanity.types";

type HeadingWordProps = {
  children: string;
  isStressed: boolean;
};

type HeadingSentenceProps = {
  words: HeadingWordProps[];
};

const AnimatedHeadings = ({
  pageTitle,
}: {
  pageTitle: HomePage["pageTitle"];
}) => {
  const [showEnglish, setShowEnglish] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowEnglish((prev) => !prev);
    }, 5000); // Toggle every 5 seconds

    return () => clearInterval(interval);
  }, []);

  if (!pageTitle || !Array.isArray(pageTitle) || pageTitle.length === 0) {
    return null;
  }

  return (
    <h1 className="min-h-[200px] sm:min-h-[180px] text-4xl sm:text-5xl font-extrabold text-[#ededed] text-center sm:text-left leading-tight">
      {pageTitle.map((titleItem) => (
        titleItem.title && titleItem.titleCN && (
          <AnimatedHeading
            key={titleItem._key}
            sentence={titleItem.title}
            sentenceCN={titleItem.titleCN}
            showEnglish={showEnglish}
          />
        )))}
    </h1>
  );
};

export default AnimatedHeadings;

const AnimatedHeading = ({
  sentence,
  sentenceCN,
  showEnglish,
}: {
  sentence: Sentence;
  sentenceCN: Sentence;
  showEnglish: boolean;
}) => {
  return (
    <div className="relative mb-2">
      {/* English Heading */}
      <div
        className={`relative inset-0 transition-opacity duration-[2s] ease-out ${
          showEnglish ? "opacity-100" : "opacity-0"
        }`}
      >
        <HeadingSentence words={prepareWords(sentence)} />
      </div>

      {/* Chinese Heading */}
      <div
        className={`absolute top-0 inset-0 transition-opacity duration-[2s] ease-out ${
          !showEnglish ? "opacity-100" : "opacity-0"
        }`}
      >
        <HeadingSentence words={prepareWords(sentenceCN)} />
      </div>
    </div>
  );
};

const HeadingSentence = ({ words }: HeadingSentenceProps) => {
  return (
    <>
      {words.map((word, index) => (
        <HeadingWord key={index} isStressed={word.isStressed}>
          {word.children}
        </HeadingWord>
      ))}
    </>
  );
};

const HeadingWord = ({ children, isStressed }: HeadingWordProps) => {
  return (
    <>
      {isStressed ? (
        <span className="underline underline-offset-4 decoration-primary">
          {children}
        </span>
      ) : (
        <span>{children}</span>
      )}
    </>
  );
};

// prepare the words
function prepareWords(sentence: Sentence): HeadingWordProps[] {
  if (!sentence.sentence) return [];
  if (!sentence.stressWord) {
    return [{ children: sentence.sentence, isStressed: false }];
  }

  const index = sentence.sentence.indexOf(sentence.stressWord);
  if (index === -1) {
    return [{ children: sentence.sentence, isStressed: false }];
  }

  const wordsArray: HeadingWordProps[] = [];
  // Add non-stressed part before the stressed word
  if (index != 0) {
    wordsArray.push({
      children: sentence.sentence.slice(0, index),
      isStressed: false,
    });
  }
  // Add the stressed word
  wordsArray.push({
    children: sentence.stressWord,
    isStressed: true,
  });
  // Add non-stressed part after the stressed word
  if (index + sentence.stressWord.length < sentence.sentence.length) {
    wordsArray.push({
      children: sentence.sentence.slice(
        index + sentence.stressWord.length,
      ),
      isStressed: false,
    });
  }

  return wordsArray;
}
