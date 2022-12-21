function canVisitAllRooms(rooms: number[][]): boolean {
    const keys = new Array(rooms.length).fill(0);
    const stack = [0];
  
    while (stack.length > 0) {
      const i = stack.pop() as number;
      keys[i] = 1;
      if (rooms[i].length > 0) {
        stack.push(...rooms[i]);
        rooms[i] = [];
      }
      console.log(stack)
    }
  
  
    return !keys.some((key) => key === 0);
  }
  
  
  