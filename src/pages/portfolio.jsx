import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../provider/GlobalContext";
import Link from "next/link";
import Image from "next/image";
import arrowPortfolio from "../../public/arrowPortfolio.svg";
import fastLogo from "../../public/fastLogo.png";

import styles from "../../styles/Portfolio.module.scss";

const Portfolio = () => {
  const context = useContext(GlobalContext);

  const [appTheme, setAppTheme] = useState();

  let theme = appTheme == "light" ? `${styles["light"]}` : `${styles["dark"]}`;

  useEffect(() => {
    setAppTheme(context.globalTheme);
  }, [context.globalTheme]);

  return (
    <div className={theme}>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.arrowPortfolio}>
            <Image src={arrowPortfolio} alt="Seta indicando o portfólio" />
          </div>
          <h2>o que já fiz?</h2>
          <div className={styles.card}>
            <Link href={"http://fastmalhas.com.br"}>
              <a target="_blank">
                <div className={styles.cardImg}>
                  <Image src={fastLogo} alt="Logo FastMalhas" />
                </div>
                <p>FastMalhas</p>
              </a>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
