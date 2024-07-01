let a = [1, 2, 3, 4, 5];
let b = [11, 22, 33, 44, 55];
let sum = [10, 20, 30, 40, 50];
let arr = [11, 22, 33, 44, 55];
let year = [2000, 2001, 2002, 2003, 2004];

let m1 = [10, 20, 30, 40, 50];
let m2 = [11, 22, 33, 44, 55];

const Student = {
  name: "krish",
  age: 22,
  marks: 80,
};
let count = {};
let freq = ["mango", "orange", "mango", "apple", "apple", "pineple", "apple"];
for (let i = 0; i < freq.length; i++) {
  let ele = freq[i];
  if (count[ele]) {
    count[ele] += 1;
  } else {
    count[ele] = 1;
  }
}

const TenQuestion = () => {
  return (
    <div>
      <h1>TenQuestion</h1>

      <h4>1.squareOfElems</h4>
      {a.map((i, index) => (
        <span key={index}>{i * i} </span>
      ))}
      <br />

      <h4>2.cubeOfElems</h4>
      {a.map((i, index) => (
        <span key={index}>{i * i * i} </span>
      ))}

      <h4>3.accessingElements</h4>
      {b.map((i) => (
        <span key={`element-${i}`}>
          <br />
          accessing elements: {i}
        </span>
      ))}
      <br />

      {b.includes(44) ? (
        <span>
          <br />
          yes is found
        </span>
      ) : (
        <span>
          <br />
          no is not found
        </span>
      )}

      <h4>5.sumOfArray</h4>
      <p>The sum of the array is: {sum.reduce((acc, curr) => acc + curr, 0)}</p>
      <br />

      <h4>6.oddEven</h4>
      <p>Odd numbers: {arr.filter((num) => num % 2 !== 0).join(", ")}</p>
      <p>Even numbers: {arr.filter((num) => num % 2 === 0).join(", ")}</p>

      <h4>7.leapYear</h4>
      <p>Leap years: {year.filter((num) => num % 4 === 0).join(", ")}</p>
      <br />

      <h4>8.mergedArray</h4>
      {("<br /> merged arr :", [...m1, ...m2]).join(", ")}

      <h4>9.objectAccess</h4>
      {("<br /> student name :", Student.name)}
      {("<br />student age :", Student.age)}
      {("<br /> student marks :", Student.marks)}

      <h4>10.elemFrequency</h4>
      <div>
        <ul>
          {Object.keys(count).map((key, index) => (
            <li key={index}>
              {key}: {count[key]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TenQuestion;
