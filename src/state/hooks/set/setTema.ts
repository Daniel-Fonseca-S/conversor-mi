import { useSetRecoilState } from "recoil"
import { temaGeral } from "state/atom"

export default function setTema() {
    return useSetRecoilState(temaGeral)
}