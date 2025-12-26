# friend.py
"""
Friend module for DynaBlox Dashboard.

Handles:
- Loading added friends
- Adding/removing friends
- Syncing status
- Preparing data for frontend (storage.py)
"""

import json
import os

# Optional: path to store friends data locally (can be adjusted if needed)
DATA_FILE = "friends_data.json"

def ensure_file():
    """Ensure the data file exists."""
    if not os.path.exists(DATA_FILE):
        with open(DATA_FILE, "w") as f:
            json.dump([], f)

def load_friends():
    """Return list of added friends."""
    ensure_file()
    with open(DATA_FILE, "r") as f:
        return json.load(f)

def save_friends(friends):
    """Overwrite the friends data."""
    with open(DATA_FILE, "w") as f:
        json.dump(friends, f, indent=2)

def add_friend(name, avatar=None, online=False):
    """Add a friend if not already added."""
    friends = load_friends()
    # Check if friend already exists
    if any(f["name"].lower() == name.lower() for f in friends):
        return None  # Already added
    friend_id = max([f["id"] for f in friends], default=0) + 1
    new_friend = {
        "id": friend_id,
        "name": name,
        "avatar": avatar if avatar else name[0].upper(),
        "online": online
    }
    friends.append(new_friend)
    save_friends(friends)
    return new_friend

def remove_friend(friend_id):
    """Remove friend by ID."""
    friends = load_friends()
    friends = [f for f in friends if f["id"] != friend_id]
    save_friends(friends)
    return friends

def update_status(friend_id, online):
    """Update online status for a friend."""
    friends = load_friends()
    for f in friends:
        if f["id"] == friend_id:
            f["online"] = online
            break
    save_friends(friends)
    return f if 'f' in locals() else None

def get_friend(friend_id):
    """Return a friend by ID."""
    friends = load_friends()
    for f in friends:
        if f["id"] == friend_id:
            return f
    return None

# Optional: function to export friends for JS storage
def export_for_js():
    """Return friends data formatted for storage.py (Python)."""
    friends = load_friends()
    return json.dumps(friends)

# Example usage
if __name__ == "__main__":
    print("Adding friend:", add_friend("Alice", online=True))
    print("Current friends:", load_friends())
    print("Updating status:", update_status(1, False))
    print("Removing friend:", remove_friend(1))