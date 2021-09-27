import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../provider/GlobalContext";
import Image from "next/image";

import imgAboutOne from "../../public/imgAboutOne.svg";
import imgAboutTwo from "../../public/imgAboutTwo.svg";
import imgAboutThree from "../../public/imgAboutThree.svg";
import styles from "../../styles/Sobre.module.scss";

const Sobre = () => {
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
          <h2>quem sou?</h2>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent
            taciti sociosqu ad litora torquent. Praesent malesuada urna nisi,
            quis volutpat erat hendrerit non. Nam vulputate dapibus. Tá
            deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem
            num gosta di mé, boa gentis num é.
          </p>
          <p>
            Leite de capivaris, leite de mula manquis sem cabeça. Sapien in
            monti palavris qui num significa nadis i pareci latim. Mais vale um
            bebadis conhecidiss, que um alcoolatra anonimis. Posuere libero
            varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet
            nisi.
          </p>
          <div className={styles.images}>
            <Image src={imgAboutOne} alt="Imagem de um envelope aberto" />
            <Image src={imgAboutTwo} alt="Imagem de uma xíxara de café" />
            <Image src={imgAboutThree} alt="Imagem de um símbolo checked" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sobre;
