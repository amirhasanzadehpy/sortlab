
export class NumbersCollection {
    private value: number;

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

    compare(leftIndex: number, rightIndex: number, flag: number = 0): boolean {
        if (flag === 1) {
            return this.data[leftIndex] > this.current
        }

        return this.data[leftIndex] > this.data[rightIndex]
    }

    changeValue(leftIndex: number, rightIndex: number, flag: number = 0): void {
        if (flag === 1) {
            this.data[leftIndex] = this.current
            return
        }
        this.data[leftIndex] = this.data[rightIndex];
    }

    currentValue(index: number) {
        this.value = this.data[index]
    }

    get current(): number {
        return this.value
    }
}
