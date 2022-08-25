import { useSetRecoilState } from "recoil"
import { valorASerConvertido } from "state/atom"

// permite definir o conteúdo do átomo do valor que será convertido.
const setValorASerConvertido= () => {
    return useSetRecoilState(valorASerConvertido)
}

export default setValorASerConvertido