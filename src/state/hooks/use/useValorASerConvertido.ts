import { useRecoilValue } from "recoil"
import { valorASerConvertido } from "state/atom"

export default function useValorASerConvertido() {
    return useRecoilValue(valorASerConvertido)
}