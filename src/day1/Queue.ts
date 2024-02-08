type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // add element to end of linked list
    enqueue(item: T): void {
        const node = {value: item } as Node<T>;
        this.length++;

        // if element does not exist at end of linked list
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    // pop first element in list
    deque(): T | undefined {
        // ensure head exists in list
        if (!this.head) {
            return undefined;
        }

        // decrement length of the list
        this.length--;

        // temporarily store the current head
        const head = this.head;
        // set head to where this.head use to point to
        this.head = this.head.next;

        // free memory because head.next will never be used
        head.next = undefined;

        // free up memory for tail if we just popped last element in linked list
        if (this.length === 0) {
            this.tail = undefined;
        }

        // return the head value
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}