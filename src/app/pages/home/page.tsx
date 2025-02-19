import { NextPage } from "next";
import styles from "./home.module.css";
import FullScreenVideo from "@/app/components/video/FullScreenVideo";
import CardEvento from "@/app/components/CardEvento/CardEvento";

const Home: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.carouselContainer}>
        <FullScreenVideo />
      </div>

      <div className={styles.title}>
        <h1> Proximo Evento </h1>
      </div>

      <CardEvento
        name="Evento Doido "
        review=" Evento muito bom requisito para open bar, certificado do Caps "
        star={5}
        photoService={["/images/albumExemplo.jpg"]}
        eventLink="/eventos/evento-doido"
      />

      <div className={styles.title}>
        <h1> Musicas </h1>
      </div>
    </div>
  );
};

export default Home;
