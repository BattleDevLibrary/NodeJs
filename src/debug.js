const DEBUG = true	;

function debug(arg) {
	if (DEBUG) {
		if (typeof arg === 'object') {
			console.error('---- Iterable ----');
			console.error(...arg);
		} else {
			console.error('---- Variable ----');
			console.error(arg);
		}
	}
}

module.exports = {
	debug
};
