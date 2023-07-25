 function count() {

     let countMap = {};
     textarea = textarea.value;
     textarea = textarea.trim().toLowerCase();
     textarea.trim(',');
     let words = textarea.split(' ');
     console.log(words);

     if (!textarea) {
         console.log("nothing");
     }
     words.forEach((word) => {

         if (countMap.hasOwnProperty(word)) {
             countMap[word]++;
             // console.log(countMap);
         } else {
             countMap[word] = 1;
             // console.log(countMap);

         }
     });

     console.log(countMap);
     result.innerHTML = '';

     result.style.visibility = "visible";

     for (let word in countMap) {
         let count = countMap[word];
         let wordCountString = `${word}  :  ${count} , `;

         let wordCountNode = document.createTextNode(wordCountString);
         result.appendChild(wordCountNode);

     }


 }
 // count();

 let textarea = document.getElementById("textarea");
 let btn = document.getElementsByTagName("button")[0];
 let result = document.getElementById("result");
 console.log(textarea);
 // call function..
 btn.addEventListener("click", count);