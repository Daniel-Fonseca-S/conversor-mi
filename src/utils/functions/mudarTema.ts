import { SetterOrUpdater } from "recoil"

export default function mudarTema(set: SetterOrUpdater<boolean>, mode: boolean) {
    set(!mode)
}