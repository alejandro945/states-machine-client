/**
 * Basic validation of the varible string
 * type just for custom validations in the
 * user interface
 * @param {*} value 
 * @returns {Boolean}
 */
export function validateStringValue(value) {
    return (typeof value === 'string') ? value.toUpperCase() : value
}

/**
 * Validation of all the empty properties in
 * the data table machine with the aim of guaranteeing
 * all necessary data for our endpoint
 * @param {[]} rows 
 * @returns {Boolean}
 */
export function validateMachineData(rows) {
    for(const row of rows){
        for(const value of Object.values(row)){
            if(value === ''){
                return false
            }
        }
    }
    return true
}