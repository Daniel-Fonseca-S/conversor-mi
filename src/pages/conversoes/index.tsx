import styles from "./Conversoes.module.scss"

export default function Conversoes() {
    return (
        <section className={styles.container}>
            <h1 className={styles.titulo}>Tabela de relação das conversões</h1>

            <table className={styles.tabela}>

                <thead>
                    <tr className={styles.linha}>
                        <th className={styles.right}>Unidade Principal</th>
                        <th>Conversão 1</th>
                        <th className={styles.left}>Conversão 2</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className={styles.linha_al}>
                        <td className={styles.right}>Um Litro</td>
                        <td>33.81 us fl oz</td>
                        <td className={styles.left}>0.26 us gal lqd</td>
                    </tr>

                    <tr className={styles.linha}>
                        <td className={styles.right}>Um Quilo</td>
                        <td>2.20 lb</td>
                        <td className={styles.left}>35.27 oz</td>
                    </tr>

                    <tr className={styles.linha_al}>
                        <td className={styles.right}>Um Metro</td>
                        <td>0.00062mi</td>
                        <td className={styles.left}>3.28 ft</td>
                    </tr>

                    <tr className={styles.linha}>
                        <td className={styles.right}>Zero Grau Celsius</td>
                        <td>°C + 273.15 = 273.15K</td>
                        <td className={styles.left}>(°C × 9/5) + 32 = 32°F</td>
                    </tr>
                </tbody>

            </table>

        </section>
    )
}