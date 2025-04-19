// Firebase v11 Modular Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

import { getDatabase, ref, set,update,get} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDokG9WCjg4HKtgC-gyQByFSew1ug3DYRs",
  authDomain: "resturant-website-9288e.firebaseapp.com",
  projectId: "resturant-website-9288e",
  storageBucket: "resturant-website-9288e.firebasestorage.app",
  messagingSenderId: "499831079014",
  appId: "1:499831079014:web:9ab6e872d985b6ef68eda7",
  measurementId: "G-6WBC9Y3RKB"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getDatabase(app);

// 🔐 Sign Up Function
window.handleSignUp = function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => alert("✅ Signup successful!"))
    .catch(error => alert("❌ " + error.message));
};

// 🔐 Login Function
window.handleLogin = function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => alert("✅ Login successful!"))
    .catch(error => alert("❌ " + error.message));
};

// 🔐 Google Sign-In Function
window.signInWithGoogle = function () {
  signInWithPopup(auth, provider)
    .then(() => alert("✅ Google sign-in successful!"))
    .catch(error => alert("❌ " + error.message));
};

let addtocart=document.getElementById("addtocart");
let user=document.getElementById("user");
addtocart.onclick=()=>{
  alert("please authorized yourself by clicking user icon")
}
user.onclick=()=>{
  window.location.href="login.html";
}
// Event listener for all Add to Cart buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", function () {
    // Retrieve item data from button's data attributes
    const itemId = this.getAttribute("data-id");
    const itemName = this.getAttribute("data-name");
    const itemPrice = parseFloat(this.getAttribute("data-price"));
    const itemImage = this.getAttribute("data-image");

    // Get the current cart from localStorage (or create a new one if empty)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
      // If item exists, update quantity
      existingItem.quantity += 1;
    } else {
      // Otherwise, add new item to cart
      const newItem = {
        id: itemId,
        name: itemName,
        price: itemPrice,
        image: itemImage,
        quantity: 1
      };
      cart.push(newItem);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${itemName} added to cart!`);
  });
});



const heroSection = document.querySelector(".hero");

  const images = [
    'hero1.jpg',
    'hero2.jpeg',
    'hero3.jpeg'
  ];

  let currentIndex = 0;

  function updateBackground() {
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
  }

  // Next Button
  document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
  });

  // Prev Button
  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBackground();
  });

  // Auto Slide Every 5 Seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
  }, 5000);

  // Initial Background Image
  updateBackground();
  const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
