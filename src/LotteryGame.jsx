import { useState } from "react"

export default function LotteryGame() {
    let [ticket, setTicket] = useState(null);
    let [digitSum, setDigitSum] = useState(null);

    let genreateNumberAndSum = () =>{
        let num = Math.floor(Math.random() * (999 - 100) + 100); // 3 -digit number
        let sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        setTicket(num);
        setDigitSum(sum)
    }
    return(
        <div>
            {digitSum == 15 ? <h1>Congratulations You Won!</h1> : <h1>Lottery</h1>}
            <p>Lottery Ticket = <span>{ticket}</span></p>
            <button onClick={genreateNumberAndSum}>Get New Ticket</button>
        </div>
    )
}