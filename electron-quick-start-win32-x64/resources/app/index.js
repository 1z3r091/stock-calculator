const yield = document.querySelector(".yield-result");
const yieldPerStock = document.querySelector(".yield-per-stock-result");
const buyAmount = document.querySelector(".b-amount");
const sellAmount = document.querySelector(".s-amount");
const buyFees = document.querySelector(".b-fees");
const sellFees = document.querySelector(".s-fees");
const tax = document.querySelector(".tax-amount");

buyAmount.addEventListener("keyup", onEnter);
sellAmount.addEventListener("keyup", onEnter);

const calcBtn = document.querySelector(".calculate");
calcBtn.addEventListener("keyup", onEnter);
calcBtn.onclick = calculate;

function onEnter(event) {
  if (event.key === "Enter") {
    calculate();
    buyAmount.focus();
  }
}

function calculate() {
  let buyAmountVal = buyAmount.value;
  let sellAmountVal = sellAmount.value;
  let buyFeesVal = buyFees.value / 100;
  let sellFeesVal = sellFees.value / 100;
  let taxVal = tax.value / 100;

  let yieldVal =
    ((sellAmountVal -
      buyAmountVal -
      (buyAmountVal * buyFeesVal +
        sellAmountVal * sellFeesVal +
        sellAmountVal * taxVal)) /
      buyAmountVal) *
    100;
  yieldVal = yieldVal.toPrecision(4);

  let yieldPerStockVal = sellAmountVal - buyAmountVal;

  yield.value = yieldVal;
  yieldPerStock.value = yieldPerStockVal;

  yield.style.color = yield.value < 0 ? "blue" : "red";
  yieldPerStock.style.color = yieldPerStock.value < 0 ? "blue" : "red";
}
