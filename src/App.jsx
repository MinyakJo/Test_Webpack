import React from "react"
import style from "./PublicStyle.module.scss"
import LeftBar from "./component/LeftBar/LeftBar"
import Main from "./component/Main/Main"
import FoldButtonBox from "./component/LeftBar/FoldButtonBox"

const App = () => {

    return (
            <React.Fragment>
                <LeftBar/>
                <FoldButtonBox/>
                <Main/>
            </React.Fragment>
        )
}

export default App