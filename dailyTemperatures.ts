function dailyTemperatures(temperatures: number[]): number[] {
    var stack: number[] = [];
    let ans: Array<number> = new Array<number>(temperatures.length).fill(0);
    for (let i=0; i<temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]) {
            let index = stack[stack.length - 1];
            ans[index] = i - stack.pop();
        }
        stack.push(i);
    }
    return ans;
};