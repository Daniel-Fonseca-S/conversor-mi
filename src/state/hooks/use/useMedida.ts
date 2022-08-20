import { useRecoilValue } from "recoil"
import { listaDeMedidasState } from "state/atom"

export default function useMedida() {
    return useRecoilValue(listaDeMedidasState)
}