// Coach data types and placeholder data
// Structured to match planned Sanity.io schema
import { Instructor } from "@/sanity/sanity.types";

export const coaches: Instructor[] = [
  {
    _id: "coach-1",
    _type: "instructor",
    _createdAt: "2023-03-01T00:00:00.000Z",
    _updatedAt: "2023-03-01T00:00:00.000Z",
    _rev: "1-1",
    name: "Master Frank Chen",
    bio: "Master Zhang has over 15 years of experience in Sanda and has trained multiple national champions. He specializes in traditional Chinese martial arts combined with modern combat techniques.",
    photo: { asset: { _ref: "asset-1", _type: "reference" }, _type: 'image' },
    specialties: ["Sanda", "Boxing", "Competition Training"],
    experience: 20,
    certifications: ["National Level 1 Coach", "International Wushu Judge"],
  },
];
