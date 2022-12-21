const possibleBipartition = (n: number, dislikes: number[][]) => {
    const group = new Array(n+1).fill(0);
    const graph = new Array(n+1).fill(undefined).map((_) => []);
  
  
    for (const [personOne, personTwo] of dislikes) {
      graph[personOne].push(personTwo as number);
      graph[personTwo].push(personOne as number);
    }
  
  
    for (let person = 1; person <= n; person++) {
      if (group[person] !== 0) continue;
      group[person] = 1;
      const queue = [person]
      while (queue.length > 0) {
        const len = queue.length;
        for (let i=0; i<len; i++) {
          const curr = queue.shift();
          for (const child of graph[curr]) {
            console.log(child)
            if (group[child] === group[curr]) {
              return false;
            }
            if (group[child] === 0) {
              group[child] = -group[curr];
              queue.push(child);
            }
          }
        }
      }
    }
    return true;
  } 