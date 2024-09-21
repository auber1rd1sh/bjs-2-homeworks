function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every(i => arr1[i] === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(user => user.gender === gender).reduce((sum, user) => sum + user.age, 0);
	let count = users.filter(user => user.gender === gender).length;
    
	if (count === 0) {
		return 0;
	}

	return result / count;
}