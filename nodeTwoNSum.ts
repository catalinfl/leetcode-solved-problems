function reverseString(s: string) {
    return s.split("").reverse().join("");
  }

  function nodeToString(n: ListNode | null) {
    let result: string = ""
    let nodCrt: ListNode | null = n;
    while (nodCrt !== null) {
      result = result + nodCrt.val;
      nodCrt = nodCrt.next;
    }
    return result;
  }

  function stringToNode(s: string): ListNode | null {
    let head: ListNode | null = null;
    let tail: ListNode | null = null;
    function push(value: string) {
      const node = new ListNode(Number(value), null);
      if (head === null) {
        head = node;
        tail = node;
      } else {
        if (tail !== null) {
        tail.next = node as ListNode;
        tail = tail.next;
        }
      }
    }
    const chs = s.split("")
    chs.forEach(push)
    return head;
  }

  function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const l1Str = reverseString(nodeToString(l1));
    const l2Str = reverseString(nodeToString(l2));
    const l1Num = BigInt(l1Str);
    const l2Num = BigInt(l2Str);

    const sum = l1Num + l2Num

    const sumReversedString = reverseString(sum + "");
    return stringToNode(sumReversedString);
  }