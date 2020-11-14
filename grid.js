
function isSameIsland(grid, row1, col1, row2, col2) {
    const nearby = isNearby({x: row1, y: col1}, {x: row2, y: col2}, grid);
    if (!nearby) {
        return false;
    }

    if (grid[row1 - 1][col1 - 1] === 1 && grid[row2 - 1][col2 - 1] === 1) {
        return true;
    }
}

function isNearby(a, b, grid = [[]]) {
    if (a.x < 0 || a.x > grid.length || a.y < 0 || a.y > grid[0].length) {
        return false;
    }

    if (b.x < 0 || b.x > grid.length || b.y < 0 || b.y > grid[0].length) {
        return false;
    }

    if (a.x === b.x && Math.abs(a.y - b.y) < 2) {
        return true;
    }

    if (a.y === b.y && Math.abs(a.x - b.x) < 2) {
        return true;
    }
    return false;
}
