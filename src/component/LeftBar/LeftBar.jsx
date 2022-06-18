import React from "react"
import style from "./LeftBarCSS/LeftBarStyle.module.scss"
import Logo from "./Logo"
import LeftBarBox from "./LeftBarBox"

const LeftBar = () => {

    return (
        <nav id = "leftBar">
            <Logo/>
            <LeftBarBox/>
        </nav>
    )
}

export default LeftBar