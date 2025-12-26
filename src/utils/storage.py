# storage.py
"""
Simple storage module for DynaBlox backend.

Handles saving/loading JSON data for modules like friend.py
"""

import json
import os

def ensure_file(path, default_data=None):
    """Ensure a JSON file exists; if not, create it with default data."""
    if not os.path.exists(path):
        with open(path, "w") as f:
            json.dump(default_data if default_data is not None else [], f, indent=2)

def load_data(path):
    """Load JSON data from a file."""
    ensure_file(path)
    with open(path, "r") as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []

def save_data(path, data):
    """Save JSON-serializable data to a file."""
    with open(path, "w") as f:
        json.dump(data, f, indent=2)

# Example usage for friends.py
if __name__ == "__main__":
    FILE = "friends_data.json"
    
    # Initialize
    ensure_file(FILE)
    
    # Save some test data
    save_data(FILE, [{"id": 1, "name": "Alice", "avatar": "A", "online": True}])
    
    # Load it
    friends = load_data(FILE)
    print(friends)
