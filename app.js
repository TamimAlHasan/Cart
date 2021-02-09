// Inrease Quantity
const IncBtn1 = document.getElementById("increment-one");

IncBtn1.addEventListener("click", function () {
    const quantity1 = parseFloat(
        document.getElementById("quantity-one").value);

    const price1 = parseFloat(
        document.getElementById("price-one").innerText);

    const sub = parseFloat(
        document.getElementById("subtotal").innerText);

    const Total = parseFloat(
        document.getElementById("total").innerText);

    const Tax = parseFloat(
        document.getElementById("tax").innerText);

    // Update amount
    document.getElementById("quantity-one").value = quantity1 + 1;
    document.getElementById("price-one").innerText = price1 + 1200;
    const subTotal = document.getElementById("subtotal").innerText = sub + 1200;
    const totalTax = document.getElementById("tax").innerText = Tax + (1200 * 0.1);
    document.getElementById("total").innerText = totalTax + subTotal;
});

const IncBtn2 = document.getElementById("increment-two");

IncBtn2.addEventListener("click", function () {
    const quantity2 = parseFloat(
        document.getElementById("quantity-two").value);

    const price2 = parseFloat(
        document.getElementById("price-two").innerText);

    const sub = parseFloat(
        document.getElementById("subtotal").innerText);

    const Total = parseFloat(
        document.getElementById("total").innerText);

    const Tax = parseFloat(
        document.getElementById("tax").innerText);

    // Update amount
    document.getElementById("quantity-two").value = quantity2 + 1;
    document.getElementById("price-two").innerText = price2 + 50;
    const subTotal = document.getElementById("subtotal").innerText = sub + 50;
    const totalTax = document.getElementById("tax").innerText = Tax + (50 * 0.1);
    document.getElementById("total").innerText = totalTax + subTotal;
});



// Decrease Quantity
const decBtn1 = document.getElementById("decrement-one");

decBtn1.addEventListener("click", function () {
    const quantity1 = parseFloat(
        document.getElementById("quantity-one").value);

    const price1 = parseFloat(
        document.getElementById("price-one").innerText);

    const sub = parseFloat(
        document.getElementById("subtotal").innerText);

    const Total = parseFloat(
        document.getElementById("total").innerText);

    const Tax = parseFloat(
        document.getElementById("tax").innerText);

    // Update amount
    if (quantity1 == 0) {
        document.getElementById("quantity-one").value = quantity1;
    }
    else {
        document.getElementById("quantity-one").value = quantity1 - 1;
        document.getElementById("price-one").innerText = price1 - 1200;
        const subTotal = document.getElementById("subtotal").innerText = sub - 1200;
        const totalTax = document.getElementById("tax").innerText = Tax - (1200 * 0.1);
        document.getElementById("total").innerText = Total - ((1200 * 0.1) + 1200);
    }
});

const decBtn2 = document.getElementById("decrement-two");

decBtn2.addEventListener("click", function () {
    const quantity2 = parseFloat(
        document.getElementById("quantity-two").value);

    const price2 = parseFloat(
        document.getElementById("price-two").innerText);

    const sub = parseFloat(
        document.getElementById("subtotal").innerText);

    const Total = parseFloat(
        document.getElementById("total").innerText);

    const Tax = parseFloat(
        document.getElementById("tax").innerText);

    // Update amount
    if (quantity2 == 0) {
        document.getElementById("quantity-two").value = quantity2;
    }
    else {
        document.getElementById("quantity-two").value = quantity2 - 1;
        document.getElementById("price-two").innerText = price2 - 50;
        const subTotal = document.getElementById("subtotal").innerText = sub - 50;
        const totalTax = document.getElementById("tax").innerText = Tax - (50 * 0.1);
        document.getElementById("total").innerText = Total - ((50 * 0.1) + 50);
    }
});

// Remove event
const remove1 = document.getElementById("remove-one");
remove1.addEventListener("click", function () {
    const product1 = document.getElementById("product-one");
    product1.style.display = "none";

    const price1 = parseFloat(
        document.getElementById("price-one").innerText);

    const sub = parseFloat(
        document.getElementById("subtotal").innerText);

    const Total = parseFloat(
        document.getElementById("total").innerText);

    const Tax = parseFloat(
        document.getElementById("tax").innerText);

    document.getElementById("subtotal").innerText = sub - price1;
    document.getElementById("tax").innerText = Tax - (price1 * 0.1);
    document.getElementById("total").innerText = Total - (price1 * 0.1 + price1);


});

const remove2 = document.getElementById("remove-two");
remove2.addEventListener("click", function () {
    const product2 = document.getElementById("product-two");
    product2.style.display = "none";

    const price2 = parseFloat(
        document.getElementById("price-two").innerText);

    const sub = parseFloat(
        document.getElementById("subtotal").innerText);

    const Total = parseFloat(
        document.getElementById("total").innerText);

    const Tax = parseFloat(
        document.getElementById("tax").innerText);

    document.getElementById("subtotal").innerText = sub - price2;
    document.getElementById("tax").innerText = Tax - (price2 * 0.1);
    document.getElementById("total").innerText = Total - (price2 * 0.1 + price2);
});

