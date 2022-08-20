import { useSetRecoilState } from "recoil"
import { saida } from "state/atom"

export default function useSaida() {
    return useSetRecoilState(saida)
}