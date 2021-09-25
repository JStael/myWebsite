import Link from "next/link";
import nextjsLight from "../../public/nextjs_light.svg";
import Image from "next/image";
import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} | Desenvolvido com&nbsp;
        <Link href={"https://nextjs.org/"}>
          <a target="_blank">
            <Image src={nextjsLight} alt="Logo NextJs" />
          </a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
