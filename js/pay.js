// let testData = JSON.parse(localStorage.getItem("cart"))||[]
var totalCost = JSON.parse(localStorage.getItem("totalCost"));
function openBox(el) {
  let tempBox = document.querySelector(el);
  if (tempBox.classList.contains("off")) tempBox.classList.remove("off");
  else tempBox.classList.add("off");
}
cartChange();
function cartChange() {
  document.querySelector("#price").innerHTML = `₹${totalCost}`;
  document.querySelector("#totalCost").innerHTML = `₹${totalCost}`;
}
// mapCart(testData);
