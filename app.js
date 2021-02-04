// Inrease Quantity
const IncBtn1 = document.getElementById("increment-one");

IncBtn1.addEventListener("click", function () {
    const quantity1 = parseFloat(
        document.getElementById("quantity-one").value);

    const price1 = parseFloat(
        document.getElementById("price-one").innerText);

    const subTotal = parseFloat(
        document.getElementById("subtotal").innerText);


    // Update amount
    document.getElementById("quantity-one").value = quantity1 + 1;
    document.getElementById("price-one").innerText = price1 + 1219;
    document.getElementById("subtotal").innerText = subTotal + 1219;
});

const IncBtn2 = document.getElementById("increment-two");

IncBtn2.addEventListener("click", function () {
    const quantity2 = parseFloat(
        document.getElementById("quantity-two").value);

    const price2 = parseFloat(
        document.getElementById("price-two").innerText);

    const subTotal = parseFloat(
        document.getElementById("subtotal").innerText);

    // Update amount
    document.getElementById("quantity-two").value = quantity2 + 1;
    document.getElementById("price-two").innerText = price2 + 59;
    document.getElementById("subtotal").innerText = subTotal + 59;
});



// Decrease Quantity
const decBtn1 = document.getElementById("decrement-one");

decBtn1.addEventListener("click", function () {
    const quantity1 = parseFloat(
        document.getElementById("quantity-one").value);

    const price1 = parseFloat(
        document.getElementById("price-one").innerText);

    const subTotal = parseFloat(
        document.getElementById("subtotal").innerText);

    // Update amount
    if (quantity1 == 0) {
        document.getElementById("quantity-one").value = quantity1;
        document.getElementById("subtotal").innerText = subTotal;
    }
    else {
        document.getElementById("quantity-one").value = quantity1 - 1;
        document.getElementById("price-one").innerText = price1 - 1219;
        document.getElementById("subtotal").innerText = subTotal - 1219;
    }
});

const decBtn2 = document.getElementById("decrement-two");

decBtn2.addEventListener("click", function () {
    const quantity2 = parseFloat(
        document.getElementById("quantity-two").value);

    const price2 = parseFloat(
        document.getElementById("price-two").innerText);

    const subTotal = parseFloat(
        document.getElementById("subtotal").innerText);

    // Update amount
    if (quantity2 == 0) {
        document.getElementById("quantity-two").value = quantity2;
        document.getElementById("subtotal").innerText = subTotal;
    }
    else {
        document.getElementById("quantity-two").value = quantity2 - 1;
        document.getElementById("price-two").innerText = price2 - 59;
        document.getElementById("subtotal").innerText = subTotal - 59;
    }
});

// Remove event
const remove1 = document.getElementById("remove-one");
remove1.addEventListener("click", function () {
    const product1 = document.getElementById("product-one");
    product1.style.display = "none";

    const price1 = parseFloat(
        document.getElementById("price-one").innerText);

    const subTotal = parseFloat(
        document.getElementById("subtotal").innerText);

    document.getElementById("subtotal").innerText = subTotal - price1;

});

const remove2 = document.getElementById("remove-two");
remove2.addEventListener("click", function () {
    const product2 = document.getElementById("product-two");
    product2.style.display = "none";

    const price2 = parseFloat(
        document.getElementById("price-two").innerText);

    const subTotal = parseFloat(
        document.getElementById("subtotal").innerText);

    document.getElementById("subtotal").innerText = subTotal - price2;
});

