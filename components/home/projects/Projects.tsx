import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Proyectos" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Loomin Landing Page",
    imgSrc: "/project-imgs/loomin.png",
    code: "#",
    projectLink: "https://www.loomin.me/",
    tech: ["Astro", "Nextjs", "Tailwind", "Framer Motion"],
    description: "Landing Page de la empresa.",
    modalContent: (
      <>
        <p>
          Trabajé en el desarrollo front-end y back-end de la página, creando componentes
          reutilizables y animaciones junto con la integración de calendly.

          Creación de blogs a través de un formulario.
        </p>
        <p>El stack tecnológico está basado en Nextjs, Astro y Tailwind CSS.</p>
      </>
    ),
  },
  {
    title: "TLH",
    imgSrc: "/project-imgs/tlh.png",
    code: "#",
    projectLink: "#",
    tech: [
      "React",
      "Redux",
      "Nextjs",
      "Tailwind",
      "Shadcn",
      "Framer Motion",
      "Socket.io",
      "Prisma",
      "PostreSql",
    ],
    description: "Aplicación web para gestionar una empresa de transporte.",
    modalContent: (
      <>
        <p>
          Trabajé como desarrollador full-stack creando componentes
          reutilizables, animaciones, integración y conexión de la base de
          datos.
        </p>
        <p>
          El stack tecnológico está basado en Nextjs, Tailwind, Shadcn, Framer
          motion, conectado a un backend de Prisma y una base de datos en
          PostgreSql.
        </p>
      </>
    ),
  },
  {
    title: "Protolylab",
    imgSrc: "/project-imgs/protolylab.png",
    code: "#",
    projectLink: "https://www.cuantocuestaunaapp.site/",
    tech: ["React", "Typescript", "Tailwind", "Zustand Store", "i18n"],
    description: "Cotizador/calculadora de aplicaciones web y móviles.",
    modalContent: (
      <>
        <p>
          Trabajé como full-stack developer en esta aplicación. En la capa
          backend integré una api en la cual la cotización es enviada a través
          de nodemailer al admin, y utilicé la libreria de Zustand store en el
          frontend para almacenar datos.
        </p>
        <p>
          Trabajé principalmente en el frontend, creando componentes
          reutilizables e incorporé la libreria i18n para traducir la página en
          español e inglés.
        </p>
      </>
    ),
  },
  {
    title: "E-commerce Template",
    imgSrc: "/project-imgs/ecommy.png",
    code: "https://github.com/joseboschero/food-commerce/tree/master",
    projectLink: "https://food-commerce-gules.vercel.app/",
    tech: ["React", "Nextjs", "Tailwind", "Zustand Store", "Daisy UI"],
    description: "Template para futuros ecommerces de comida rápida.",
    modalContent: (
      <>
        <p>
          Trabajo en progreso, en el cual creé componentes reutilizables, usé la
          libreria de Zustand store para manejar el carrito y apliqué y aprendí
          sobre Daisy UI. En el futuro se deberá integrar un sistema de login de
          usuarios.
        </p>
        <p>Este es un proyecto plantilla para posibles futuros ecommerce.</p>
      </>
    ),
  },
  {
    title: "Image 2 code",
    imgSrc: "/project-imgs/image2code.png",
    code: "https://github.com/joseboschero/image-to-code",
    projectLink: "https://image-to-code-cyan.vercel.app/",
    tech: ["React", "Nextjs", "Tailwind", "GPT-4-Vision"],
    description:
      "Aplicación web en la cual puedes arrastrar o insertar el link de una imagen para convertirla en código.",
    modalContent: (
      <>
        <p>
          Este es un proyecto propio en el cual incorporé la api de
          Chatgpt-4-vision la cual convierte imagenes en código.
        </p>
        <p>
          Es posible que no funcione ya que me puedo quedar sin tokens en gpt.
        </p>
      </>
    ),
  },
  {
    title: "Spotify clone",
    imgSrc: "/project-imgs/spotify.png",
    code: "https://github.com/joseboschero/spotify-clone",
    projectLink: "https://spotify-clone-seven-red.vercel.app/",
    tech: ["Astro", "React", "Svelte", "Tailwind"],
    description: "Clon de la página de Spotify.",
    modalContent: (
      <>
        <p>
          Este es un clon de Spotify en el cual incorporé una busqueda y un
          reproductor de música.
        </p>
        <p>
          lo desarrollé con Astro a la vez que fui aprendiendo sobre este
          maravilloso framework.
        </p>
      </>
    ),
  },
  {
    title: "To do",
    imgSrc: "/project-imgs/todo.png",
    code: "https://github.com/joseboschero/notes-app",
    projectLink: "https://notes-app-frontend-self.vercel.app/",
    tech: ["React", "Vite", "Tailwind", "Sequelize", "PostgreSQL"],
    description: "Aplicación web para crear y guardar notas.",
    modalContent: (
      <>
        <p>
          Este es un proyecto en el cual utilicé y probé el framework Vite para
          el frontend, en el backend utilicé PostgreSQL para almacenar los datos
          y Sequelize para establecer la conexión entre la aplicación y la base
          de datos.
        </p>
      </>
    ),
  },
  {
    title: "Portfolio Page v2",
    imgSrc: "/project-imgs/portfoliov2.png",
    code: "https://github.com/joseboschero/PortfolioPageV2",
    projectLink: "https://portfolio-page-v2-eight.vercel.app/",
    tech: ["React", "Create React App", "Animate.css"],
    description: "Segundo portfolio.",
    modalContent: (
      <>
        <p>
          Este es mi segundo portfolio en el cual integré animaciones utilizando
          Animate.css.
        </p>
        <p>
          Utilicé nodemailer en el backend para el envío de mails en la parte de
          contacto.
        </p>
      </>
    ),
  },
  {
    title: "Portfolio Page v1",
    imgSrc: "/project-imgs/portfoliov1.png",
    code: "https://github.com/joseboschero/PortfolioPage",
    projectLink: "https://joseboschero.vercel.app/home",
    tech: ["React", "Create React app", "i18n", "Framer motion"],
    description: "Primer portfolio.",
    modalContent: (
      <>
        <p>
          Este es mi primer portfolio el cual desarrollé para aprender a
          utilizar React y la libreria i18n para traducir la página.
        </p>
        <p>
          Utilicé create react app en este proyecto y aprendí sobre algunos
          conceptos para poder crear animaciones con Framer Motion.
        </p>
      </>
    ),
  },
];
