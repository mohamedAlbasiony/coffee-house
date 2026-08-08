document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const menuBars = document.querySelector(".menu-bars");
  const menuUl = document.querySelector(".nav-links");

  if (menuBars && menuUl) {
    menuBars.addEventListener("click", () => {
      menuUl.classList.toggle("open");
    });
  }

  // 2. Product Counters (Prevents Negative Values)
  const productBoxes = document.querySelectorAll(".buy-coffe .box-buy");

  productBoxes.forEach((box) => {
    const plusBtn = box.querySelector(".plus-btn");
    const minsBtn = box.querySelector(".mins-btn");
    const countDisplay = box.querySelector(".count-display");
    let count = 0;

    plusBtn.addEventListener("click", () => {
      count++;
      countDisplay.textContent = count;
    });

    minsBtn.addEventListener("click", () => {
      if (count > 0) {
        count--;
        countDisplay.textContent = count;
      }
    });
  });

  // 3. Dynamic Login Modal
  const btnLogin = document.querySelector("#btn-login");

  if (btnLogin) {
    btnLogin.addEventListener("click", () => {
      // Overlay
      const overLay = document.createElement("div");
      overLay.className = "popup-shadow";
      document.body.appendChild(overLay);

      // Parent Modal Container
      const parentElement = document.createElement("div");
      parentElement.className = "parent-element";

      // Close Button (X)
      const closeBtn = document.createElement("span");
      closeBtn.className = "close-login";
      closeBtn.textContent = "✕";
      parentElement.appendChild(closeBtn);

      // Heading
      const heading = document.createElement("h2");
      heading.textContent = "Login";
      parentElement.appendChild(heading);

      // Form Element
      const form = document.createElement("form");

      // Email Input
      const divText = document.createElement("div");
      const inputText = document.createElement("input");
      inputText.type = "text";
      inputText.placeholder = "Write your Email";
      divText.appendChild(inputText);
      form.appendChild(divText);

      // Password Input
      const divPassword = document.createElement("div");
      const inputPassword = document.createElement("input");
      inputPassword.type = "password";
      inputPassword.placeholder = "Write your Password";
      divPassword.appendChild(inputPassword);
      form.appendChild(divPassword);

      // Remember Me & Forgot Password Flex Row
      const radioText = document.createElement("div");
      radioText.className = "radio-text";

      const flexDiv = document.createElement("div");
      const inputCheckbox = document.createElement("input");
      inputCheckbox.type = "checkbox";
      inputCheckbox.id = "rem";

      const label = document.createElement("label");
      label.htmlFor = "rem";
      label.textContent = " Remember";

      flexDiv.appendChild(inputCheckbox);
      flexDiv.appendChild(label);

      const forgotP = document.createElement("p");
      forgotP.textContent = "Forgot password?";

      radioText.appendChild(flexDiv);
      radioText.appendChild(forgotP);
      form.appendChild(radioText);

      // Submit Button
      const submitBtn = document.createElement("button");
      submitBtn.type = "button";
      submitBtn.className = "btn-click";
      submitBtn.textContent = "Login";
      form.appendChild(submitBtn);

      parentElement.appendChild(form);

      // Sign Up Link
      const bottomP = document.createElement("p");
      bottomP.style.textAlign = "center";
      bottomP.style.marginTop = "15px";
      bottomP.innerHTML = "Don't have an account? <a href='#' style='color: var(--maincolor); font-weight: bold;'>Sign Up</a>";
      parentElement.appendChild(bottomP);

      document.body.appendChild(parentElement);

      // Close Logic Function
      const closeModal = () => {
        overLay.remove();
        parentElement.remove();
      };

      closeBtn.addEventListener("click", closeModal);
      overLay.addEventListener("click", closeModal);
    });
  }

  // 4. Gallery Lightbox Modal
  const galleryImages = document.querySelectorAll(".gallary .our-photo img");

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      // Overlay
      const overLay = document.createElement("div");
      overLay.className = "popup-shadow";
      document.body.appendChild(overLay);

      // Popup Box
      const popupBox = document.createElement("div");
      popupBox.className = "popup-Box";

      // Image
      const popupImg = document.createElement("img");
      popupImg.src = img.src;
      popupBox.appendChild(popupImg);

      // Close Button
      const closeSpan = document.createElement("span");
      closeSpan.className = "close-btn";
      closeSpan.textContent = "✕";
      popupBox.appendChild(closeSpan);

      // Text Content
      const heading = document.createElement("h1");
      heading.textContent = "Turkish Coffee";
      popupBox.appendChild(heading);

      const desc = document.createElement("p");
      desc.textContent =
        "With my coffee, I’m strong enough to destroy you, and hot to burn you. Life is too short, it’s just enough for a coffee.";
      popupBox.appendChild(desc);

      document.body.appendChild(popupBox);

      // Close Logic
      const closePopup = () => {
        popupBox.remove();
        overLay.remove();
      };

      closeSpan.addEventListener("click", closePopup);
      overLay.addEventListener("click", closePopup);
    });
  });
});