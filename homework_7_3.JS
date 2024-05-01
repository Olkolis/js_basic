const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];

function calculateAverageGrade(students){
	let gradeSum = 0;
	let itemsFound = 0;
	const len = students.length;
	let item = null;
		for (let i = 0; i < len; i++) {
    		item = students[i];
        	gradeSum = item.grade + gradeSum;
        	itemsFound ++;	
		}
	return (gradeSum/itemsFound).toFixed(1);
}
console.log(calculateAverageGrade(students)); // 4.4;