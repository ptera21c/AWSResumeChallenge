const counter = document.querySelector(".icon.solid.fa-eye");
async function updateCounter() {
    let response = await fetch("https://5eq7khxzosbebyfihrsqdzvmkm0zenwx.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views : ${data}`;
}
updateCounter();
