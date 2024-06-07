export class CharacterCollection {
    private value: number;
    constructor(public data: string) {
    }

    get length(): number {
        return this.data.length
    }

    currentValue(index: number) {
        this.value = index
    }

    get current(): number {
        return this.value
    }

    compare(leftIndex: number, rightIndex: number): boolean {
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
