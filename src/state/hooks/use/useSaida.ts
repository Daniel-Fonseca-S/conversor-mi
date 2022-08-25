import { useRecoilValue } from "recoil"
import { saida } from "state/atom"

// retorna o conteúdo do átomo de saída.
export default function useSaida() {
    return useRecoilValue(saida)
}