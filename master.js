// Task 1
var cat = {
  complain: function() {
    console.log("Meow!");
  }
};

// Task 2
var heading = document.querySelector("h3");

// Task 3
heading.style.fontSize = "2em";

// Task 4
heading.classList.add("subheading");

// Task 5
var paragraphs = document.querySelectorAll("p");

// Task 6
var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

// Task 7
const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

function arrayOfCats1(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}

arrayOfCats1(cats);

// Task 8
function arrayOfCats(catArray) {
  let newHTML = "";
  for (let i = 0; i < catArray.length; i++) {
    newHTML += `<h5>${catArray[i].name}</h5>`;
  }
  return newHTML;
}

// Task 9
arrayOfCats(cats);
resultsContainer.innerHTML += arrayOfCats(cats);

// Task 10
function arrayOfCats(catArray) {
  let catsHTML = "";
  for (let i = 0; i < catArray.length; i++) {
    let ageUnknown = "Age Unknown";
    if (catArray[i].age) {
      ageUnknown = catArray[i].age;
    }
    catsHTML += `<div>
                     <h5> ${catArray[i].name}</h5>                     
                      <p> ${ageUnknown}</p>
                  </div>`;
  }
  return catsHTML;
}
