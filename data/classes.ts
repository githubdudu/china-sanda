// Class schedule data types and placeholder data
// Structured to match planned Sanity.io schema

export interface ClassSchedule {
  id: string;
  name: string;
  nameChinese: string;
  description: string;
  descriptionChinese: string;
  schedule: {
    day: string;
    time: string;
  }[];
  level: "beginner" | "intermediate" | "advanced" | "allLevels";
  capacity: number;
  instructorId: string; // references Coach.id
  duration: number; // minutes
  category: "sanda" | "fitness" | "youth" | "competition";
}

export const classes: ClassSchedule[] = [
  {
    id: "class-1",
    name: "Beginner Sanda Fundamentals",
    nameChinese: "散打基础班",
    description: "Learn the fundamental techniques of Sanda including basic strikes, kicks, and defensive movements. Perfect for those new to martial arts.",
    descriptionChinese: "学习散打的基本技术，包括基本拳法、腿法和防守动作。非常适合武术初学者。",
    schedule: [
      { day: "Monday", time: "18:00 - 19:30" },
      { day: "Wednesday", time: "18:00 - 19:30" },
      { day: "Friday", time: "18:00 - 19:30" },
    ],
    level: "beginner",
    capacity: 20,
    instructorId: "coach-2",
    duration: 90,
    category: "sanda",
  },
  {
    id: "class-2",
    name: "Advanced Competition Training",
    nameChinese: "高级竞赛训练班",
    description: "Intensive training for competitive fighters. Focus on advanced techniques, strategy, and conditioning for tournament preparation.",
    descriptionChinese: "针对竞技选手的强化训练。专注于高级技术、策略和体能调节，为比赛做准备。",
    schedule: [
      { day: "Tuesday", time: "19:00 - 21:00" },
      { day: "Thursday", time: "19:00 - 21:00" },
      { day: "Saturday", time: "10:00 - 12:00" },
    ],
    level: "advanced",
    capacity: 15,
    instructorId: "coach-1",
    duration: 120,
    category: "competition",
  },
  {
    id: "class-3",
    name: "Youth Martial Arts",
    nameChinese: "青少年武术班",
    description: "Age-appropriate martial arts training for children and teenagers. Builds discipline, confidence, and physical fitness.",
    descriptionChinese: "适合儿童和青少年的武术训练。培养纪律性、自信心和身体素质。",
    schedule: [
      { day: "Saturday", time: "14:00 - 15:30" },
      { day: "Sunday", time: "14:00 - 15:30" },
    ],
    level: "allLevels",
    capacity: 25,
    instructorId: "coach-2",
    duration: 90,
    category: "youth",
  },
  {
    id: "class-4",
    name: "Women's Self-Defense & Sanda",
    nameChinese: "女子防身与散打",
    description: "Empowering women through martial arts training. Focus on practical self-defense techniques combined with Sanda fundamentals.",
    descriptionChinese: "通过武术训练赋能女性。专注于实用防身技术与散打基础的结合。",
    schedule: [
      { day: "Tuesday", time: "10:00 - 11:30" },
      { day: "Thursday", time: "10:00 - 11:30" },
    ],
    level: "allLevels",
    capacity: 18,
    instructorId: "coach-3",
    duration: 90,
    category: "sanda",
  },
];
