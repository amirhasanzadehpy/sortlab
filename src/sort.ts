
import { CharacterCollection } from "./collections/CharacterCollection";
import { NumbersCollection } from "./collections/NumbersCollection";
import { RawDataType } from "./types";

export class Sorter {
    private collection: NumbersCollection | CharacterCollection;

    constructor(data: RawDataType) {
        if (Array.isArray(data)) {
            this.collection = new NumbersCollection(data)
        } else if (typeof data === "string") {
            this.collection = new CharacterCollection(data)
        }
    }

    bubbleSort(): any {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1)
                }
            }
        }


        return this.collection.data

    }


    selectionSort(): any {
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

        return this.collection.data
    }


    insertionSort(): any {
        const { length } = this.collection;
        for (let i = 1; i < length; i++) {
            this.collection.currentValue(i)
            let j: number;
            for (j = i - 1; j >= 0 && this.collection.compare(j, 0, 1); j--) {
                this.collection.changeValue(j + 1, j)
            }

            this.collection.changeValue(j + 1, 0, 1)

        }

        return this.collection.data
    }
}
