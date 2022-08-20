import styles from "./NotFound.module.scss"
import Image from "assets/not-found.png"

export default function NotFound() {
    return (
        <div className={styles.container}>
            <img src={Image} alt="Imagem de erro 404, Caminho não encontrado!" className={styles.imagem}/>
        </div>
    )
}