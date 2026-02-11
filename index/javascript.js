// Select elements
const plusButtons = document.querySelectorAll(".fa-plus-circle");
const minusButtons = document.querySelectorAll(".fa-minus-circle");
const trashButtons = document.querySelectorAll(".fa-trash-alt");
const heartButtons = document.querySelectorAll(".fa-heart");
const totalPriceEl = document.querySelector(".total");

// Update total price
function updateTotal() {
  let total = 0;

  const products = document.querySelectorAll(".list-products > .card-body");


  products.forEach(product => {
    const unitPrice = parseInt(
      product.querySelector(".unit-price").textContent
    );
    const quantity = parseInt(
      product.querySelector(".quantity").textContent
    );

    total += unitPrice * quantity;
  });

  totalPriceEl.textContent = `${total} $`;
}

// Increase quantity
plusButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const quantityEl = btn.nextElementSibling;
    quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
    updateTotal();
  });
});

// Decrease quantity
minusButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const quantityEl = btn.previousElementSibling;
    let quantity = parseInt(quantityEl.textContent);

    if (quantity > 0) {
      quantityEl.textContent = quantity - 1;
      updateTotal();
    }
  });
});

// Delete product
trashButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".card-body").remove();
    updateTotal();
  });
});

// Like product (heart toggle)
heartButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");

    if (btn.classList.contains("liked")) {
      btn.style.color = "red";
    } else {
      btn.style.color = "black";
    }
  });
});

