console.log("Hello");

// Задача 1.

function getsum() {
	const a = prompt("write the number");
	if (a % 2 === 0) {
		console.log("Сиздин саныныз жуп.");
	} else {
		console.log("Сиздин саныныз так.");
	}
}

getsum();
// Задача 2.
function getUser() {
	const b1 = prompt("Напишите первое числло1");
	const b2 = prompt("Напишите второе числло2");
	const b3 = prompt("Напишите третье числло3");
	if (b1 > b3 && b1 > b2) {
		console.log(b1);
	} else if (b2 > b3 && b2 > b1) {
		console.log(b2);
	} else {
		console.log(b3);
	}
}
getUser();

// Задачам 3.

function getNumber1() {
	const yuorNumber = +prompt('write the number');
	if(yuorNumber > 0){
		console.log(true);
	}else {
		console.log(false);
	}
}
getNumber1();

// Задача 4.

function getNumber2() {
	const massiv = [1,4,6,7,3,0,]
	console.log();
}
getNumber2();

// Задача 5.

const getNumber11 = () => {
  const a = +prompt('Напишите числло!')
	if (a >= 10 && a <= 20) {
		console.log(true);
	}else{
		console.log(false);
	}
}
console.log(getNumber11);

function getPum() {
	const a = +prompt('Напиши.')
	if (a >= 10 && a <= 20){
		console.log(true);
	}else{
		console.log(false);
	}
}
getPum();

// Задача 6.

function getUsd(){
  const usd = prompt('Какую сумму хотите менять на доллар.');
  const som = (89.26)
  console.log(usd * som);
}

getUsd();
// Задача 7.

function getNum1() {
	switch (yourText) {
		case "a":
			console.log(true);
			break;
		case "e":
			console.log(true);
			break;
		case "i":
			console.log(true);
			break;
		case "u":
			console.log(true);
			break;
		case "o":
			console.log(true);
			break;
		default:
			console.log(false);
	}
}

alert(from + ' : ' + Text);