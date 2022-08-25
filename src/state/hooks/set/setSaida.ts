import { useSetRecoilState } from "recoil"
import { saida } from "state/atom"

// permite definir o conteúdo do átomo de saída.
export default function useSaida() {
    return useSetRecoilState(saida)
}