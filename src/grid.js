export default class Grid {
    constructor(width, length, seed) {
        this.length = length;
        this.width = width;
        this.seed = seed
    }

    get exists() {
        return true
    }
}