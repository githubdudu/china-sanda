import { Class, Instructor } from "./sanity.types";

export type PopulatedClass = Omit<Class, "instructor"> & {
  instructor: Instructor;
};
