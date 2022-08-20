import classNames from "classnames"
import Footer from "components/footer"
import Header from "components/header"
import Conversoes from "pages/conversoes"
import Conversor from "pages/conversor"
import NotFound from "pages/notfound"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import useTema from "state/hooks/use/useTema"
import styles from "./Index.module.scss"

export default function AppRouter() {
    const light_mode = useTema()
    return(
        <main className={classNames({
            [styles.container]: true,
            [styles.container_black]: !light_mode
        })}>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Conversor/>}/>
                    <Route path="/conversoes" element={<Conversoes/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </Router>
        </main>
    )
}