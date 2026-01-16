let matrix;
let dp;

function f(row, col) {
    if (row === matrix.length - 1) {
        return matrix[row][col];
    }

    if (dp[row][col] !== undefined) return dp[row][col];

    dp[row][col] =
        matrix[row][col] +
        Math.min(f(row + 1, col), f(row + 1, col + 1));

    return dp[row][col];
}

var minimumTotal = function(triangle) {
    matrix = triangle;
    dp = Array.from({ length: triangle.length }, () =>
        Array(triangle.length)
    );
    return f(0, 0);
};
