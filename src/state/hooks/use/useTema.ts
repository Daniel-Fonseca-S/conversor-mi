import { useRecoilValue } from "recoil"
import { temaGeral } from "state/atom"

// retorna o conteúdo do átomo de tema.
export default function useTema() {
    return useRecoilValue(temaGeral)
}