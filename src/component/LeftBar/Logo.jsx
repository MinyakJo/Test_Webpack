import React from "react"
import style from "./LeftBarCSS/LogoStyle.module.scss"
import Img from "../Common/Img"
import H1 from "../Common/H1"

const Logo = () => {

    return (
        <div id={style.logo}>
            <Img src= "./img/logo2.png"/>
            <H1 id = "logoText" text="Puzzle"/>
        </div>
    )
}

export default Logo