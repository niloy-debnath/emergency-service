//-----Nav Bar Heart Count-------

const heartIcons = document.getElementsByClassName("heart-png");
let navHeartElement = document.getElementById("nav-heart-number");
console.log(navHeartElement);

for (let icon of heartIcons) {
  icon.addEventListener("click", function () {
    let currentValue = parseInt(navHeartElement.innerText);

    currentValue++;
    console.log(currentValue);
    navHeartElement.innerText = currentValue;
  });
}

//
