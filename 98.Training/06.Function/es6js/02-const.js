/*CONST HANG SO*/
const COUSE_NAME = "Angular";
/*
COUSE_NAME = "abx";*/

console.log(COUSE_NAME);

/*
bởi vì trong mỗi vòng lặp là một block-scoped nên khi qua vòng lặp kế tiếp biến const sẽ không tồn tại nữa, vì vậy đoạn code khai báo coi như là bắt đầu lại từ đầu nên sẽ không bị lỗi
*/
for (var i = 0; i < 5; i++) {
	var POINT = "TEST block-scoped CONST";
	POINT = "Name " + i;
	console.log(POINT);
}