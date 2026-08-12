import { HomePage } from "@/sanity/sanity.types";

export const heroData: HomePage = {
  _createdAt: "2025-10-22T23:28:58Z",
  _id: "7137c235-86f1-4e7f-a7eb-1114e4ce6831",
  _rev: "FOQZ7g4dkAwyrxWul5DkPR",
  _type: "homePage",
  _updatedAt: "2025-10-24T03:16:18Z",
  button1Red: {
    _type: "buttonContent",
    name: "Book Trial",
    nameCN: "预约试听课",
    url: "/contact",
  },
  button2White: {
    _type: "buttonContent",
    name: "View Classes",
    nameCN: "查看课程",
    url: "/classes",
  },
  name: "homePage 主页配置",
  pageTitle: [
    {
      _key: "b188481a10f7",
      _type: "titleSentence",
      title: {
        _type: "sentence",
        sentence: "China Sanda Club",
        stressWord: "Sanda",
      },
      titleCN: {
        _type: "sentence",
        sentence: "中国散打",
        stressWord: "散打",
      },
    },
    {
      _key: "128cdad0e061",
      _type: "titleSentence",
      title: {
        _type: "sentence",
        sentence: "The World-Class Art of Chinese Kickboxing",
        stressWord: "World-Class",
      },
      titleCN: {
        _type: "sentence",
        sentence: "世界一流的中国散打",
        stressWord: "世界一流",
      },
    },
  ],
};
