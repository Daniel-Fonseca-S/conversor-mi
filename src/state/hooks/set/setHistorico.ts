import { useSetRecoilState } from "recoil"
import { listaHistorico } from "state/atom"
import itemHistorico from "utils/interfaces/itemHistorico"

// permite adicionar um novo item recebido por parâmetro ao átomo de histórico, sendo vazio ou já existente.
export default function setHistorico() {
    const setLista = useSetRecoilState<itemHistorico[] | null>(listaHistorico)
    return (item: itemHistorico) => {
        return setLista(listaAntiga => listaAntiga ? [...listaAntiga, item]: [item])
    }
}