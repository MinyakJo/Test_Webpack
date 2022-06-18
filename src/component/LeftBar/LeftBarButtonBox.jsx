import React from "react"
import style from "./LeftBarCSS/LeftBarButtonBoxStyle.module.scss"
import Button from "../Common/Button"

const LeftButtonBox = () => {

    return (
        <div className = {style.leftButtonBox}>
            <Button id = "x3Button" src = "./img/3x3.png"/>
            <Button id = "x4Button" src = "./img/4x4.png"/>
            <Button id = "x5Button" src = "./img/5x5.png"/>
            <Button id ="startButton" src= "./img/startButton.png"/>
        </div>
    )
}

export default LeftButtonBox