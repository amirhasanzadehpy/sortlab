
export class NumbersCollection {
    private currentIndex: number;

    constructor(public data: number[]) {
    }

    get length(): number {
        return this.data.length
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex]
        this.data[leftIndex] = this.data[rightIndex]
        this.data[rightIndex] = leftHand
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    currentValue(index: number) {
        this.currentIndex = index
    }

    get current(): number {
        return this.currentIndex
    }
}
