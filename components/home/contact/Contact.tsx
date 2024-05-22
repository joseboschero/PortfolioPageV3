import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contacto<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Tienes alguna idea para discutir? Envíame un email si quieres
            conectar! También puedes encontrarme en{" "}
            <Link
              href="https://www.linkedin.com/in/joseboschero/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            o{" "}
            <Link
              href="https://github.com/joseboschero"
              target="_blank"
              rel="nofollow"
            >
              Github
            </Link>{" "}
            .
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:joseboscherodev@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>Enviar mail</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
