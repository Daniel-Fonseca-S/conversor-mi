import { useSetRecoilState } from "recoil"
import { valorASerConvertido } from "state/atom"
const setValorASerConvertido= () => {
    return useSetRecoilState(valorASerConvertido)
}

export default setValorASerConvertido