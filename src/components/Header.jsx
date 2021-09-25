import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../provider/GlobalContext";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";
import twitter from "../../public/twitter.svg";
import lightTheme from "../../public/lightTheme.svg";
import darkTheme from "../../public/darkTheme.svg";

import styles from "../../styles/Header.module.scss";

const Header = () => {
  const context = useContext(GlobalContext);
  const [appTheme, setAppTheme] = useState();

  let theme = appTheme == "light" ? `${styles["light"]}` : `${styles["dark"]}`;

  useEffect(() => {
    setAppTheme(context.globalTheme);
  }, [context.globalTheme]);

  const router = useRouter();

  const [menu, setMenu] = useState(false);
  const contClassnameTBar = menu
    ? `${styles["checked"]} ${styles.menu_t_bar}`
    : styles.menu_t_bar;

  const contClassnameBar = menu
    ? `${styles["checked"]} ${styles.menu_bar}`
    : styles.menu_bar;

  const contClassnameBBar = menu
    ? `${styles["checked"]} ${styles.menu_b_bar}`
    : styles.menu_b_bar;

  const contClassnameBackgd = menu ? `${styles.menu_background}` : `${""}`;

  const contClassnameLinks = menu ? `${""}` : styles.removed;
  const contClassnameTitle = menu ? styles.invisible : `${""}`;

  function changeTheme() {
    switch (appTheme) {
      case "light":
        context.setGlobalTheme("dark");
        setAppTheme("dark");
        break;
      case "dark":
        context.setGlobalTheme("light");
        setAppTheme("light");
        break;
    }
  }

  return (
    <div className={`${theme}`} style={{ width: "100%" }}>
      <header className={`${styles.header} ${contClassnameBackgd}`}>
        <h2 className={`${styles.brand} ${contClassnameTitle}`}>JS</h2>
        <div className={styles.btn_wrapper} onClick={() => setMenu(!menu)}>
          <span className={contClassnameTBar}></span>
          <span className={contClassnameBar}></span>
          <span className={contClassnameBBar}></span>
        </div>
        <nav className={`${styles.container_menu} ${contClassnameLinks}`}>
          <ul>
            <li>
              <button className={styles.btn_theme} onClick={changeTheme}>
                <Image src={appTheme == "light" ? lightTheme : darkTheme} />
              </button>
            </li>
            <li onClick={() => router.push("/sobre")}>Sobre</li>
            <li onClick={() => router.push("/portfolio")}>Portfólio</li>
            <li>
              <Link href={"mailto:joaostael@gmail.com"}>Contato</Link>
            </li>
          </ul>
          <ul className={styles.social}>
            <li>
              <Link href={"https://github.com/JStael"}>
                <a target="_blank">
                  <Image src={github} />
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/jo%C3%A3o-stael/"}
                target="_blank"
              >
                <a target="_blank">
                  <Image src={twitter} />
                </a>
              </Link>
            </li>
            <li>
              <Link href={"https://twitter.com/JPStael"}>
                <a target="_blank">
                  <Image src={linkedin} />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
