import { FaPlaystation, FaCamera, FaUniversity } from "react-icons/fa";
import { SiDoordash } from "react-icons/si";
import { AiOutlineStock } from "react-icons/ai";
import { HiOutlinePresentationChartBar } from "react-icons/hi";

export const milestones = [
  {
    id: 5,
    categories: ["Software Engineer II"],
    title: "DoorDash",
    icon: SiDoordash,
    description: `After graduating from UC Berkeley, started my career as a Software Engineer in DoorDash's infrastructure team.`,
    href: "about/doordash",
    date: "Summer 2022 - Current",
  },
  {
    id: 4,
    categories: ["Alumni"],
    title: "UC Berkeley",
    icon: FaUniversity,
    description: `Graduated in 2022 from UC Berkeley with a B.A. in Computer Science & minor in Data Science.`,
    date: "Spring 2022",
    href: "about/berkeley",
  },
  {
    id: 3,
    categories: ["Software Engineering Intern"],
    title: "Ridgeline",
    icon: AiOutlineStock,
    description: `Spent the summer in Tahoe, working on building keyboard shortcuts and page bookmarking in the Ridgeline application.`,
    date: "Summer 2021",
    href: "about/ridgeline",
  },
  {
    id: 2,
    categories: ["Software Engineering Intern"],
    title: "Playstation",
    icon: FaPlaystation,
    description: `Worked on schema translation pipelines for registering data on the P.S. Now network for the PS5.`,
    date: "Summer 2020",
    href: "about/playstation",
  },
  {
    id: 1,
    categories: ["Software Engineering Intern"],
    title: "RED Digital Cinema",
    icon: FaCamera,
    description: `Built an automated hardware testing application using C# & a bunch of analog components, used to manufacture the RED Komodo.`,
    date: "Summer 2019",
    href: "about",
  },
  {
    id: 0,
    categories: ["President"],
    title: "UpSync Consulting",
    icon: HiOutlinePresentationChartBar,
    description: `Lead a group of ~50 undergraduates in consulting work - building out software MVP's, conducting market research, hosting events.`,
    date: "Spring 2019 - Spring 2022",
    href: "about",
  },
];
