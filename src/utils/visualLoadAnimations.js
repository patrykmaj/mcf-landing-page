// Auto-animate elements when they come into view
function initVisualLoadAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // Add animate class to trigger the animation
        if (element.classList.contains('fade-in-up') ||
            element.classList.contains('fade-in') ||
            element.classList.contains('slide-up') ||
            element.classList.contains('scale-in')) {
          element.classList.add('animate');
          
          // Stop observing this element after animation triggers
          observer.unobserve(element);
        }
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.fade-in-up, .fade-in, .slide-up, .scale-in'
  );
  
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVisualLoadAnimations);
} else {
  initVisualLoadAnimations();
}

// Re-initialize for dynamically added content
window.reinitVisualLoadAnimations = initVisualLoadAnimations;

export { initVisualLoadAnimations };
