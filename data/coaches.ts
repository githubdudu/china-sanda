// Coach data types and placeholder data
// Structured to match planned Sanity.io schema

export interface Coach {
  id: string;
  name: string;
  nameChinese: string;
  bio: string;
  bioChinese: string;
  photo: string;
  specialties: string[];
  experience: number; // years of experience
  certifications?: string[];
}

export const coaches: Coach[] = [
  {
    id: "coach-1",
    name: "Master Zhang Wei",
    nameChinese: "张伟",
    bio: "Master Zhang has over 20 years of experience in Sanda and has trained multiple national champions. He specializes in traditional Chinese martial arts combined with modern combat techniques.",
    bioChinese: "张师傅拥有超过20年的散打经验，培养了多位全国冠军。他专注于将传统中国武术与现代格斗技术相结合。",
    photo: "/coaches/zhang-wei.jpg",
    specialties: ["Sanda", "Kung Fu", "Competition Training"],
    experience: 20,
    certifications: ["National Level 1 Coach", "International Wushu Judge"],
  },
  {
    id: "coach-2",
    name: "Coach Li Ming",
    nameChinese: "李明",
    bio: "Coach Li focuses on developing fundamental skills and building strong foundations for beginners while also working with advanced students on competition preparation.",
    bioChinese: "李教练专注于培养学员的基本功，为初学者打下坚实的基础，同时也为高级学员提供竞赛备战指导。",
    photo: "/coaches/li-ming.jpg",
    specialties: ["Beginner Training", "Youth Programs", "Fitness"],
    experience: 12,
    certifications: ["Professional Sanda Coach", "Sports Science Degree"],
  },
  {
    id: "coach-3",
    name: "Coach Wang Fang",
    nameChinese: "王芳",
    bio: "Coach Wang is a former professional fighter with extensive competition experience. She brings a unique perspective to training, focusing on both physical and mental conditioning.",
    bioChinese: "王教练是一名前职业选手，拥有丰富的比赛经验。她为训练带来独特的视角，注重身心双修。",
    photo: "/coaches/wang-fang.jpg",
    specialties: ["Women's Training", "Self-Defense", "Competition Strategy"],
    experience: 15,
    certifications: ["Former National Champion", "Self-Defense Instructor"],
  },
];
