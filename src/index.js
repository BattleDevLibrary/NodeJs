const DEBUG = false;

function debug(arg) {
	if (DEBUG) {
		if (typeof arg === 'object') console.error(...arg);
		else console.error(arg);
	}
}

module.exports = {
	debug
};
