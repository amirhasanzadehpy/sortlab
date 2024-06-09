
import { CharacterCollection } from "./collections/CharacterCollection";
import { NumbersCollection } from "./collections/NumbersCollection";
import { RawDataType, CollectionType } from "./types";

export class Sorter {
    private collection: CollectionType;

    constructor(data: RawDataType) {
        if (Array.isArray(data)) {
            this.collection = new NumbersCollection(data)
        } else if (typeof data === "string") {
            this.collection = new CharacterCollection(data)
        }
    }

    bubbleSort(): RawDataType {
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


    selectionSort(): RawDataType {
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


    insertionSort(): RawDataType {
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

    quickSort(dataCollection: CollectionType = this.collection, low: number = 0, high: number = this.collection.length - 1): RawDataType {
        if (low < high) {
            const pivotIndex = this.partition(this.collection, low, high);
            this.quickSort(dataCollection, low, pivotIndex - 1);
            this.quickSort(dataCollection, pivotIndex + 1, high);
        }
        return this.collection.data;
    }
    
    private partition(arr: CollectionType, low: number, high: number): number {
        this.collection.currentValue(high)
        let i = low - 1;
    
        for (let j = low; j < high; j++) {
            if (!this.collection.compare(j,0,1)) {
                i++;
                this.collection.swap(i,j)
            }
        }
        this.collection.swap(i+1, high)
        return i + 1;
    }
}
