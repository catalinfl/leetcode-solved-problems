function numTilings(n: number): number {
    const mod = 10e8 + 7;
    const p: number[] = [1, 1, 2,];
    for (let i = 3; i <= n; i++) {
      p.push(((p[i - 1] << 1) + p[i - 3]) % mod);
    }
    return p[n];
  };