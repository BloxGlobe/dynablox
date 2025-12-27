// Home page

function initHome(container) {
    container.innerHTML = `
        <h1 class="page-title">Dashboard</h1>

        <!-- Friends Section -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title">Friends</h2>
            </div>
            <div class="friends-container" id="friendsContainer">
                <div class="friend-item add-friend" onclick="addFriend()">
                    <div class="friend-avatar">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </div>
                    <span class="friend-name">Add Friend</span>
                </div>
            </div>
        </section>

        <!-- Recommended Section -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title">Recommended For You</h2>
            </div>
            <div class="library-grid" id="recommendedGrid"></div>
        </section>

        <!-- Resources Section -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title">Resources</h2>
            </div>
            <div class="continue-grid" id="resourcesGrid"></div>
        </section>
    `;

    loadFriends();
    loadRecommended();
    loadResources();
}

function addFriend() {
    const username = prompt('Enter username to add:');
    if (username) {
        console.log('Adding friend:', username);
        // Add API call here
    }
}

async function loadFriends() {
    const container = document.getElementById('friendsContainer');
    if (!container) return;

    // Mock friends data
    const friends = [
        { id: 1, name: 'John', online: true },
        { id: 2, name: 'Sarah', online: false },
        { id: 3, name: 'Mike', online: true }
    ];

    friends.forEach(friend => {
        const friendEl = document.createElement('div');
        friendEl.className = `friend-item ${friend.online ? 'online' : ''}`;
        friendEl.innerHTML = `
            <div class="friend-avatar">${friend.name[0]}</div>
            <span class="friend-name">${friend.name}</span>
        `;
        container.appendChild(friendEl);
    });
}

async function loadRecommended() {
    const container = document.getElementById('recommendedGrid');
    if (!container) return;

    // Mock recommended data
    const items = [
        { id: 1, title: 'Math Notes', rating: 95, icon: '📐' },
        { id: 2, title: 'Physics Guide', rating: 92, icon: '⚛️' },
        { id: 3, title: 'Chemistry 101', rating: 88, icon: '🧪' }
    ];

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'library-card';
        card.innerHTML = `
            <div class="card-image">${item.icon}</div>
            <div class="card-content">
                <div class="card-title">${item.title}</div>
                <div class="card-rating">
                    <span class="rating-icon">👍</span>
                    <span>${item.rating}% Rating</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

async function loadResources() {
    const container = document.getElementById('resourcesGrid');
    if (!container) return;

    // Mock resources data
    const items = [
        { id: 1, title: 'Study Guide', icon: '📚' },
        { id: 2, title: 'Practice Tests', icon: '📝' }
    ];

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'continue-card';
        card.innerHTML = `
            <div class="card-image">${item.icon}</div>
            <div class="card-content">
                <div class="card-title">${item.title}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

window.initHome = initHome;