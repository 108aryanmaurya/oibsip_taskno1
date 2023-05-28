const inputWindow = document.getElementById("input");
const key1 = document.getElementById("key-1");
const key2 = document.getElementById("key-2");
const key3 = document.getElementById("key-3");
const key4 = document.getElementById("key-4");
const key5 = document.getElementById("key-5");
const key6 = document.getElementById("key-6");
const key7 = document.getElementById("key-7");
const key8 = document.getElementById("key-8");
const key9 = document.getElementById("key-9");
const key0 = document.getElementById("key-0");
const keyad = document.getElementById("key-+");
const keysub = document.getElementById("key-");
const keymult = document.getElementById("key-*");
const keydiv = document.getElementById("key-/");
// const keymod = document.getElementById("key-%");
const keyac = document.getElementById("key-ac");
const keydel = document.getElementById("key-del");
const equal1 = document.getElementById("equal-s");

key0.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 0;
});
key1.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 1;
});
key2.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 2;
});
key3.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 3;
});
key4.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 4;
});
key5.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 5;
});
key6.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 6;
});
key7.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 7;
});
key8.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 8;
});
key9.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 9;
});
keysub.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + "-";
});
keymult.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + "*";
});
keydiv.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + "/";
});
// keymod.addEventListener("click", () => {
//   inputWindow.value = inputWindow.value + "%";
// });
keyac.addEventListener("click", () => {
  inputWindow.value = "";
});
keydel.addEventListener("click", () => {
  let data = inputWindow.value;
  data = data.substring(0, data.length - 1);
  inputWindow.value = data;
});
// key.addEventListener("click", () => {
//   inputWindow.value = inputWindow.value + ;
// });
keyad.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + "+";
});
equal1.addEventListener("click", () => {
  let val = inputWindow.value;
  try {
    let ans = eval(val)
    //  func(val);
    console.log(ans + "ans");
    inputWindow.value = "Ans: " + ans;

  } catch (error) {
    console.log(error)
    if (val == "1/0") {
      inputWindow.value = "Infinity";
    }
    else {
      inputWindow.value = "SYNTAX ERROR";

    }

  }
});

// console.log("ejffnnekr");
// inputWindow.addEventListener("change", (event) => {
//   console.log(typeof inputWindow.value);
//   //   let input = inputWindow.value;
//   console.log(input);
//   input = 49 * 34;
//   let ne = input;
//   console.log(ne);
// });

// function func(str) {
//   console.log(eval(str))

//   console.log(str)
//   let arrnum = str.split(/[-/*+]/);
//   console.log(arrnum)
//   let arrop = str.split(/[1234567890]/);
//   console.log(arrop)

//   arrnum = arrnum.filter((i) => {
//     return i != "" && i != NaN;
//   });
//   arrop = arrop.filter((i) => {
//     return i != "" && i != NaN;
//   });
//   console.log(arrnum.length);

//   console.log(arrop.length);
//   if (arrnum.length <= arrop.length) {
//     return "SYNTAX ERROR";
//   }
//   arrop = arrop.filter((ch) => {
//     return ch != "";
//   });
//   console.log(arrnum);
//   console.log(arrop);
//   let arr_num_op = [];
//   for (let i = 0; i < arrnum.length; i++) {
//     arr_num_op.push(parseInt(arrnum[i]));

//     if (i != arrop.length) arr_num_op.push(arrop[i]);
//   }
//   console.log(arr_num_op);
//   console.log(eval(str));
//   for (let j = 0; j < arr_num_op.length; j++) {
//     if (arr_num_op[j] == "/") {
//       let sol = arr_num_op[j - 1] / arr_num_op[j + 1];
//       arr_num_op[j - 1] = ".";
//       arr_num_op[j] = sol;
//       arr_num_op[j + 1] = ".";
//       // console.log(arr_num_op);
//       arr_num_op = arr_num_op.filter((item) => {
//         return item != ".";
//       });
//       // console.log(arr_num_op);
//       j = 0;
//       continue;
//     }
//   }
//   for (let j = 0; j < arr_num_op.length * 2; j++) {
//     console.log(j);
//     //   const element = arr_num_op[j];
//     if (arr_num_op[j] == "*") {
//       let sol = arr_num_op[j - 1] * arr_num_op[j + 1];
//       arr_num_op[j - 1] = ".";
//       arr_num_op[j] = sol;
//       arr_num_op[j + 1] = ".";
//       // console.log(arr_num_op);
//       arr_num_op = arr_num_op.filter((item) => {
//         return item != ".";
//       });
//       // console.log(arr_num_op);
//       j = 0;
//       continue;
//     }
//   }

//   for (let j = 0; j < arr_num_op.length; j++) {
//     //   const element = arr_num_op[l];

//     if (arr_num_op[j] == "-") {
//       let sol = arr_num_op[j - 1] - arr_num_op[j + 1];
//       arr_num_op[j - 1] = ".";
//       arr_num_op[j] = sol;
//       arr_num_op[j + 1] = ".";
//       // console.log(arr_num_op);
//       arr_num_op = arr_num_op.filter((item) => {
//         return item != ".";
//       });
//       // console.log(arr_num_op);
//       j = 0;
//       continue;
//     }
//   }

//   for (let j = 0; j < arr_num_op.length; j++) {
//     //   const element = arr_num_op[m];

//     if (arr_num_op[j] == "+") {
//       let sol = arr_num_op[j - 1] + arr_num_op[j + 1];
//       arr_num_op[j - 1] = ".";
//       arr_num_op[j] = sol;
//       arr_num_op[j + 1] = ".";
//       // console.log(arr_num_op);
//       arr_num_op = arr_num_op.filter((item) => {
//         return item != ".";
//       });
//       // console.log(arr_num_op);
//       j = 0;
//       continue;
//     }
//   }
//   console.log(arr_num_op);
//   return arr_num_op[0];
// }
// // function calculate(len,op ){
// // for (let j = 0; j < len; j++) {
// //   if (arr_num_op[j] == op) {
// //     let sol = arr_num_op[j - 1] / arr_num_op[j + 1];
// //     arr_num_op[j - 1] = ".";
// //     arr_num_op[j] = sol;
// //     arr_num_op[j + 1] = ".";
// //     console.log(arr_num_op);
// //     arr_num_op = arr_num_op.filter((item) => {
// //       return item != ".";
// //     });
// //     console.log(arr_num_op);
// //     j = 0;
// //     continue;
// //   }
// // }
// // }

// let str = "-12*65+12/45";
// let arrnum = str.split(/[/+*]/);

// // console.log(arrnum);
// // console.log(parseInt("+3"));
