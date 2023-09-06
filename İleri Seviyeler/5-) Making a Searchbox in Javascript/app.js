
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase().trim();
    users.forEach(user => {
        const visible = user.name.toLowerCase().trim().includes(value) || user.email.toLowerCase().trim().includes(value);
        user.element.classList.toggle("hide", !visible);
    });

});

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data =>{
   users =  data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
        header.textContent = user.name; 
        body.textContent = user.email;
        userCardContainer.appendChild(card);

    return {name : user.name, email : user.email, element : card}
    });
})
.catch(error => console.log(error))


















