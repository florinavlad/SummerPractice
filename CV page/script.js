//get nav with a function
const loadFile = async (fileName) => {
  const response = await fetch(fileName);
  const text = await response.text();

  return text;
};

const run = async () => {
  const header = document.getElementById("header");

  if (!header) {
    return;
  }

  const navigationBar = await loadFile("nav.html");
  header.innerHTML = navigationBar;

  navSlide();
};

run();

// check if current page is login (another metod)
// const currentLocaton = window.location.href;
// const returnedArray = currentLocaton.split("/");
// if ((returnedArray[returnedArray.length - 1] = "login.html")) {
//   console.log(true);
// } else {
//   console.log(false); }

//Navigation Bar
const navSlide = () => {
  const hamBurger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navItem = document.querySelectorAll(".nav-menu li");
  console.log(hamBurger);

  //Toggle
  hamBurger.addEventListener("click", () => {
    navMenu.classList.toggle("nav-active");

    //Animation Delay
    navItem.forEach((link, index) => {
      // console.log(index);
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navFade 0.5s ease forwards ${index / 5 + 0.5}s`;
      }
    });

    hamBurger.classList.toggle("toggle");
  });
};

//EXPERIENCE
const experiences = [
  {
    id: 1,
    name: "Traineeship",
    Company: "Wayfare",
    description: "Final project with Progress OpenEdge, Angular Framework ",
    startDate: "04/04/2022",
    endDate: "27/05/2022",
  },

  {
    id: 2,
    name: "Summer Practice",
    Company: "Endava",
    description:
      "Frontend domain, prioritizing and developing work in HTML, CSS, JavaScript",
    startDate: "11/07/2022",
    endDate: "09/09/2022",
  },

  {
    id: 3,
    name: "Volunteering",
    Company: "OSUT Cluj-Napoca",
    description: "Help people and me as well",
    startDate: "15/10/2019",
    endDate: "Present",
  },
];

//generate a div for a experience received as a parameter
function generateExpCard(experience) {
  const expCard = document.createElement("div");
  expCard.className = "cardContainer";

  const expName = document.createElement("p");
  const expCompany = document.createElement("p");
  const expDescription = document.createElement("p");
  const expStartDate = document.createElement("p");
  const expEndDate = document.createElement("p");

  expName.innerText = experience.name;
  expCompany.innerText = experience.Company;
  expDescription.innerText = experience.description;
  expStartDate.innerText = experience.startDate;
  expEndDate.innerText = experience.endDate;

  expCard.appendChild(expName);
  expCard.appendChild(expCompany);
  expCard.appendChild(expDescription);
  expCard.appendChild(expStartDate);
  expCard.appendChild(expEndDate);

  return expCard;
}

//generates a div for each experience in the list and adds it to the parent div of experienceContainer
function populateExpContainer(expArray) {
  const mainParent = document.getElementById("experienceContainer"); //identify our parent div container

  if (!mainParent) {
    return;
  }

  expArray.forEach(function (
    experienceObj,
    index
    //cross the list of experiences
  ) {
    const userCard = generateExpCard(experienceObj);
    mainParent.appendChild(userCard);
  });
}

console.log(generateExpCard(experiences[0]));
populateExpContainer(experiences);

//EDUCATION
const education = [
  {
    id: 1,
    name: "Highschool",
    Company: '"Vasile Lucaciu" National College',
    startDate: "09/2015",
    endDate: "06/2019",
  },

  {
    id: 2,
    name: "University",
    Company:
      "Technical University of Cluj-Napoca, Automation and Applied Informatics",
    startDate: "10/2019",
    endDate: "Present",
  },
];

function generateEduCard(education) {
  const eduCard = document.createElement("div");
  eduCard.className = "cardEduContainer";

  const eduName = document.createElement("p");
  const eduCompany = document.createElement("p");
  const eduStartDate = document.createElement("p");
  const eduEndDate = document.createElement("p");

  eduName.innerText = education.name;
  eduCompany.innerText = education.Company;
  eduStartDate.innerText = education.startDate;
  eduEndDate.innerText = education.endDate;

  eduCard.appendChild(eduName);
  eduCard.appendChild(eduCompany);
  eduCard.appendChild(eduStartDate);
  eduCard.appendChild(eduEndDate);

  return eduCard;
}

function populateEduContainer(eduArray) {
  const mainParent = document.getElementById("educationContainer"); //identify our parent div container

  if (!mainParent) {
    return;
  }

  eduArray.forEach(function (
    educationObj,
    index
    //cross the list of education
  ) {
    const userEduCard = generateEduCard(educationObj);
    mainParent.appendChild(userEduCard);
  });
}

console.log(generateEduCard(education[0]));
populateEduContainer(education);
