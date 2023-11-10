let para = document.querySelector("p");
let button = document.querySelector("button");

const generateJokes = async () => {
  try {
    const setHeader = {
        headers : {
            Accept : "application/json"
        }
    }
    const response = await fetch("https://icanhazdadjoke.com",setHeader);
    const data = await response.json();
    para.innerHTML = data.joke;
  } catch (error) {
    console.log(`${error} Error is accured`);
  }
};

button.addEventListener("click", generateJokes);

generateJokes();