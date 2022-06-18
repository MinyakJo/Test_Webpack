import React from "react"
import style from "./MainCSS/PuzzleBoxStyle.module.scss"
import Img from "../Common/Img"
import H2 from "../Common/H2"
import Puzzle from "./Puzzle"
import { useSelector } from "react-redux"

const PuzzleBox = (props) => {

    const col = useSelector(state => state.col)
    const newList = []

    for(let i = 0; i < col*col; i++){
        newList.push(i)
    }

    if(props.question){
        return (
            <div id = {style.question} className = {style.puzzleBox} name = "question">
                <H2 text="Question"/>
                {
                    newList.map(element => <Puzzle key = {element} id = {element}/>)
                }
            </div>
        )
    }
    else{
        return (
            <div id = {style.answer} className = {style.puzzleBox} name = "answer">
                <H2 text="Answer"/>
                <Img src = "./img/board.jpg"/>
            </div>
        )
    }
}

export default PuzzleBox