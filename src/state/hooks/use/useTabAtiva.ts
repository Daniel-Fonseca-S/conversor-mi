import { useRecoilValue } from "recoil"
import { tabAtiva } from "state/atom"

export default function useTabAtiva() {
    return useRecoilValue(tabAtiva)
}