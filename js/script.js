const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//question 1

const cat = {
    complain: function() {
        console.log("Meow!")
    }
}
cat.complain();

//question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading"

//question 3

heading.style.fontSize = "2em";

//question 4

heading.classList.add("subheading");

//question 5

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(paragraph => {
    paragraph.style.color = "red";
});

//solved with regular for loop:
/*
for (i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}
*/

//question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p style="color: yellow">New paragraph</p>`;

/* OR:
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.color = "yellow";
*/

//question 7

function printList(list) {
    for (i in list) {
        console.log(list[i].name);
    }
}
printList(cats);

//question 8

function createCats(cats) {
    let markup = "";
    
    for (i in cats) {
        let age = "Age unknown";
        if (cats[i].age) {
            age = cats[i].age;
        }
        markup += `<div><h5>${cats[i].name}</h5><p>${age}</p></div>`
    }
    console.log(markup);
    return markup;
}

const catContainer = document.querySelector(".cat-container");

const catMarkup = createCats(cats);

catContainer.innerHTML = catMarkup;