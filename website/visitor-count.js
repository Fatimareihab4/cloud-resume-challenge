const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://ev4gnx6jrsznaj7peokdlx5c3e0evepk.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Visitor Count: ${data}`;
}
updateCounter();