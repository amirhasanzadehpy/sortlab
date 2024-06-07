import { CharacterCollection } from "./collections/CharacterCollection";
import { NumbersCollection } from "./collections/NumbersCollection";

export class base {
    protected collection: NumbersCollection | CharacterCollection;

    constructor(protected data: number[] | string) {
        if (Array.isArray(data) && data.every(item => typeof item === 'number')) {
            this.collection = new NumbersCollection(data)
        } else if (typeof data === "string") {
            this.collection = new CharacterCollection(data)
        }
    }


}
