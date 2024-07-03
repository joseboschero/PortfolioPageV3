import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Profile from "@/public/jb.jpg";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div style={{ pointerEvents: "none" }} className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hola, <br />
              soy José<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              Soy <span>Full Stack Developer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              He pasado el último año desarrollando y escalando aplicaciones
              para algunas empresas e individuos. También creo proyectos
              personales interesantes en mi tiempo libre. ¡Conectemos!
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            >
              Contáctame
            </StandardButton>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ pointerEvents: "auto" }}
        >
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="Jose Boschero | Frontend Developer"
            width={200}
            height={300}
          />
        </motion.div>
      </div>
      <DotGrid />
    </section>
  );
};
