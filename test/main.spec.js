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
})