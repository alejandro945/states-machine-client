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
/**
 * Adapter in the client react side function usefull to get
 * the Dot language that the graphvi library accepts 🚨
 * @param {[]} dataFromServer 
 */
export const adapterFromServer = (dataFromServer) => {
    let isMoore = (dataFromServer[0].includes('S'))
    let diagramData = ''
    for(let i = 1; i < dataFromServer[0].length -1; i++){
        for(let j = 1; j < dataFromServer[0].length -(isMoore ? 1 : 0); j++){
            if(!isMoore){
                diagramData += dataFromServer[i][0] + ' -> ' + dataFromServer[i][j].split(',')[0]  + `[label="${dataFromServer[0][j]},${dataFromServer[i][j].split(',')[1]}"];`
            }else{
                diagramData += getMooreState(dataFromServer,dataFromServer[i][0]) + ' -> ' +  getMooreState(dataFromServer,dataFromServer[i][j])  + `[label="${dataFromServer[0][j]}"];`
            }
        }
    }
    return diagramData
}
/**
 * Auxiliar method that search the corresponding
 * output of an specific state in the matrix send
 * by the server
 * @param {[*]} matrix 
 * @param {String} state 
 */
function getMooreState(matrix,state){
    let result = ''
    for(const row of matrix){
        if(row[0] === state){
            result = row[0] + '' + row[row.length - 1]
        }
    }
    return result
}