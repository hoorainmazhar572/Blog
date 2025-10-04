// script.js

// Mock blog data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with React Development",
        excerpt: "Learn the fundamentals of React and build your first application with this comprehensive guide for beginners.",
        date: "March 15, 2024",
        category: "Web Development",
        readTime: "5 min read",
        imagePrompt: "React development setup with code editor and browser showing components"
    },
    {
        id: 2,
        title: "The Future of Artificial Intelligence",
        excerpt: "Exploring the latest advancements in AI technology and what the future holds for machine learning applications.",
        date: "March 10, 2024",
        category: "Technology",
        readTime: "8 min read",
        imagePrompt: "Futuristic AI concept with neural networks and digital brain visualization"
    },
    {
        id: 3,
        title: "Healthy Eating Habits for Programmers",
        excerpt: "Nutrition tips and meal planning strategies for developers who spend long hours at the computer.",
        date: "March 5, 2024",
        category: "Health & Wellness",
        readTime: "6 min read",
        imagePrompt: "Healthy food spread with fruits, vegetables and laptop on desk"
    },
    {
        id: 4,
        title: "CSS Grid vs Flexbox: When to Use Which",
        excerpt: "A practical guide to choosing the right CSS layout method for your web projects with real-world examples.",
        date: "February 28, 2024",
        category: "Web Design",
        readTime: "7 min read",
        imagePrompt: "CSS grid and flexbox visual comparison with code examples"
    },
    {
        id: 5,
        title: "Building a Personal Brand as a Developer",
        excerpt: "Strategies for creating a strong online presence and standing out in the competitive tech industry.",
        date: "February 22, 2024",
        category: "Career",
        readTime: "9 min read",
        imagePrompt: "Developer portfolio website with clean design and professional branding"
    },
    {
        id: 6,
        title: "Introduction to TypeScript for JavaScript Developers",
        excerpt: "Transition smoothly from JavaScript to TypeScript with this beginner-friendly tutorial and practical examples.",
        date: "February 18, 2024",
        category: "Programming",
        readTime: "10 min read",
        imagePrompt: "TypeScript code editor with type annotations and compilation process"
    }
];

function filterPosts(searchTerm) {
    return blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

function renderPosts(posts) {
    const postsContainer = document.getElementById('blog-posts-container');
    if (!postsContainer) return;
    
    if (posts.length === 0) {
        postsContainer.innerHTML = `
            <div class="no-results">
                <p>No blog posts found matching your search.</p>
            </div>
        `;
        return;
    }

    const postsHTML = posts.map(post => `
        <article class="blog-card">
            <div class="blog-image">
                <img 
                    src="https://via.placeholder.com/400x300/3b82f6/ffffff?text=${encodeURIComponent(post.title)}" 
                    alt="${post.title} - ${post.imagePrompt}"
                    class="blog-img"
                    loading="lazy"
                />
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-date">${post.date}</span>
                    <span class="blog-category ${post.category.toLowerCase().replace(/\s+/g, '-')}">${post.category}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-footer">
                    <span class="blog-read-time">${post.readTime}</span>
                    <a href="#" class="blog-read-more">Read More →</a>
                </div>
            </div>
        </article>
    `).join('');

    postsContainer.innerHTML = postsHTML;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const filtered = filterPosts(e.target.value);
            renderPosts(filtered);
        });
    }
    
    // Render initial posts
    render