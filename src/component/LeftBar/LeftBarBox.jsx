import React from "react"
import style from "./LeftBarCSS/LeftBarBoxStyle.module.scss"
import LeftBarButtonBox from "./LeftBarButtonBox"

const LeftBarBox = () => {

    return (
        <div className = {style.leftBarBox}>
            <LeftBarButtonBox/>
        </div>
    )
}

export default LeftBarBox