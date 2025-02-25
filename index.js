function createStars() {
    const starsContainer = document.getElementById('stars');
    starsContainer.innerHTML = '';
    
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const starCount = isMobile ? 100 : 200; // Reduced mobile count
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Mobile-specific settings
        if (isMobile) {
            star.style.width = '1px';
            star.style.height = '1px';
            star.style.background = 'rgba(255, 215, 0, 0.7)';
        } else {
            const size = Math.random() * 3 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
        }
        /*
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
        */
        const size = isMobile ? Math.random() * 2 + 1 : Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
    
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

window.onload = createStars;

function showCard() {
    const name = document.getElementById('nameInput').value;
    if (!name) return;

    document.querySelector('.input-form').style.display = 'none';
    document.querySelector('.card').style.display = 'block';
    document.getElementById('userName').textContent = name;
}


function createRandomLanterns() {
    const container = document.querySelector('.lanterns-container');
    const lanterns = ['🏮', '🪔', '🔅', '🌟', '🌙'];
    
    for (let i = 0; i < 8; i++) {
        const lantern = document.createElement('div');
        lantern.className = 'lantern';
        
        // Random position
        const isLeft = Math.random() > 0.5;
        const position = Math.random() * 90 + 5;
        lantern.style[isLeft ? 'left' : 'right'] = position + '%';
        lantern.style.top = Math.random() * 90 + 5 + '%';
        
        // Random animation properties
        lantern.style.animationDuration = Math.random() * 3 + 3 + 's';
        lantern.style.animationDelay = Math.random() * 2 + 's';
        lantern.style.fontSize = Math.random() * 0.8 + 1.5 + 'em';
        lantern.style.opacity = Math.random() * 0.4 + 0.6;
        
        // Random lantern symbol
        lantern.textContent = lanterns[Math.floor(Math.random() * lanterns.length)];
        
        container.appendChild(lantern);
    }
}

window.onload = function() {
    createStars();
    createRandomLanterns();
};