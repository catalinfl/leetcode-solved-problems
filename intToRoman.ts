function intToRoman(num: number): string {
    const symbols = [
      {
        roman: 'M',
        val: 1000
      },
      {
        roman: 'CM',
        val: 900
      },
      {
        roman: 'D',
        val: 500
      },
      {
        roman: 'CD',
        val: 400
      },
      {
        roman: 'C',
        val: 100
      },
      {
        roman: 'XC',
        val: 90
      },
      {
        roman: 'L',
        val: 50
      },
      {
        roman: 'XL',
        val: 40
      },
      {
        roman: 'X',
        val: 10
      },
      {
        roman: 'IX',
        val: 9
      },
      {
        roman: 'V',
        val: 5
      },
      {
        roman: 'IV',
        val: 4
      },
      {
        roman: 'I',
        val: 1
      }
    ];

    let string: string = "";
    let i = 0;
    while (num > 0) {
      if (num >= symbols[i].val) {
        string+= symbols[i].roman
        num -= symbols[i].val;
      } else i++;
    }
    return string;
 }
