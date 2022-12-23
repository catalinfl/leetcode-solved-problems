function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
    let graph: number[][] = [];
    let answer: number[] = [];
    let count: number[] = [];
  
    for (let i=0; i<n; i++) {
      graph.push([] as number[]) ;
      count.push(1);
      answer.push(0);
    }
  
    for (let edge of edges) {
      graph[edge[0]].push(edge[1]);
      graph[edge[1]].push(edge[0]);
    }
  
  
    depthFirstSearch(0, -1);
    console.log(answer)
    depthFirstSearch2(0, -1);
    console.log(answer);
  
    return answer;
  
  
    function depthFirstSearch(node: number, parent: number) { 
      for (let child of graph[node]) {
        if (child !== parent) {
          depthFirstSearch(child, node);
          count[node] = count[node] + count[child];
          answer[node] = answer[node] + answer[child] + count[child];
        }
      }
    }
  
  
    function depthFirstSearch2(node: number, parent: number) {
      for (let child of graph[node]) {
        if (child !== parent) {
          answer[child] = answer[node] - count[child] + n - count[child];
          depthFirstSearch2(child, node);
        }
      }
    }
  };