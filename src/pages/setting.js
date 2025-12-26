// Settings page

export default function settingsPage(container) {
    container.innerHTML = `
        <h1 class="page-title">Settings</h1>

        <section class="section">
            <div class="settings-group">
                <h2 class="section-title">Account</h2>
                <div class="settings-options">
                    <div class="settings-option">
                        <label>Username</label>
                        <input type="text" value="User" disabled>
                    </div>
                    <div class="settings-option">
                        <label>Email</label>
                        <input type="email" value="user@dynablocks.com" disabled>
                    </div>
                    <button class="btn-primary">Change Password</button>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="settings-group">
                <h2 class="section-title">Preferences</h2>
                <div class="settings-options">
                    <div class="settings-option toggle-option">
                        <label>2006 Mode</label>
                        <input type="checkbox" id="mode2006">
                    </div>
                    <div class="settings-option toggle-option">
                        <label>Dark Theme</label>
                        <input type="checkbox" id="darkTheme" checked>
                    </div>
                    <div class="settings-option toggle-option">
                        <label>Notifications</label>
                        <input type="checkbox" id="notifications" checked>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="settings-group">
                <h2 class="section-title">Privacy</h2>
                <div class="settings-options">
                    <div class="settings-option toggle-option">
                        <label>Show Online Status</label>
                        <input type="checkbox" id="onlineStatus" checked>
                    </div>
                    <div class="settings-option toggle-option">
                        <label>Allow Friend Requests</label>
                        <input type="checkbox" id="friendRequests" checked>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="settings-group">
                <h2 class="section-title">Danger Zone</h2>
                <div class="settings-options">
                    <button class="btn-danger">Delete Account</button>
                    <button class="btn-secondary">Log Out</button>
                </div>
            </div>
        </section>
    `;

    // Add event listeners
    setupSettingsListeners();
}

function setupSettingsListeners() {
    // 2006 Mode toggle
    const mode2006 = document.getElementById('mode2006');
    if (mode2006) {
        mode2006.addEventListener('change', (e) => {
            if (e.target.checked) {
                console.log('2006 Mode enabled');
                // Add logic to enable 2006 mode
            } else {
                console.log('2006 Mode disabled');
            }
        });
    }

    // Dark theme toggle
    const darkTheme = document.getElementById('darkTheme');
    if (darkTheme) {
        darkTheme.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
        });
    }

    // Logout button
    const logoutBtn = document.querySelector('.btn-secondary');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to log out?')) {
                window.location.href = '/login';
            }
        });
    }

    // Delete account button
    const deleteBtn = document.querySelector('.btn-danger');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            if (confirm('Are you ABSOLUTELY sure? This cannot be undone!')) {
                console.log('Delete account requested');
                // Add API call to delete account
            }
        });
    }
}