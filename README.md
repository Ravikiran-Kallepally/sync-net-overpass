sync-net is a Chrome Extension designed to bridge the gap between workstations
It enables real-time synchronization of code snippets and error logs between devices signed into the same Google account.

Project Overview
Developed to eliminate manual data entry in multi-device workflows, this project serves as a distributed clipboard utilizing the Chrome ecosystem for secure, zero-config data transport.

How It Works
Capture: Users highlight text and use the Context Menu ("Push to Sync-Net") or paste directly into the popup.

Transport: The background script pushes data to chrome.storage.sync.

Sync: Google’s infrastructure propagates the data to all signed-in browser instances.

Consume: The second device detects the onChanged event, updates the UI instantly, and allows a one-click "Copy Latest" to the system clipboard.

Technical Stack
Manifest V3: Modern extension architecture using Service Workers.

Storage API: Utilizes the sync area for cross-device persistence.

JavaScript (ES6): Handles asynchronous state updates and DOM manipulation.

Setup
Navigate to chrome://extensions/.

Enable Developer Mode.

Load Unpacked the project folder on both devices.

Security
Data is transmitted via Google’s encrypted channels. No external servers or third-party APIs are used, ensuring a private, authenticated bridge
