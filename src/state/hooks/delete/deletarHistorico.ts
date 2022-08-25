import { useSetRecoilState } from "recoil"
import { listaHistorico } from "state/atom"

// retorna a base do átomo de histórico para definir seu valor. Ao receber nulo apaga o histórico completamente.
export default function deletarHistorico() {
    return useSetRecoilState(listaHistorico)    
}