import { base } from ".";

export class Sorter extends base {

    constructor(protected data: number[] | string) {
        super(data)
    }

    public bubbleSort(): void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1)
                }
            }
        }
    }


    public selectionSort(): void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            let min = i
            for (let j = i + 1; j < length; j++) {
                if (this.collection.compare(min, j)) {
                    min = j
                }
            }
            if (i != min) {
                this.collection.swap(min, i)
            }

        }
    }


    public insertionSort(): void {
        const { length } = this.collection;
        for (let i = 1; i < length; i++) {
            this.collection.currentValue(i)
            let j: number;
            for (j = i - 1; j >= 0 && this.collection.compare(j, 0, 1); j--) {
                this.collection.changeValue(j + 1, j)
            }

            this.collection.changeValue(j + 1, 0, 1)

        }
    }
}
