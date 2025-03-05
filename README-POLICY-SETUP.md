# Policy Pages Setup

To properly set up the privacy policy and terms of service pages, follow these steps:

## 1. Place HTML Files in Public Folder

Place your HTML files in the `public` folder of your React application:

- `public/privacy.html` - Your privacy policy HTML file
- `public/terms.html` - Your terms of service HTML file

## 2. File Structure

The HTML files should be properly formatted HTML documents. Make sure they don't include `<html>`, `<head>`, or `<body>` tags, as they will be inserted into the React component's container.

Example of a properly formatted policy HTML file:

```html
<h2>1. Introduction</h2>
<p>This Privacy Policy explains how we collect, use, and disclose your information...</p>

<h2>2. Information We Collect</h2>
<p>We may collect the following types of information...</p>

<!-- Rest of your policy content -->
```

## 3. Styling

The policy components include basic styling, but you may want to add additional CSS to match your site's design. You can customize the styling in the `PrivacyPolicy.tsx` and `TermsOfService.tsx` components.

## 4. Links

The policy pages are now linked in both the desktop and mobile footers. The links will direct users to:
- `/privacy` for the Privacy Policy
- `/terms` for the Terms of Service

## 5. Testing

After placing your HTML files in the public folder, test both links to ensure the content loads correctly and displays with proper formatting. 