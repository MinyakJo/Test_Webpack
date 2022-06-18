import { COL, PUZZLE_CLICK, RELOAD, TIME } from "../action/action"
import isOnly from "../module/isOnly"

const initState = {
    randomList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    imgList: [],
    col: 4,
    src: "./img/board.jpg",
    time: 0,
    count: 0,
    start: false,
    end: false,
    leftBar: false,
    foldButton: false,
    x3Button: false,
    x4Button: false,
    x5Button: false,
    main: false,
    question: false,
    timer: false
}

const reducer = (state = initState, action) => {
    let randomList = state.randomList
    let col = state.col
    let src = state.src

    switch(action.type){
        case RELOAD:
            //퍼즐 width 바꾸기
            const puzzle = document.getElementsByName("puzzle")
            switch(col){
                case 3:
                    Array.from(puzzle).forEach(element => {
                        element.style.width = "32%"
                        element.style.height = "32%"
                    })
                    break
                case 4:
                    Array.from(puzzle).forEach(element => {
                        element.style.width = "24%"
                        element.style.height = "24%"
                    })
                    break
                case 5:
                    Array.from(puzzle).forEach(element => {
                        element.style.width = "19%"
                        element.style.height = "19%"
                    })
                    break
                default:
                    console.log("Error")
            }

            //이미지 자르기
            const boardImg = new Image()
            boardImg.src = src
        
            const pieceWidth = boardImg.naturalWidth / col
            const pieceHeight = pieceWidth
        
            const pieces = []
        
            const img = new Image()
            img.src = boardImg.src
        
            const canvas = document.createElement("canvas")
            canvas.className = "piece"
            canvas.width = boardImg.width / col
            canvas.height = canvas.width
        
            const context = canvas.getContext("2d")
            
            for(let y = 0; y < col; y++){
                for(let x = 0; x < col; x++){
        
                    if(y == col - 1 && x == 0){
                        context.fillStyle = "white"
                        context.fillRect(0, 0, canvas.width, canvas.height)
                    }else{
                        context.drawImage(img, x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight, 0, 0, canvas.width, canvas.height)
                    }
                    pieces.push(canvas.toDataURL())
                }
            }

            //random 정하기
            const randomIndex = []
            const length = col * col

            randomIndex.length = length

            for(let index = 0; index < length; index++) {
                const randomNumber = Math.floor(Math.random() * length)
                
                if(isOnly(randomNumber, randomIndex)){
                    randomIndex[index] = randomNumber
                }else{
                    index--
                }
            }

            return{
                ...state,
                randomList: randomIndex,
                imgList: pieces,
                start: true,
                time: 0
            }
        case PUZZLE_CLICK:
            state.count = 0

            //누를 시 퍼즐 바꾸기
            const clickId = action.id
    
            let top = clickId - col
            let bottom = clickId + col
            let right = clickId + 1
            let left = clickId - 1
        
            let temp = null
        
            if((randomList[top] == col * (col - 1)) && (top >= 0)){
                temp = randomList[top]
                randomList[top] = randomList[clickId]
                randomList[clickId] = temp
            }else if((randomList[bottom] == col * (col - 1)) && (bottom < col * col)){
                temp = randomList[bottom]
                randomList[bottom] = randomList[clickId]
                randomList[clickId] = temp
            }else if((randomList[right] == col * (col - 1)) && (right % col != 0) && (right < col * col)){
                temp = randomList[right]
                randomList[right] = randomList[clickId]
                randomList[clickId] = temp
            }else if((randomList[left] == col * (col - 1)) && (left % col != col - 1) && (left >= 0)){
                temp = randomList[left]
                randomList[left] = randomList[clickId]
                randomList[clickId] = temp
            }

            //정답인지 아닌지 확인
            state.randomList.forEach((element, index, arr) => { 
                if(element === index){ state.count += 1 }
            })
            
            if(state.count === state.col * state.col){
                state.end = true
                console.log("clear")
            }
            
            return{
                ...state
            }
        case COL:
            return{
                ...state,
                col: action.col
            }
        case TIME:
            return{
                ...state,
                time: state.time + 1
            }
        default:
            return state

    }
}

export default reducer