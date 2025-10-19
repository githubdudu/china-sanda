// Gallery image data types and placeholder data
// Structured to match planned Sanity.io schema

export interface GalleryImage {
  id: string;
  image: string; // path to image file
  title: string;
  titleChinese: string;
  description?: string;
  descriptionChinese?: string;
  category: "training" | "competition" | "events" | "facilities" | "achievements";
  date: string; // ISO date string
  featured?: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-1",
    image: "/gallery/training-session-1.jpg",
    title: "Advanced Training Session",
    titleChinese: "高级训练课程",
    description: "Students practicing advanced Sanda combinations under Master Zhang's guidance",
    descriptionChinese: "学员在张师傅的指导下练习高级散打组合技",
    category: "training",
    date: "2024-03-15",
    featured: true,
  },
  {
    id: "gallery-2",
    image: "/gallery/competition-1.jpg",
    title: "National Championship 2024",
    titleChinese: "2024年全国锦标赛",
    description: "Our athletes competing at the national level championship",
    descriptionChinese: "我们的运动员在全国锦标赛上参赛",
    category: "competition",
    date: "2024-02-20",
    featured: true,
  },
  {
    id: "gallery-3",
    image: "/gallery/youth-class.jpg",
    title: "Youth Program",
    titleChinese: "青少年课程",
    description: "Young students learning discipline and martial arts fundamentals",
    descriptionChinese: "青少年学员学习纪律和武术基础",
    category: "training",
    date: "2024-03-10",
  },
  {
    id: "gallery-4",
    image: "/gallery/facilities.jpg",
    title: "State-of-the-Art Training Facilities",
    titleChinese: "一流的训练设施",
    description: "Our modern training facility equipped with professional-grade equipment",
    descriptionChinese: "配备专业级设备的现代化训练场地",
    category: "facilities",
    date: "2024-01-15",
    featured: true,
  },
  {
    id: "gallery-5",
    image: "/gallery/awards.jpg",
    title: "Championship Trophies",
    titleChinese: "冠军奖杯",
    description: "Achievements and awards won by our club members",
    descriptionChinese: "俱乐部成员获得的成就和奖项",
    category: "achievements",
    date: "2024-03-01",
  },
  {
    id: "gallery-6",
    image: "/gallery/event-1.jpg",
    title: "Grand Opening Ceremony",
    titleChinese: "盛大开幕仪式",
    description: "Celebrating the opening of our new training center",
    descriptionChinese: "庆祝新训练中心的开幕",
    category: "events",
    date: "2024-01-20",
  },
];
