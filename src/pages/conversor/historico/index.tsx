import classNames from "classnames"
import deletarHistorico from "state/hooks/delete/deletarHistorico"
import deletarItemHistorico from "state/hooks/delete/deletarItemHistorico"
import useHistorico from "state/hooks/use/useHistorico"
import styles from "./Historico.module.scss"

export default function Historico() {
    const historico = useHistorico()
    const deletar = deletarHistorico()
    const deletarItem = deletarItemHistorico()

    let coloral = true

    return (
        <section className={styles.container}>
            <table className={styles.tabela}>
                <thead>
                    <tr className={styles.linha}>
                        <th className={styles.right}>Unidade Principal</th>
                        <th>Conversão 1</th>
                        <th className={styles.border_left}>Conversão 2</th>
                        <th className={styles.left}>
                            <label className={styles.limpar_historico} onClick={() => deletar(null)} >[apagar]</label>
                        </th>
                    </tr>
                </thead>
                {historico?.map(item => (
                    <tbody key={item.id}>
                        <tr className={classNames({
                            [styles.linha]: !coloral,
                            [styles.linha_al]: coloral
                        })}>
                            <td className={styles.right}>
                                {item.entrada}
                            </td>
                            <td>
                                {item.saidaUm}
                            </td>
                            <td className={styles.border_left}>
                                {item.saidaDois}
                                {coloral = !coloral}
                            </td>
                            <td className={styles.left}>
                                <label className={styles.limpar_historico} onClick={() => deletarItem(item)}>[ x ]</label>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </section >
    )
}