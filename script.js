

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


