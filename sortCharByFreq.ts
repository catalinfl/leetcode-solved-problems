function frequencySort(s: string): string {
    const map = new Map<string, number>();
    for (let j of s) {
        map.set(j, map.get(c) + 1 || 1);
    }
    let counter = 0;
    const array = Array.from(map.entries()).map((i) => {
        return (i[0].repeat(i[1]))
    }).sort((a, b) => b.length - a.length);

    return array.join(''); 
};