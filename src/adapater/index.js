import { validateStringValue } from "../validation";
/**
 * Custom adapter base on the data transfer object
 * that server must receive @juanosorio0219 have 
 * implemented the server using a matrix for its machine
 * calculations 🚡
 * @param {[{}]} rows 
 * @returns {[]}
 */
export const adapterFromClient = (rows,columns) => {
    let matrixFromClient = []
    matrixFromClient[0] = columns.map(column => {return column.field})
    let i = 1;
    for (const row of rows) {
        matrixFromClient[i] = []
        matrixFromClient[i][0] = row.States
        let j = 1;
        for (const [key, value] of Object.entries(row)) {
            if (key !== 'id' && key !== 'States') {
                matrixFromClient[i][j] = validateStringValue(value)
                j++
            }
        }
        i++
    }
    return matrixFromClient
}