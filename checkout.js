var checkoutButton = document.getElementById("checkout-button");
 checkoutButton.addEventListener("click", function () {
      Parse.Cloud.run('createCheckoutSession', {cart: localSessionCart})
      .then ( function (session) {
        console.log("session" + session);
        return stripe.redirectToCheckout({sessionId: session.id});
      })
      .then (function (result) {
        if (result.error){
          alert(result.error.message);
        }
      })
      .catch (function (error) {
        console.log("there was an Error: ", error);
        });
    });