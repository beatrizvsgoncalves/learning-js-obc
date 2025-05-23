async function asyncSum(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return Promise.reject('arguments must be numbers');
	}
	return a + b;
}

/*
async function execute() {
	asyncSum(1, 2).then((result) => {
		console.log(result);
	});
}
*/

async function execute() {
  try {
    const result = await asyncSum(null, 2);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

execute();