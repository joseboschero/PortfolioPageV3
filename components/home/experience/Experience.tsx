import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experiencia" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Protolylab",
    position: "Full stack developer",
    time: "Enero 2023 - Enero 2024",
    location: "Chile",
    description:
      "Ayudé en el desarrollo de diferentes aplicaciones web, desarrollando tanto el frontend como el backend, creando componentes reutilizables.",
    tech: [
      "Next JS",
      "React",
      "MongoDB",
      "Postgres",
      "Zustand Store",
      "NodeMailer",
      "Git",
    ],
  },
  {
    title: "Loomin",
    position: "Full stack developer",
    time: "Enero 2024 - Actualidad",
    location: "Argentina",
    description:
      "Ayudé a desarrollar y escalar aplicaciones y páginas web, tanto el frontend como el backend. Desarrollé componentes reutilizables y formularios para el frontend, en la capa backend, desarrollé diferentes APIS e integré diferentes bases de datos.",
    tech: [
      "React",
      "Nextjs",
      "Redux",
      "Astro",
      "PostgreSQL",
      "Socket.io",
      "Prisma",
      "Git",
      "Jira",
      "Framer Motion",
    ],
  },
];
