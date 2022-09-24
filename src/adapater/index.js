import { validateStringValue } from "../validation";
/**
 * Custom adapter base on the data transfer object
 * that server must receive @juanosorio0219 have 
 * implemented the server using a matrix for its machine
 * calculations 🚡
 * @param {[{}]} rows 
 * @returns {[]}
 */
export const adapterFromClient = (rows) => {
    let matrixFromClient = []
    let i = 0;
    for (const row of rows) {
        matrixFromClient[i] = []
        let j = 0;
        for (const [key, value] of Object.entries(row)) {
            if (key !== 'id' && key !== 'state') {
                matrixFromClient[i][j] = validateStringValue(value)
                j++
            }
        }
        i++
    }
    return matrixFromClient
}