



const DateCal = (date:any) => {

    const start = new Date(date);
    const end = new Date(); // 현재 날짜
    
    const diff = (end.getTime() - start.getTime()); // 경과 시간

    const times = [
        {time: "분", milliSeconds: 1000 * 60},
        {time: "시간", milliSeconds: 1000 * 60 * 60},
        {time: "일", milliSeconds: 1000 * 60 * 60 * 24},
        {time: "달", milliSeconds: 1000 * 60 * 60 * 24 * 30},
        {time: "년", milliSeconds: 1000 * 60 * 60 * 24 * 365},
    ].reverse();

    var result = "";
    
    for (const value of times) {
        const betweenTime = Math.floor(diff / value.milliSeconds);
            
        // 큰 단위는 0보다 작은 소수 단위 나옴
        if (betweenTime > 0) {
            return `${betweenTime}${value.time} 전`;
        }
    }
    // 모든 단위가 맞지 않을 시
    return "방금 전";
    

}



export default DateCal;