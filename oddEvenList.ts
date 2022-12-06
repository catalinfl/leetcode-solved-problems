function oddEvenList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }
    else if (head.next === null) {
        return head;
    }
    let odd_head: ListNode | null = head;
    let even_head: ListNode | null = head.next;

    let current_odd: ListNode | null = head;
    let current_even: ListNode | null = head.next;
    let current: ListNode | null = head.next.next;
    let index = 3;

    while (current !== null) {
        if (index % 2 == 1) {
            current_odd.next = current;
            current_odd = current_odd.next;
        }
        else {
            current_even.next = current;
            current_even = current_even.next;
        }
        current = current.next;
        index += 1;
    }
    current_odd.next = even_head;
    current_even.next = null;

    return odd_head;

};