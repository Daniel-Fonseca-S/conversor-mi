import classNames from "classnames"
import deletarHistorico from "state/hooks/delete/deletarHistorico"
import deletarItemHistorico from "state/hooks/delete/deletarItemHistorico"
import useHistorico from "state/hooks/use/useHistorico"
import styles from "./Historico.module.scss"

export default function Historico() {
    //armazenando funções importadas de definição e deleção do histórico.
    const historico = useHistorico()
    const deletar = deletarHistorico()
    const deletarItem = deletarItemHistorico()
    //variável local de controle para alternar a cor das linhas da tabela de histórico.
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
                            {/* quando clicado chama o hook de deletar o histórico, passando como parâmetro o valor nulo */}
                            <label className={styles.limpar_historico} onClick={() => deletar(null)} >[apagar]</label>
                        </th>
                    </tr>
                </thead>
                {/* mapeia cada item salvo no histórico para uma linha */}
                {historico?.map(item => (
                    <tbody key={item.id}>
                        <tr className={classNames({
                            // define se a linha será clara ou escura usando a variável de controle para ativar ou desativar uma classe
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
                                {/* inverte o valor da variável de controle em cada linha mapeada */}
                                {coloral = !coloral}
                            </td>
                            <td className={styles.left}>
                                {/* quando clicado chama o hook de deletar um item do histórico, passando esse item como parâmetro */}
                                <label className={styles.limpar_historico} onClick={() => deletarItem(item)}>[ x ]</label>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </section >
    )
}