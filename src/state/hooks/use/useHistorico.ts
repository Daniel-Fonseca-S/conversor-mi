import { useRecoilValue } from "recoil"
import { listaHistorico } from "state/atom"

// retorna o conteúdo do átomo de histórico.
export default function useHistorico() {
    return useRecoilValue(listaHistorico)
}