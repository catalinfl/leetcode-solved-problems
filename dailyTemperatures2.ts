function dailyTemperatures(temperatures: number[]): number[] {
    var answer: number[] = Array(temperatures.length).fill(0);
    for (let i=0; i<temperatures.length; i++) {
        for (let j=i+1; j<temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                answer[i] = j - i;
                break;
            }
        }
    }
    return answer;    
}