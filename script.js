// Filter blog posts by category
function filterPostsByCategory(category) {
  const posts = document.querySelectorAll(".blog-card");
  posts.forEach(post => {
    const postCategory = post.querySelector(".blog-category").textContent.toLowerCase();
    if (category === "all" || postCategory.includes(category.toLowerCase())) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}

// Newsletter Subscribe Button
document.addEventListener("DOMContentLoaded", () => {
  const subscribeButton = document.querySelector(".newsletter-button");
  const emailInput = document.querySelector(".newsletter-input");

  if (subscribeButton && emailInput) {
    subscribeButton.addEventListener("click", () => {
      const email = emailInput.value.trim();

      if (email === "") {
        alert("⚠️ Please enter your email before subscribing.");
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("❌ Please enter a valid email address.");
      } else {
        alert(`✅ Thank you for subscribing, ${email}!`);
        emailInput.value = ""; // clear input
      }
    });
  }
});
