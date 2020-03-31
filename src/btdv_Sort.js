/**
 * Sort using a property in an object
 * @param array {object[] | Array<any[]>}
 * @param property {string | number}
 * @param increase {boolean}
 * @returns {any[]}
 */
function sort2D(array, property, increase) {
	const mappedObjects = array.map((obj) => obj[property]);
	if (increase) {
		return mappedObjects.sort((a, b) => a - b);
	} else {
		return mappedObjects.sort((a, b) => b - a);
	}
}

/**
 *
 * @param array {object[] | Array<any[]>}
 * @param property {string | number}
 * @returns {any[]}
 */
function filterCol2D(array, property) {
	return array.map((obj) => obj[property]);
}

/**
 * Make the sum of a row in a 2D array (of an array of objects)
 * @param array {object[] || Array<any[]>}
 * @param property {string | number}
 * @returns {number}
 */
function sumCol2D(array, property) {
	return array.map((obj) => obj[property]).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

module.exports = {
	sort2D,
	filterCol2D,
	sumCol2D
};
