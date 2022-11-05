import * as assert from "assert";
import Grid from "../src/grid.js"

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
})