//-----Nav Bar Heart Count-------

const heartIcons = document.getElementsByClassName("heart-png");
let navHeartElement = document.getElementById("nav-heart-number");

for (let icon of heartIcons) {
  icon.addEventListener("click", function () {
    let currentValue = parseInt(navHeartElement.innerText);

    currentValue++;

    navHeartElement.innerText = currentValue;
  });
}

//----- Call Button --------

const callButtons = document.getElementsByClassName("call-button");

for (let callButton of callButtons) {
  callButton.addEventListener("click", function () {
    let cardTitle =
      callButton.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    let number =
      callButton.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    // console.log(number);
    let totalCoinElement = document.getElementById("total-coin");
    let totalCoin = parseInt(totalCoinElement.innerText);
    if (totalCoin < 20) {
      alert("You don't have sufficient coins");
      return;
    }

    // console.log(totalCoin);
    let currentCoin = totalCoin - 20;

    totalCoinElement.innerText = currentCoin;
    alert("You clicked " + cardTitle + " and calling on " + number);

    // coin count

    console.log(currentCoin);
  });
}
