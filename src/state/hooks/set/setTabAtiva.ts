import { useSetRecoilState } from "recoil"
import { tabAtiva } from "state/atom"

// permite definir o conteúdo do átomo de tab.
export default function setTabAtiva() {
    return useSetRecoilState(tabAtiva)
}