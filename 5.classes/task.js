class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(number) {
		if (number < 0) {
			this._state = 0;
		} else if (number > 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				const bookToGive = this.books[i];
				this.books.splice(i, 1);
				return bookToGive;
			}
		}
		return null;
	}
}


class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subjectName) {
		if (mark < 2 || mark > 5) {
			return;
		}

		if (!this.marks[subjectName]) {
			this.marks[subjectName] = [];
		}

		this.marks[subjectName].push(mark);
	}

	getAverageBySubject(subjectName) {
		if (!this.marks[subjectName] || this.marks[subjectName].length === 0) {
			return 0;
		}

		let sum = this.marks[subjectName].reduce((acc, mark) => acc + mark, 0);
		return sum / this.marks[subjectName].length;
	}

	getAverage() {
		const subjects = Object.keys(this.marks);

		if (subjects.length === 0) {
			return 0;
		}

		let totalSum = 0;
		let totalMarks = 0;

		subjects.forEach(subject => {
			let subjectSum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
			totalSum += subjectSum;
			totalMarks += this.marks[subject].length;
		});

		return totalSum / totalMarks;
	}
}



