const item1 = parseFloat(document.getElementById('bag__price-item1').innerText.replace(/[^0-9.-]+/g, ""));
const item2 = parseFloat(document.getElementById('bag__price-item2').innerText.replace(/[^0-9.-]+/g, ""));
const item3 = parseFloat(document.getElementById('bag__price-item3').innerText.replace(/[^0-9.-]+/g, ""));
const item4 = parseFloat(document.getElementById('bag__price-item4').innerText.replace(/[^0-9.-]+/g, ""));

const total = document.getElementById('total');
const totalPrice = document.getElementById('totalPrice');

const totalSum = item1 + item2 + item3 + item4;

total.innerText = totalSum.toLocaleString('ru-RU') + " ₽";
totalPrice.innerText = totalSum.toLocaleString('ru-RU') + " ₽";

const couponButton = document.getElementById('couponButton');
couponButton.addEventListener('click', applyDiscount);

function applyDiscount() {
    const discount = totalSum * 0.2;
    const discountedTotal = totalSum - discount;
    const discountElement = document.getElementById('discount');
    const totalPriceElement = document.getElementById('totalPrice');

    discountElement.innerText = discount.toLocaleString('ru-RU') + " ₽";
    totalPriceElement.innerText = discountedTotal.toLocaleString('ru-RU') + " ₽";

    const newItem1 = document.getElementById('bag__price-item1');
    const discountItem1 = item1 * 0.8;
    newItem1.innerText = discountItem1.toLocaleString('ru-RU') + " ₽";

    const newItem2 = document.getElementById('bag__price-item2');
    const discountItem2 = item2 * 0.8;
    newItem2.innerText = discountItem2.toLocaleString('ru-RU') + " ₽";

    const newItem3 = document.getElementById('bag__price-item3');
    const discountItem3 = item3 * 0.8;
    newItem3.innerText = discountItem3.toLocaleString('ru-RU') + " ₽";

    const newItem4 = document.getElementById('bag__price-item4');
    const discountItem4 = item4 * 0.8;
    newItem4.innerText = discountItem4.toLocaleString('ru-RU') + " ₽";
}