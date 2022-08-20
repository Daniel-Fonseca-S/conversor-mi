import { useSetRecoilState } from "recoil"
import { listaHistorico } from "state/atom"
import itemHistorico from "utils/interfaces/itemHistorico"

export default function setHistorico() {
    const setLista = useSetRecoilState<itemHistorico[] | null>(listaHistorico)
    return (item: itemHistorico) => {
        return setLista(listaAntiga => listaAntiga ? [...listaAntiga, item]: [item])
    }
}