export type Project = {
  name: string;
  description: string;
  startYear: string;
  endYear: string;
  status: "ongoing" | "completed" | "future";
  githubLink: string;
  href: string;
};
