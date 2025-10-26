// Note: instructor field is populated (from GROQ query) rather than just a reference
import { PopulatedClass } from "@/sanity/populated.types";

export const defaultClassesData: PopulatedClass[] = [
  {
    _createdAt: "2025-10-25T11:28:54Z",
    _id: "84c5c012-d679-4719-b103-a927d43caefb",
    _rev: "bCU8FvWDkzjb4o9VRfYMIY",
    _type: "class",
    _updatedAt: "2025-10-26T07:19:54Z",
    instructor: {
      _createdAt: "2025-10-26T06:04:56Z",
      _id: "7516fe1e-ae36-47d4-991a-5237da3c0415",
      _rev: "dhq5u4ysv6TWFcQ3lpghIg",
      _type: "instructor",
      _updatedAt: "2025-10-26T06:05:24Z",
      name: "陈刚 Chen Gang",
    },
    level: "beginner",
    schedule: [
      {
        _key: "78226c6f3be8",
        _type: "schedule",
        timeDuration: {
          _type: "timeDuration",
          endTime: "17:00",
          startTime: "16:00",
        },
        whichday: 1,
      },
      {
        _key: "21b46031de3e",
        _type: "schedule",
        timeDuration: {
          _type: "timeDuration",
          endTime: "18:00",
          startTime: "17:00",
        },
        whichday: 5,
      },
      {
        _key: "2188375686fa",
        _type: "schedule",
        timeDuration: {
          _type: "timeDuration",
          endTime: "11:00",
          startTime: "10:00",
        },
        whichday: 6,
      },
      {
        _key: "bddeb6c94c2b",
        _type: "schedule",
        timeDuration: {
          _type: "timeDuration",
          endTime: "10:40",
          startTime: "09:20",
        },
        whichday: 7,
      },
      {
        _key: "7e739e55b2fd",
        _type: "schedule",
        timeDuration: {
          _type: "timeDuration",
          endTime: "14:30",
          startTime: "13:30",
        },
        whichday: 7,
      },
    ],
    sequence: 1,
    title: "4-7 years Kickboxing",
    titleCN: "拳击班 4-7 岁",
  },
  {
    _createdAt: "2025-10-26T06:19:20Z",
    _id: "374c685a-bb70-4298-8158-3ced07dd97a6",
    _rev: "bCU8FvWDkzjb4o9VRfYM2O",
    _type: "class",
    _updatedAt: "2025-10-26T07:19:50Z",
    instructor: {
      _createdAt: "2025-10-26T06:04:56Z",
      _id: "7516fe1e-ae36-47d4-991a-5237da3c0415",
      _rev: "dhq5u4ysv6TWFcQ3lpghIg",
      _type: "instructor",
      _updatedAt: "2025-10-26T06:05:24Z",
      name: "陈刚 Chen Gang",
    },
    level: "intermediate",
    schedule: [
      {
        _key: "2b1d43e42979",
        _type: "schedule",
        timeDuration: {
          _type: "timeDuration",
          endTime: "18:40",
          startTime: "17:20",
        },
        whichday: 1,
      },
      {
        _key: "8de6801cf0c4c8a80a9eb2fa5287c205",
        _type: "schedule",
        timeDuration: {
          _type: "timeDuration",
          endTime: "19:30",
          startTime: "18:00",
        },
        whichday: 5,
      },
      {
        _key: "1ea77b2f2d609b2d3423ea31ead9d284",
        _type: "schedule",
        timeDuration: {
          _type: "timeDuration",
          endTime: "12:30",
          startTime: "11:00",
        },
        whichday: 6,
      },
      {
        _key: "e7aae316889ed528402dcaa95b909761",
        _type: "schedule",
        timeDuration: {
          _type: "timeDuration",
          endTime: "12:30",
          startTime: "11:00",
        },
        whichday: 7,
      },
    ],
    sequence: 2,
    title: "8-13 years Kickboxing",
    titleCN: "拳击班 8-13 岁",
  },
  {
    _createdAt: "2025-10-26T06:29:05Z",
    _id: "ab742b02-c549-4321-b6e4-b193c663aa25",
    _rev: "bCU8FvWDkzjb4o9VRfYLjX",
    _type: "class",
    _updatedAt: "2025-10-26T07:19:41Z",
    instructor: {
      _createdAt: "2025-10-26T06:04:56Z",
      _id: "7516fe1e-ae36-47d4-991a-5237da3c0415",
      _rev: "dhq5u4ysv6TWFcQ3lpghIg",
      _type: "instructor",
      _updatedAt: "2025-10-26T06:05:24Z",
      name: "陈刚 Chen Gang",
    },
    level: "advanced",
    schedule: [
      {
        _key: "ab58916d7dd2",
        _type: "schedule",
        timeDuration: {
          _type: "timeDuration",
          endTime: "21:00",
          startTime: "19:30",
        },
        whichday: 1,
      },
      {
        _key: "333d2695da4a116d2d2c2945a083ccb5",
        _type: "schedule",
        timeDuration: {
          _type: "timeDuration",
          endTime: "21:00",
          startTime: "19:30",
        },
        whichday: 3,
      },
      {
        _key: "309daf96bd74bf7ac12577e0d5a29228",
        _type: "schedule",
        timeDuration: {
          _type: "timeDuration",
          endTime: "21:00",
          startTime: "19:30",
        },
        whichday: 5,
      },
      {
        _key: "d6c051411f9f00653a0b954b807ea3df",
        _type: "schedule",
        timeDuration: {
          _type: "timeDuration",
          endTime: "16:00",
          startTime: "14:30",
        },
        whichday: 7,
      },
    ],
    sequence: 3,
    title: "12+ & Adult",
    titleCN: "12岁以上及成人摔跤",
  },
];
