var value1 = document.getElementById("input1");
var value2 = document.getElementById("input2");
var addButton = document.getElementById("button");
function add(num1, num2) {
    return num1 + num2;
}
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", function () {
    console.log(add(+value1.value, +value2.value));
});
