import { useRecoilValue } from "recoil"
import { listaHistorico } from "state/atom"

export default function useHistorico() {
    return useRecoilValue(listaHistorico)
}