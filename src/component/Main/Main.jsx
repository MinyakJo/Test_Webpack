import React from "react"
import style from "./MainCSS/MainStyle.module.scss"
import Button from "../Common/Button"
import Timer from "./Timer"
import PuzzleBox from "./PuzzleBox"


const Main = () => {

    return (
        <main id = "main">
            <PuzzleBox question/>
            <Timer/>
            <PuzzleBox answer/>
            <Button id = "resetButton" src = "./img/reload.png"/>
        </main>
    )
}

export default Main