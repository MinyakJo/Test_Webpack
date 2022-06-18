import React from "react"
import style from "./MainCSS/PuzzleStyle.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { puzzleClick } from "../../action/action"
import Img from "../Common/Img"


const Puzzle = (props) => {

    const random = useSelector(state => state.randomList[props.id])
    const src = useSelector(state => state.imgList[random])
    const dispatch = useDispatch()

    const puzzleClickEvent = (event) => {
        const target = event.target.parentNode.id
        dispatch(puzzleClick(parseInt(target)))
    }

    return (
        <div id = {props.id} className = {style.puzzle} name = "puzzle" onClick = {puzzleClickEvent}>
            <Img src = {src}/>
        </div>
    )
}

export default Puzzle