import { useSetRecoilState } from "recoil"
import { tabAtiva } from "state/atom"

export default function setTabAtiva() {
    return useSetRecoilState(tabAtiva)
}