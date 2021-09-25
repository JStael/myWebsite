import Link from "next/link";
import nextjsLight from "../../public/nextjs_light.svg";
import nextjsDark from "../../public/nextjs_dark.svg";
import Image from "next/image";
import styles from "../../styles/Footer.module.scss";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../provider/GlobalContext";

const Footer = () => {
  const context = useContext(GlobalContext);

  const [appTheme, setAppTheme] = useState();

  let theme = appTheme == "light" ? `${styles["light"]}` : `${styles["dark"]}`;

  useEffect(() => {
    setAppTheme(context.globalTheme);
  }, [context.globalTheme]);

  return (
    <footer className={theme}>
      <div className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} | Desenvolvido com&nbsp;&nbsp;
          <Link href={"https://nextjs.org/"}>
            <a target="_blank">
              <Image
                src={appTheme == "light" ? nextjsLight : nextjsDark}
                alt="Logo NextJs"
              />
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
