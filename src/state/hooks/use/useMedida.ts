import { useRecoilValue } from "recoil"
import { listaDeMedidasState } from "state/atom"

// retorna o conteúdo do átomo de medidas.
export default function useMedida() {
    return useRecoilValue(listaDeMedidasState)
}