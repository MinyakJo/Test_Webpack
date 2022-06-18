

const isOnly = (randomNumber, randomList) => {
    for(let i = 0; i < randomList.length; i++) {
        if(randomNumber == randomList[i]){
            return false
        }
    }
    return true
}

export default isOnly