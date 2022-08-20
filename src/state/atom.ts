import { atom } from "recoil"
import itemHistorico from "utils/interfaces/itemHistorico"
import { Medida } from "utils/interfaces/medida"
import { Resposta } from "utils/interfaces/respostas"

export const listaDeMedidasState = atom<Medida[]>({
    key: "listaDeMedidasState",
    default: [
        {
            id: 1,
            nome: "litro",
            conversaoX: "us gal",
            conversaoY: "us fl oz"
        },
        {
            id: 2,
            nome: "metro",
            conversaoX: "mi",
            conversaoY: "ft"
        },
        {
            id: 3,
            nome: "quilo",
            conversaoX: "lb",
            conversaoY: "oz"
        },
        {
            id: 4,
            nome: "°C",
            conversaoX: "°F",
            conversaoY: "K"
        }
    ]

})

export const valorASerConvertido = atom<number | null>({
    key: "valorASerConvertido",
    default: null
})

export const tabAtiva = atom<number>({
    key: "tabAtiva",
    default: 1
})

export const saida = atom<Resposta>({
    key: "saida",
    default: {
        conversaoX: null,
        conversaoY: null
    }
})

export const listaHistorico = atom<itemHistorico[] | null>({
    key: "listaHistorico",
    default: null
})

export const temaGeral = atom<boolean>({
    key: "temaGeral",
    default: true
})