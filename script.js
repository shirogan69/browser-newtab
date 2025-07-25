function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString([], { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

function updateGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    
    if (hour < 12) {
        greetingElement.textContent = 'Good morning';
    } else if (hour < 17) {
        greetingElement.textContent = 'Good afternoon';
    } else {
        greetingElement.textContent = 'Good evening';
    }
}

function handleSearch(event) {
    if (event.key === 'Enter') {
        const query = event.target.value.trim();
        if (query) {
            // Check for search tags
            if (query.startsWith('/ppx ')) {
                // Perplexity
                const q = query.slice(5).trim();
                window.location.href = 'https://www.perplexity.ai/search?q=' + encodeURIComponent(q);
            } else if (query.startsWith('/r ')) {
                // Reddit
                const q = query.slice(3).trim();
                window.location.href = 'https://www.reddit.com/search/?q=' + encodeURIComponent(q);
            } else if (query.startsWith('/bing ')) {
                // Bing
                const q = query.slice(6).trim();
                window.location.href = 'https://www.bing.com/search?q=' + encodeURIComponent(q);
            } else if (query.startsWith('/yt ')) {
                // YouTube
                const q = query.slice(4).trim();
                window.location.href = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);
            } else if (query.startsWith('/g ')) {
                // Google
                const q = query.slice(3).trim();
                window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(q);
            } else if (query.startsWith('/wiki ')) {
                // Wikipedia
                const q = query.slice(6).trim();
                window.location.href = 'https://en.wikipedia.org/wiki/Special:Search?search=' + encodeURIComponent(q);
            } else if (query.includes('.') && !query.includes(' ')) {
                // Looks like a URL
                window.location.href = query.startsWith('http') ? query : 'https://' + query;
            } else {
                // Default: Google search
                window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
            }
        }
    }
}

// Dynamic background based on time
function updateBackground() {
    const hour = new Date().getHours();
    const body = document.body;
    
    if (hour >= 6 && hour < 12) {
        // Morning
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    } else if (hour >= 12 && hour < 17) {
        // Afternoon
        body.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
    } else if (hour >= 17 && hour < 21) {
        // Evening
        body.style.background = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
    } else {
        // Night
        body.style.background = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
    }
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set up search functionality
    document.getElementById('searchBox').addEventListener('keypress', handleSearch);
    
    // Update time every second
    updateTime();
    setInterval(updateTime, 1000);
    
    // Update greeting
    updateGreeting();
    
    // Update background
    updateBackground();
});
