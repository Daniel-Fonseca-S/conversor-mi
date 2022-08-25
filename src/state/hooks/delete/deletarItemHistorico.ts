import { useSetRecoilState } from "recoil"
import { listaHistorico } from "state/atom"
import itemHistorico from "utils/interfaces/itemHistorico"

// deleta um item do átomo do histórico, filtrando a lista sem o item recebido como parâmetro, e definindo o histórico com a nova lista.
export default function deletarItemHistorico() {
    const setLista = useSetRecoilState<itemHistorico[] | null>(listaHistorico)
    return (item: itemHistorico) => {
        return setLista(listaAntiga => listaAntiga? listaAntiga.filter(itm => itm.id !== item.id) : null)
    }
}