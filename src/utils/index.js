/**
 * Function that creates our coloumns array of objects
 * neccesary for the UI Framework, in this case Material
 * @param {String[]} alphabet 
 * @returns {[{}]}
 */
export function generateColumns(alphabet, isMoore) {
    let columns = []
    //First Column by default
    columns[0] = { field: 'state', width: 200 }
    for (let index = 1; index < alphabet.length + 1; index++) {
        columns[index] = { field: alphabet[index - 1].toString(), headerName: alphabet[index - 1], width: 180, editable: true };
    }
    //Moore extra column validation
    if (isMoore) {
        columns[alphabet.length + 1] = { field: 'result', headerName: 'Respuesta', width: 180, editable: true }
    }
    return columns
}

/**
 * Function that generates the rows for our machine
 * table representation. Base on the amount of states
 * already declar by the user and parse that information 
 * into char type
 * @param {[{}]} columns 
 * @param {Number} amountOfStates 
 * @returns {[{}]}
 */
export const generateRows = (columns, amountOfStates) => {
    let rows = []
    for (let i = 0; i < amountOfStates; i++) {
        let row = { id: i + 1 }
        for (let j = 0; j < columns.length; j++) {
            row[columns[j].field] = (j === 0) ? (String.fromCharCode(65 + i)) : ''
        }
        rows[i] = row
    }
    return rows
}