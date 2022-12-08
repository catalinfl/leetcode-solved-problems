export function reverse(x: number): number {
    var signed: number = 0;
    let inv: number=0;
    if (x===0) {
         return 0;
     }
    if (x < 0) {
      x=-x;
      signed=1;
    }
    while (x%10==0) {
      x = x/10;
    }

    while (x!==0) {
      inv = inv*10+x%10;
      x = Math.floor(x/10);
    }
    if (inv > (Math.pow(2, 31) - 1) || inv < (Math.pow(-2, 31))) {
      return 0
    }
    if (signed) {
      return -inv
    }
    return inv
  };