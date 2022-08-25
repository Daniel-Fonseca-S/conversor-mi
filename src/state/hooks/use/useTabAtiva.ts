import { useRecoilValue } from "recoil"
import { tabAtiva } from "state/atom"

// retorna o conteúdo do átomo de tab.
export default function useTabAtiva() {
    return useRecoilValue(tabAtiva)
}