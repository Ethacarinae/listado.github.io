const numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
//tim phan tu nho nhat

// let smallest = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (smallest >numbers[i] ) {
//     smallest = numbers[i];
//   }
// }

// console.log(smallest);

//-------------------------------
//tim phan tu lon nhat

// let biggest = numbers[0];
// for (let i = 0; i <= numbers.length; i++) {
//   if (biggest < numbers[i]) {
//     biggest = numbers[i];
//   }
// }
// console.log(biggest);

//--------------------------------
//Tính trung bình cộng.

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// const avg = sum / numbers.length;

// console.log(avg);

//--------------------------------------------------
//Tìm phần tử đầu tiên chia hết cho 3 trong mảng.

// let abc = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 3 === 0) {
//     abc = numbers[i];
//     break;
//   }
// }
// console.log(abc);

//--------------------------------------------
//Tìm các phần tử là số nguyên tố trong mảng.
// for (let number of numbers) {
//   let count = 0;
//   for (let i = 2; i <= number; i++) {
//     if (number % i === 0) {
//       count = count + 1;
//     }
//   }
//   if (count === 2) {
//     console.log(number, " la so nguyen to");
//   } else {
//     console.log(number, "ko phai la so nguyen to");
//   }
// }
