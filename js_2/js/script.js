var arr = [];

for (i = 0; i < 5; i++){

	num = i+1;

	arr[i] = prompt("Введите имя " + num);

}

var name = prompt("Введите имя пользователя");
var clon;

for(var i = 0; i < 5; i++) {

	if(arr[i] === name){
		clon = true; 
		break;
	}
	clon = false;
}

if(clon === false){
	alert("Имя, " + name + " не найдено");
} else {
	alert(name + ", вы успешно вошли");
}