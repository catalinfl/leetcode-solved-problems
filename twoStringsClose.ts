const closeStrings = (word1: string, word2: string): boolean => {
    if (word1.length !== word2.length) return false;
    
    const firstWord = new Map<string, number>();
    const secondWord = new Map<string, number>();

    for (let i=0; i<word1.length; i++) {
      firstWord.set(word1[i], (firstWord.get(word1[i]) || 0) + 1);
      secondWord.set(word2[i], (secondWord.get(word2[i]) || 0) + 1);
    }
    
    for (const key of firstWord.keys()) {
      if (!secondWord.has(key)) return false;
    }

    const s1 = [...firstWord.values()].sort((a, b) => a-b).toString();
    const s2 = [...secondWord.values()].sort((a, b) => a-b).toString();

    return s1 === s2;
  }