# 🛡️ Security Guide: Protecting Your API Key

Since your website is a client-side application (hosted on GitHub Pages), your API key is **publicly visible** to anyone who inspects the website's code or network traffic. This is normal for this type of app, but it means you **MUST** restrict the key to prevent abuse.

## 🚨 CRITICAL: Configure Google Cloud Restrictions

**If you do not do this, your key will likely be revoked again.**

1.  **Go to Google Cloud Console:**
    *   Visit [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials).
    *   Make sure you have selected the correct project (top left).

2.  **Select Your Key:**
    *   Click on the name of the API key you are using (the one starting with `AIza...`).

3.  **Set Application Restrictions:**
    *   Under **"Application restrictions"**, select **Websites (HTTP referrers)**.
    *   (Do NOT select "IP addresses" or "None").

4.  **Add Website Restrictions:**
    *   Click **"Add an item"** under "Website restrictions".
    *   Add your GitHub Pages URL with a wildcard:
        *   `https://shashh-hash.github.io/*` (Replace `shashh-hash` with your actual username if different)
    *   Add your local development URL (so it works while you code):
        *   `http://localhost:5173/*`
        *   `http://localhost:3000/*`

5.  **Save:**
    *   Click the **Save** button.

## ✅ How Verification Works
*   **Google checks the "Referer" header** of every request.
*   If a request comes from `https://shashh-hash.github.io/`, Google **ALLOWS** it.
*   If a hacker copies your key and tries to use it from `https://evil-hacker.com` or a script, Google **BLOCKS** it.

## ⚠️ Important Note on `docs/` Folder
The `docs/` folder contains the *built* version of your site. It includes minified code where your API key is embedded.
*   **Do not worry** if you see the key in `docs/assets/...`. This is expected.
*   **DO NOT** commit the `.env` file.
*   **DO** rely on the restrictions set in step 3 above.

