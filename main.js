let input1p = document.getElementById('input1');
let operator;
let input2;
let shousuu = 0;
let toBeErased = 0;

function clr() {
 input1p.value = "";
 shousuu = 0;
}

function clrAll() {
 input1p.value = "";
 input2 = "";
 operator = "";
 shousuu = 0;
}

function kazu(n) {
 if (toBeErased == 1) {
 toBeErased = 0;
 input1p.value = "";
 }
 if (n == ".") {
 if (shousuu == 1) return;
 if (input1p.value == "") input1p.value = "0.";
 else input1p.value = input1p.value + ".";
      shousuu = 1;
 return;
 }
 
if (input1p.value == "0") input1p.value = "";
    input1p.value = input1p.value + n;
}

function kigou(k) {
if (operator != "") { equal(); }
 operator = k;
 input2 = input1p.value;
 toBeErased = 1; 
}

function equal() {
 if (operator == "＋") { input1p.value = Number(input2) + Number(input1p.value); }
 else if (operator == "－") { input1p.value = Number(input2) - Number(input1p.value); }
 else if (operator == "×") { input1p.value = Number(input2) * Number(input1p.value); }
 else if (operator == "÷") { input1p.value = Number(input2) / Number(input1p.value); }
 operator = "＝";
 toBeErased = 1;
} 