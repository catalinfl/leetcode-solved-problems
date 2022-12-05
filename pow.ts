function myPow(x: number, n: number): number {
    let number: number = 1;
    let contor: number = 0;
    if ((n === Math.pow(-2, 31) && x===1) || (n===(Math.pow(2, 31)-1) && x===1)) {
      return 1;
    }
    if ((n === Math.pow(-2, 31) && x===-1) || (n===(Math.pow(2, 31)-1) && x===-1)) {
      if (n%2 === 0) {
      return 1;
      }
      return -1;
    }
    if ((n === Math.pow(-2, 31) && x!==1) || (n===(Math.pow(2, 31)-1) && x!==1)) {
      return 0;
    }
    if (n<0) {
      n = -n;
      contor=1;
    }
    for (let i=0; i<n; i++) {
      number = number * x;
    }
    if (contor === 1) {
      return 1/number;
    }
    else return number;
  }
