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
    name: "Master Frank Chen",
    nameChinese: "陈刚",
    bio: "Master Zhang has over 15 years of experience in Sanda and has trained multiple national champions. He specializes in traditional Chinese martial arts combined with modern combat techniques.",
    bioChinese: "张师傅拥有超过15年的散打经验，培养了多位全国冠军。他专注于将传统中国武术与现代格斗技术相结合。",
    photo: "/coaches/zhang-wei.jpg",
    specialties: ["Sanda", "Boxing", "Competition Training"],
    experience: 20,
    certifications: ["National Level 1 Coach", "International Wushu Judge"],
  },
];
