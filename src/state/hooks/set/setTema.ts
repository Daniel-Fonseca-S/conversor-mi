import { useSetRecoilState } from "recoil"
import { temaGeral } from "state/atom"

// permite definir o conteúdo do átomo de tema.
export default function setTema() {
    return useSetRecoilState(temaGeral)
}