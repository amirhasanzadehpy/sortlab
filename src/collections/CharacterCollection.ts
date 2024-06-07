export class CharacterCollection {
    private value: string;
    constructor(public data: string) {
    }

    get length(): number {
        return this.data.length
    }

    currentValue(index: number) {
        this.value = this.data[index]
    }

    get current(): string {
        return this.value
    }

    changeValue(leftIndex: number, rightIndex: number, flag: number = 0): void {
        const characters = this.data.split("")

        if (flag == 1) {
            characters[leftIndex] = this.value
        } else if (flag == 0) {
            characters[leftIndex] = characters[rightIndex];
        }

        this.data = characters.join("")
    }

    compare(leftIndex: number, rightIndex: number, flag: number = 0): boolean {
        if (flag === 1) {
            return (this.data[leftIndex].toLowerCase() > this.value.toLowerCase())
        }
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase())
    }

    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split("")

        const leftHand = characters[leftIndex]
        characters[leftIndex] = characters[rightIndex]
        characters[rightIndex] = leftHand

        this.data = characters.join("")
    }


}
