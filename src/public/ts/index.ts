document.addEventListener("DOMContentLoaded", () => {
  // specify the class name of the logout button
  const logoutButton = document.querySelector(".logoutButton");

  console.log(logoutButton);

  if (logoutButton) {
    logoutButton.addEventListener("click", async () => {
      const confirmLogout = confirm("Are you sure you want to logout?");
      if (confirmLogout) {
        try {
          const response = await fetch("http://localhost:3001/auth/logout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            }
          });

          if (response.ok) {
            alert("Logged out successfully!");
          } else {
            alert("Logout failed!");
            // window.location.href = "/products";
          }
          window.location.href = "/products";
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred while logging out.");
        }
      }
    });
  }

  const proceedToCheckoutButton = document.querySelector(".proceedToCheckout");

  if (proceedToCheckoutButton) {
    proceedToCheckoutButton.addEventListener("click", () => {
      window.location.href = "/checkout";
    });
  }

  const placeOrderButton = document.querySelector(".placeOrder");
  if (placeOrderButton) {
    placeOrderButton.addEventListener("click", async () => {
      try {
        const response = await fetch("http://localhost:3001/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (response.ok) {
          alert("Proceeded to checkout successfully!");
          window.location.href = "/products";
        } else {
          alert("Proceed to checkout failed!");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while proceeding to checkout.");
      }
    });
  }
});

async function updateCart(productId: number): Promise<void> {
  const quantity = document.getElementById(`quantity-${productId}`) as HTMLInputElement;
  const quantityValue = quantity.value;

  try {
    const response = await fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ productID: productId, quantity: parseInt(quantityValue) })
    });

    if (response.ok) {
      alert("Cart updated successfully!");
      if (window.location.href.includes("/cart")) {
        window.location.reload();
      }
    } else {
      alert("Cart update failed!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while updating quantity.");
  }
}
window.updateCart = updateCart;

async function deleteCart(productId: number): Promise<void> {
  try {
    const response = await fetch(`http://localhost:3001/cart/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      alert("Product deleted successfully!");
      window.location.href = "/cart";
    } else {
      alert("Product deletion failed!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while deleting product.");
  }
}
window.deleteCart = deleteCart;
