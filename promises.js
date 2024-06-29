const cart = ["shoes", "pants", "panjabi"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletStatus();
    });
  });
});

createOrder(cart)
  .then(function (orderId) {
    //return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    //return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    //return updateWalletStatus(paymentInfo);
  });

//! Creating a Promise
//! Producer
const carts = ["shoes", "pants", "panjabi"];

const promise = createOrder(carts);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("This will always be called! In rejected or resolve promise");
  });
function validateCart(cart) {
  return true;
}

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //*createOrder
    //*ValidateCart
    //*orderId
    if (!validateCart(cart)) {
      const err = new Error("Invalid cart");
      reject(err);
    }
    //*Logic for CreateOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 4000);
    }
  });

  return pr;
}
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}
