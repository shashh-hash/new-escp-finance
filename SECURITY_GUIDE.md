# 🛡️ Security Guide: Protecting Your API Key

Since your website is a client-side application (hosted on GitHub Pages), your API key is technically visible to anyone who inspects the website's code.

**To make it "super safe", you MUST configure restrictions in Google Cloud Console.**

## 🚨 Critical Step: Restrict Key Usage

This is the only way to prevent others from stealing your key and using your quota.

1.  Go to the [Google Cloud Console - Credentials](https://console.cloud.google.com/apis/credentials).
2.  Click on your **API Key** (the one you created).
3.  Under **"Application restrictions"**, select **Websites (HTTP referrers)**.
4.  Under **"Website restrictions"**, click **Add Item**.
5.  Add your website URL:
    *   `https://shashh-hash.github.io/*`
    *   `http://localhost:5173/*` (for your local testing)
6.  Click **Save**.

## ✅ What this does
*   **Google will REJECT** any request using your key that doesn't come from your specific website.
*   Even if a hacker steals your key, **they cannot use it**.

## 🔒 Other Security Measures Implemented
*   **Content Security Policy (CSP):** Added to `index.html` to prevent malicious scripts from running.
*   **Rate Limiting:** Your website limits users to 50 searches/day to prevent spam.
*   **GitHub Secrets:** Your key is stored in GitHub Secrets, not in the public code repository.
