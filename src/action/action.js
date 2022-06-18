
export const RELOAD = "RELOAD"
export const PUZZLE_CLICK = "PUZZLE_CLICK"
export const COL = "COL"
export const TIME = "TIME"

const reload = () => {
    return {
        type: RELOAD
    }
}
const puzzleClick = (id) => {
    return {
        type: PUZZLE_CLICK,
        id: id
    }
}
const setCol = (column) => {
    return {
        type: COL,
        col: column
    }
}
const setTime = () => {
    return{
        type: TIME
    }
}


export { reload, puzzleClick, setCol, setTime }