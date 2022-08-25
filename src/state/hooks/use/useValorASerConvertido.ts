import { useRecoilValue } from "recoil"
import { valorASerConvertido } from "state/atom"

// retorna o conteúdo do átomo de valor a ser convertido.
export default function useValorASerConvertido() {
    return useRecoilValue(valorASerConvertido)
}