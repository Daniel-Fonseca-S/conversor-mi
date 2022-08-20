import styles from "./Conversor.module.scss"
import Formulario from "./formulario"
import Historico from "./historico"

export default function Conversor() {
    return(
        <main className={styles.container}>
            <h1 className={styles.titulo}>Conversor de medidas</h1>
            <Formulario />
            <hr className={styles.divisor} />
            <h1 className={styles.titulo}>Histórico</h1>
            <Historico />
        </main>
    )
}