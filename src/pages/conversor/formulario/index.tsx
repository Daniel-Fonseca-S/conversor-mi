import classNames from "classnames"
import setHistorico from "state/hooks/set/setHistorico"
import setSaida from "state/hooks/set/setSaida"
import setTabAtiva from "state/hooks/set/setTabAtiva"
import setValorASerConvertido from "state/hooks/set/setValorASerConvertido"
import useMedida from "state/hooks/use/useMedida"
import useSaida from "state/hooks/use/useSaida"
import useTabAtiva from "state/hooks/use/useTabAtiva"
import useValorASerConvertido from "state/hooks/use/useValorASerConvertido"
import itemHistorico from "utils/interfaces/itemHistorico"
import { Resposta } from "utils/interfaces/respostas"
import styles from "./Formulario.module.scss"

/* eslint-disable indent */

export default function Formulario() {
    //aramazena os hooks importados de solicitação e definição respectivamente.
    // uses
    const medidas = useMedida()
    const valorAConverter = useValorASerConvertido()
    const tab = useTabAtiva()
    const resultado = useSaida()
    // sets
    const setValor = setValorASerConvertido()
    const setTab = setTabAtiva()
    const setResultado = setSaida()
    const setH = setHistorico()
    // buffers temporários para enviar os dados para a saída do formulário e para o átomo do historico respectivamente.
    const resposta: Resposta = { conversaoX: null, conversaoY: null }
    const itemH: itemHistorico = { id: null, entrada: null, saidaUm: null, saidaDois: null }
    // abstração de expressões em constantes, para exibir dinamicamente os textos de medidas selecionadas por toda a rota.
    const nomeTab = medidas.find(medida => medida.id === tab)?.nome
    const unidadeDeMedidaX = medidas.find(medida => medida.id === tab)?.conversaoX
    const unidadeDeMedidaY = medidas.find(medida => medida.id === tab)?.conversaoY

    // função que altera a aba (tab) selecionada.
    function mudaTab(numero: number) {
        // define o estado da tab com o numero recebido
        setTab(numero)
        // apaga a saida de dados.
        resposta.conversaoX = null
        resposta.conversaoY = null
        // salva a saida limpa no estado.
        setResultado(resposta)
    }
    // função chamada na submissão do formulário.
    const submeter = (evento: React.FormEvent<HTMLFormElement>) => {
        // previne recarremento da página pela submissão do formulário
        evento.preventDefault()
        // verifica se a entrada de dados é nula.
        if (valorAConverter !== null) {
            console.log(valorAConverter)
            // verifica se o valor é negativo para distância ou volume antes da conversão.
            if (valorAConverter < 0 && tab !== 4) {
                alert("Volume nem distância podem assumir valores negativos")
            }
            else {
                // calcula a conversão de acordo com a tab selecionada e armazena no buffer.
                switch (tab) {
                    case 1:
                        resposta.conversaoX = +(valorAConverter * 4.54609).toFixed(4)
                        resposta.conversaoY = +(valorAConverter * 33.81).toFixed(4)
                        break

                    case 2:
                        resposta.conversaoX = +(valorAConverter * 0.000621371).toFixed(4)
                        resposta.conversaoY = +(valorAConverter * 3.28084).toFixed(4)
                        break

                    case 3:
                        resposta.conversaoX = +(valorAConverter * 2.20462).toFixed(4)
                        resposta.conversaoY = +(valorAConverter * 35.274).toFixed(4)
                        break

                    case 4:
                        resposta.conversaoX = +(32 + (valorAConverter * 9 / 5)).toFixed(4)
                        resposta.conversaoY = +(valorAConverter + 273.15).toFixed(4)
                        break

                    default:
                        alert("Erro inesperado!")
                        break
                }
                // define o estado do resultado enviando para o hook a resposta calculada.
                setResultado(resposta)
                // armazena no buffer os elementos do histórico.
                itemH.id = Math.floor(Date.now() * Math.random()).toString(36)
                itemH.entrada = (valorAConverter) + " " + nomeTab + `${(valorAConverter === 1 || tab === 4) ? "" : "s"}`
                itemH.saidaUm = (resposta.conversaoX) + " " + unidadeDeMedidaX
                itemH.saidaDois = (resposta.conversaoY) + " " + unidadeDeMedidaY
                // define o estado do historico enviando o buffer para o hook.
                setH(itemH)
            }
        }
        else {
            alert("O campo de entrada deve estar preenchido!")
        }
    }

    return (
        <section className={styles.container}>
            {/* quando cada tab é clicada, chama a função de mudar a tab, alterando o estilo de acordo. */}
            <div className={styles.tabs}>
                <button onClick={() => mudaTab(1)} className={classNames({
                    [styles.tab]: true,
                    [styles.tab_ativa]: tab === 1
                })}>Litro</button>

                <button onClick={() => mudaTab(2)} className={classNames({
                    [styles.tab]: true,
                    [styles.tab_ativa]: tab === 2
                })}>Metro</button>

                <button onClick={() => mudaTab(3)} className={classNames({
                    [styles.tab]: true,
                    [styles.tab_ativa]: tab === 3
                })}>Quilo</button>

                <button onClick={() => mudaTab(4)} className={classNames({
                    [styles.tab]: true,
                    [styles.tab_ativa]: tab === 4
                })}>Celsius</button>
            </div>
            {/* ao submeter, o formulário chama a função submeter. */}
            <form className={styles.formulario} onSubmit={submeter}>
                <div className={styles.entrada}>
                    <h2 className={styles.titulo}>Entrada</h2>
                    <input
                        aria-label="Entrada do valor a ser convertido"
                        type="number"
                        step="any"
                        required={true}
                        className={styles.input}
                        placeholder={`Unidade Selecionada: ${nomeTab}`}
                        // define o estado do valor a ser convertido como um número, ou como null se o cursor apagar o input por completo.
                        onChange={(evt) => setValor(() => { return evt.target.value !== "" ? evt.target.valueAsNumber : null })}
                    />
                    {/* botão que submete o formulário. */}
                    <button type="submit" className={styles.converter}>Converter</button>
                </div>
                <div className={styles.saida}>
                    <h2 className={styles.titulo}>Saída</h2>
                    <div className={styles.output}>
                        <div className={styles.containerX}>
                            <h3>
                                {`${unidadeDeMedidaX}:`}
                            </h3>
                            <div className={styles.resultado}>{resultado.conversaoX}</div>
                        </div>
                        <div className={styles.containerY}>
                            <h3>
                                {`${unidadeDeMedidaY}:`}
                            </h3>
                            <div className={styles.resultado}>{resultado.conversaoY}</div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}