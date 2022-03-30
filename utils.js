export function generateGameBoard (BOARD) {
    return JSON.parse(JSON.stringify(BOARD)) // clone deep hack
}