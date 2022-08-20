import styles from "components/header/Header.module.scss"
import { Link } from "react-router-dom"
import favicon from "assets/favicon.png"
import logo from "assets/conversor-logo.png"
import moon from "assets/Moon.png"
import sun from "assets/Sun.png"
import mudarTema from "utils/functions/mudarTema"
import classNames from "classnames"
import useTema from "state/hooks/use/useTema"
import setTema from "state/hooks/set/setTema"

export default function Header() {

    const darkMode = useTema()
    const setDarkMode = setTema()

    return (
        <header className={styles.cabecalho}>
            <nav className={styles.cabecalho__navbar}>
                <div className={styles.itens}>
                    <img src={favicon} alt="favicom MI" className={styles.favicon} />
                    <img src={logo} alt="Logo da Conversor-MI" className={styles.logo}/>
                    <Link to={"/"} className={styles.links}>conversor</Link>
                    <Link to={"/conversoes"} className={styles.links}>conversões</Link>
                </div>
                <div className={styles.tema} onClick={() => mudarTema(setDarkMode, darkMode)}>
                    <img src={moon} alt="Botão de tema escuro" className={classNames({
                        [styles.imagem_tema]: true,
                        [styles.disable]: !darkMode
                    })}/>
                    <img src={sun} alt="Botão de tema claro" className={classNames({
                        [styles.imagem_tema]: true,
                        [styles.disable]: darkMode
                    })}/>
                </div>
            </nav>
        </header>
    )
}