//2. Viết một hàm nhập vào 2 mảng A1 và A2, đầu ra trả về một mảng mới chứa các phần tử không trùng nhau của hai mảng kia.
//Ví dụ A1 = [1, 2, "a"]; A2 = [1, 3, "b"] thì output ra được là [2, "a", "b", 3].

let inputA1 = prompt("nhap vao mang A1, cach nhau bang dau (,)").split(",");
let A1 = inputA1.map((item) =>
  isNaN(item) ? item.trim() : Number(item.trim())
);

let inputA2 = prompt("nhap vao mang A2, cach nhau bang dau (,)").split(",");
let A2 = inputA2.map((item) =>
  isNaN(item) ? item.trim() : Number(item.trim())
);
function abc(A1, A2) {
  let set1 = new Set(A1);
  let set2 = new Set(A2);

  let result = [];

  set1.forEach((item) => {
    if (!set2.has(item)) {
      result.push(item);
    }
  });
  set2.forEach((item) => {
    if (!set1.has(item)) {
      result.push(item);
    }
  });
  return result;
}
console.log(abc(A1, A2));
