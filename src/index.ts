import { CharacterCollection } from "./collections/CharacterCollection";
import { NumbersCollection } from "./collections/NumbersCollection";

export class Sorter {
    private collection: NumbersCollection | CharacterCollection;

    constructor(private data: number[] | string) {
        if (Array.isArray(data) && data.every(item => typeof item === 'number')) {
            this.collection = new NumbersCollection(data)
        } else if (typeof data === "string") {
            this.collection = new CharacterCollection(data)
        }
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


}
