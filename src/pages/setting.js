// src/pages/settings.js

// Import CSS for styling
import "../utils/css/setting.css";

export default function renderSettings(container) {
  container.innerHTML = `
    <div class="settings-wrapper">
      <!-- Sidebar -->
      <aside class="settings-sidebar">
        <ul class="settings-menu">
          <li class="settings-item active" data-section="account-info">Account info</li>
          <li class="settings-item" data-section="security">Security</li>
          <li class="settings-item" data-section="privacy">Privacy & content restrictions</li>
          <li class="settings-item" data-section="notifications">Notifications</li>
          <li class="settings-item" data-section="payment">Payment methods</li>
          <li class="settings-item" data-section="subscriptions">Subscriptions</li>
          <li class="settings-item" data-section="parental">Parental controls</li>
          <li class="settings-item" data-section="app-permissions">App permissions</li>
          <li class="settings-item" data-section="browser-preferences">Browser preferences</li>
        </ul>
      </aside>

      <!-- Main content -->
      <div class="settings-main">
        <section id="account-info" class="settings-section active">
          <h2>Account Info</h2>
          <p><strong>Display Name:</strong> <span class="placeholder">[Your Display Name]</span></p>
          <p><strong>Username:</strong> <span class="placeholder">[Your Username]</span></p>
          <p><strong>Phone Number:</strong> <span class="placeholder">[Your Phone]</span></p>
          <p><strong>Email:</strong> <span class="placeholder">[Your Email]</span></p>

          <h3>Login Methods</h3>
          <p><strong>Passkey:</strong> <span class="placeholder">1 passkey(s) added</span></p>
          <p><strong>Password:</strong> <span class="placeholder">******</span></p>

          <h3>Personal</h3>
          <p><strong>Age Group:</strong> <span class="placeholder">21+</span></p>
          <p><strong>Birthday:</strong> <span class="placeholder">Aug 4, 1965</span></p>
          <p><strong>Gender (Optional):</strong> 
            <div class="gender-select">
              <button class="gender-btn selected">♂</button>
              <button class="gender-btn">♀</button>
            </div>
          </p>
          <p><strong>Language:</strong>
            <select class="language-select">
              <option>English (United States)</option>
              <option>Other</option>
            </select>
          </p>
        </section>

        <section id="security" class="settings-section">
          <h2>Security</h2>
          <p>Security settings content goes here...</p>
        </section>

        <section id="privacy" class="settings-section">
          <h2>Privacy & Content Restrictions</h2>
          <p>Privacy content goes here...</p>
        </section>

        <section id="notifications" class="settings-section">
          <h2>Notifications</h2>
          <p>Notification settings content...</p>
        </section>

        <section id="payment" class="settings-section">
          <h2>Payment Methods</h2>
          <p>Payment options content...</p>
        </section>

        <section id="subscriptions" class="settings-section">
          <h2>Subscriptions</h2>
          <p>Subscription settings...</p>
        </section>

        <section id="parental" class="settings-section">
          <h2>Parental Controls</h2>
          <p>Parental controls settings...</p>
        </section>

        <section id="app-permissions" class="settings-section">
          <h2>App Permissions</h2>
          <p>App permissions content...</p>
        </section>

        <section id="browser-preferences" class="settings-section">
          <h2>Browser Preferences</h2>
          <p>Browser preferences content...</p>
        </section>
      </div>
    </div>
  `;

  // Sidebar interaction
  const items = container.querySelectorAll(".settings-item");
  const sections = container.querySelectorAll(".settings-section");

  items.forEach(item => {
    item.addEventListener("click", () => {
      // Update active sidebar
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      // Show corresponding section
      const target = item.dataset.section;
      sections.forEach(section => {
        section.classList.toggle("active", section.id === target);
      });
    });
  });
}
