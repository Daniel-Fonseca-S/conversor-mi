import styles from "./Footer.module.scss"
import { ReactComponent as Sglogo } from "assets/sgclipped-logo.svg"
import InstagramLogo from "assets/instagram-new-2016-logo.png"
import LinkedinLogo from "assets/Linkedin-logo.png"
import GitHubLogo from "assets/GitHub-logo.png"
import classNames from "classnames"
import useTema from "state/hooks/use/useTema"

export default function Footer() {

    const lightMode = useTema()

    return (
        <footer className={classNames({
            [styles.rodape]: true,
            [styles.dark_mode]: !lightMode
        })}>
            <Sglogo aria-label="Logo de Daniel Fonseca, desenvolvedor da página" className={styles.sglogo} />
            <p className={styles.texto_rodape}>
                Todo o conteúdo visual e o código presente nessa página é de autoria de Daniel Fonseca da Silva, com exceção da fonte e logos das redes sociais. A página e seu código pode ser utilizado para fins de estudo, não possui direitos autorais, apenas peço que não use as imagens da página em projetos comerciais.
            </p>
            <div className={styles.redes_sociais}>
                <a href="https://www.instagram.com/daniels_f.silva/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img src={InstagramLogo} alt="logo do Instagram" className={styles.imagens} />
                    <label className={styles.titulo_social}>
                        Instagram
                    </label>
                </a>
                <a href="https://www.linkedin.com/in/daniel-fonseca-da-silva-3b2a23233/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img src={LinkedinLogo} alt="Logo do Linkedin" className={styles.imagens} />
                    <label className={styles.titulo_social}>
                        Linkedin
                    </label>
                </a>
                <a href="https://github.com/Daniel-Fonseca-S" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img src={GitHubLogo} alt="Logo do GitHub" className={styles.imagens} />
                    <label className={styles.titulo_social}>
                        GitHub
                    </label>
                </a>
            </div>
        </footer>
    )
}