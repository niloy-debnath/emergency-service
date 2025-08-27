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
  // Click Event

  callButton.addEventListener("click", function () {
    let cardTitle =
      callButton.parentNode.parentNode.childNodes[3].childNodes[1].innerText;

    let number =
      callButton.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

    let totalCoinElement = document.getElementById("total-coin");

    let totalCoin = parseInt(totalCoinElement.innerText);

    if (totalCoin < 20) {
      alert("You don't have sufficient coins");
      return;
    }

    let currentCoin = totalCoin - 20;

    totalCoinElement.innerText = currentCoin;
    alert("Calling " + cardTitle + " " + number + " you have " + totalCoin);

    let historyCardContainer = document.getElementById(
      "history-card-container"
    );
    // console.log(historyCardContainer);

    const newCallHistory = document.createElement("div");

    newCallHistory.innerHTML = `
       <div
            class="bg-[#FAFAFA] p-4 rounded-lg flex justify-between mt-3 items-center"
          >
            <div>
              <h1 class="font-semibold">${cardTitle}</h1>
              <h2 class="text-[#5C5C5C] hind-madurai-regular">${number}</h2>
            </div>
            <div>
              <h1>Time</h1>
            </div>
          </div>
    `;

    historyCardContainer.append(newCallHistory);
  });
}

const clearButton = document.getElementById("clear-btn");

clearButton.addEventListener("click", function () {
  let historyCardContainer = document.getElementById("history-card-container");
  historyCardContainer.innerHTML = "";
});
