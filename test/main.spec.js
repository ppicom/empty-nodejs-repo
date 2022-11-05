import * as assert from "assert";
import Grid from "../src/grid.js"
import Cell from "../src/cell.js"

describe("Tests", function() {
    it('should run', function() {
        assert.equal(1, 1)
    })
    it('creates a grid', function() {
        let grid = new Grid(4, 8);
        assert.equal(grid.exists, true)
    })
    it('grid should have width', function() {
        let grid = new Grid(4)

        assert.equal(grid.width, 4)
    })
    it('cell jumps into existence', function() {
        let cell = new Cell(1, 1);
        
        assert.equal(cell.exists, true)
    })
    it('introduce seed to grid', function() {
        let seed = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
        let grid = new Grid(4, 4, seed)

        assert.equal(grid.seed == seed, true)
    })

    it('if one, then true', function() {
        let seed = [
            [1, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
        let grid = new Grid(4, 4, seed)

        assert.equal(grid.getCell(0,0), true)
    })
})