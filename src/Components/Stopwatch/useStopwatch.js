import {useState} from 'react'
function useTimer(defualtTime, timer){
    const [count, setCount] = useState(defualtTime)
    function resume(){
        setCount(count+1)
        clearInterval(timer)
        console.log("sknsk")
    }
    function stop(){
        clearInterval(timer)
        setCount(0)
    }
    function pause(){
        clearInterval(timer)
    }
    return [count, resume, stop, pause]
}
export default useTimer;