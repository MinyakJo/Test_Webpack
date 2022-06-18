import React from "react"
import style from "./LeftBarCSS/FoldButtonBoxStyle.module.scss"
import Button from "../Common/Button"

const FoldButtonBox = () => {
     
    return (
        <div id = {style.foldButtonBox} className = "foldButtonBox">
            <Button id = "foldButton" src = "./img/backLightBrown.png"/>
        </div>
    )
}

export default FoldButtonBox