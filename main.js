"use strict";
/*
**********************CODING TASK No 2*****************************
1. Create an array - students, insert four items, which should be objects and have three properties: name, score1, score2, 
    with the following values:
    a. John, 47, 46
    b. Bob, 23, 24
    c. Nick, 40, 35
    d. Alex, 44, 45
2. Suppose that, students have chance to get different degrees of diploma, like A, B, C, D, E and those degrees are relevant
    to the following passing limits 91, 81, 71, 61, 51. According to that, create two arrays for passing limits and for degrees
3. Create function which will calculate total score (score1 + score2) for each student.
4. Create function and use in it for loops, if else statements and whatever you need, in order to figure out, which student 
    has passed an exam and what kind of degree he has got.
5. Display the final result in console.           
*/



const students = [
    {
      name: `John`,
      score_1: 47,
      score_2: 46,
    },
    {
      name: `Bob`,
      score_1: 23,
      score_2: 24,
    },
    {
      name: `Nick`,
      score_1: 40,
      score_2: 35,
    },
    {
      name: `Alex`,
      score_1: 44,
      score_2: 45,
    },
  ];
  const degrees = [`A`, `B`, `C`, `D`, `E`];
  const passingLimit = [91, 81, 71, 61, 51];
  const total = students.map((student) => student.score_1 + student.score_2);
  console.log(total);
  const check = function () {
    let deg = "failed";
    for (let y = 0; y < total.length; y++) {
      for (let i = 0; i < pl.length; i++) {
        if (total[y] >= pl[i]) {
            deg = degrees[i];
            break;
          }
        }
        console.log(`name: ${students[y].name} score: ${total[y]} deg: ${deg}`);
        deg = "failed";
      }
    };
check();