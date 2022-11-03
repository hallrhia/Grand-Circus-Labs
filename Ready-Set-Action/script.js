function main() {
  let growMeTag = document.getElementById("grow-me");
  growMeTag.classList.add("big");

  let shrinkMeTag = document.getElementById("shrink-me");
  shrinkMeTag.classList.remove("big");

  let liTag = document.querySelectorAll("li");

  for (let li of liTag) {
    console.log(li.textContent);
  }
  let hideMeTag = document.getElementById("hide-me");
  hideMeTag.style.display = "none";

  let showMeTag = document.getElementById("show-me");
  showMeTag.style.display = "block";
  
  let link = document.getElementById("link")
  link.innerText = "somewhere";
  link.href = "https://www.example.com";
  
  let inputValue = document.getElementById("name").value;
  let header = document.querySelector("h1");
  header.innerText = `Welcome ${inputValue}!`;

}

