import { useSetRecoilState } from "recoil"
import { listaHistorico } from "state/atom"

export default function deletarHistorico() {
    return useSetRecoilState(listaHistorico)    
}