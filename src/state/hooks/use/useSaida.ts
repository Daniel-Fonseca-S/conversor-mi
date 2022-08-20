import { useRecoilValue } from "recoil"
import { saida } from "state/atom"

export default function useSaida() {
    return useRecoilValue(saida)
}