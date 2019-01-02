const IDs = new Promise((resolve, reject) => {
	setTimeout(() =>{
		resolve([12,23,34,45,56,67]);
	}, 2000);
});

// then contains return value of resolve in the promise
IDs.then(x => {
	console.log(x);
});

// promise object (IDs here) also has catch function which should be used to get the return value of reject function.  

