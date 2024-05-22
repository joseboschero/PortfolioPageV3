import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="Acerca de" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Qué tal? Soy José Boschero, y soy un estudiante de análisis en
              sistemas.
              <br />
              <br />
              Tengo experiencia en el desarrollo web, así como en otras
              technologías. Soy un apasionado por crear sorprendentes y
              responsivos sitios webs que proporcionen una buena experiencia de
              usario.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Mis habilidades incluyen HTML, CSS, JavaScript, y varios
              frameworks de frontend como React y Next.js. También he trabajado
              con tecnologías backend como Node.js, Mongoose, MongoDB and
              Graphql/Apollo , lo cual me permite crear aplicaciones full-stack.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Cuando no estoy escribiendo código, disfruto mucho de los
              videojuegos. Creo que Mantener un equilibrio saludable entre el
              trabajo y la vida personal es crucial para permanecer productivo y
              motivado.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Estoy en la constante busqueda de nuevos desafíos y oportunidades
              para aprender y crecer como desarrolador. Si estas interesado en
              trabajar juntos o tienes alguna pregunta, porfavor no dudes en
              contactarme! 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>Mis links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
