/**
 * Converts a snake_case string to camelCase format.
 * 
 * @function camelCase
 * @param {string} str - The input string in snake_case format to convert
 * @returns {string} The converted camelCase string
 * @throws {string} "nullstringexception" - Thrown when the input string is empty
 * @throws {string} "singlewordexception" - Thrown when the input string contains no underscores
 * 
 * @example
 * camelCase("hello_world"); // "helloWorld"
 * camelCase("my_variable_name"); // "myVariableName"
 * 
 * @example
 * // Throws errors:
 * camelCase(""); // throws "nullstringexception"
 * camelCase("hello"); // throws "singlewordexception"
 */

/**
 * Converts a snake_case string to dot.case format.
 * 
 * @function dotCase
 * @param {string} str - The input string in snake_case format to convert
 * @returns {string} The converted dot.case string in lowercase
 * @throws {string} "nullstringexception" - Thrown when the input string is empty
 * @throws {string} "singlewordexception" - Thrown when the input string contains no underscores
 * 
 * @example
 * dotCase("hello_world"); // "hello.world"
 * dotCase("my_variable_name"); // "my.variable.name"
 * 
 * @example
 * // Throws errors:
 * dotCase(""); // throws "nullstringexception"
 * dotCase("hello"); // throws "singlewordexception"
 */
function camelCase(str) {
    if (str === "") {
        throw "nullstringexception";
    }
    
    if (!str.includes("_")) {
        throw "singlewordexception";
    }
    
    return str
        .split("_")
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
}
function dotCase(str) {
    if (str === "") {
        throw "nullstringexception";
    }
    
    if (!str.includes("_")) {
        throw "singlewordexception";
    }
    
    return str
        .split("_")
        .join(".")
        .toLowerCase();
}