import { RecoilRoot } from "recoil"
import Router from "./Routes"

function App() {
    return (
        <div className="App">
            <RecoilRoot>
                <Router />
            </RecoilRoot>
        </div>
    )
}

export default App
