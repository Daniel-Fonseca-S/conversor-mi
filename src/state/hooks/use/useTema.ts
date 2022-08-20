import { useRecoilValue } from "recoil"
import { temaGeral } from "state/atom"

export default function useTema() {
    return useRecoilValue(temaGeral)
}