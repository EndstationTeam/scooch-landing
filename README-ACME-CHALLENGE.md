# ACME Challenge Setup for Firebase Hosting

This README explains how to serve the ACME challenge file for domain verification (typically used for SSL certificate issuance).

## What's Been Set Up

1. The verification file has been created at:
   ```
   static/.well-known/acme-challenge/puOR9o9huUi-xR7_hePnTpQwdulgj6iLeDULYwgBYpTGCwTkN3adHyhqyuc2GwE3
   ```

2. Firebase Hosting has been configured to serve files from `.well-known/acme-challenge/` with the proper content type.

## Important Notes for Gatsby

1. When Gatsby builds your site, it will copy all files from the `static` directory to the root of the `public` directory, which is what Firebase deploys.

2. Make sure the `puOR9o9huUi-xR7_hePnTpQwdulgj6iLeDULYwgBYpTGCwTkN3adHyhqyuc2GwE3` file contains the actual verification content that your certificate authority is expecting. The current file just contains a placeholder.

## Deployment Steps

1. **Build your Gatsby site**:
   ```
   gatsby build
   ```

2. **Deploy to Firebase**:
   ```
   firebase deploy
   ```

3. **Verify the file is accessible**:
   Visit https://scoochapp.com/.well-known/acme-challenge/puOR9o9huUi-xR7_hePnTpQwdulgj6iLeDULYwgBYpTGCwTkN3adHyhqyuc2GwE3 in your browser to confirm it's being served correctly.

## Troubleshooting

If the file is not accessible after deployment:

1. Ensure the file exists in the `public/.well-known/acme-challenge/` directory after building
2. Check Firebase Hosting configuration in `firebase.json`
3. Verify that the content type is set correctly (should be `text/plain`)
4. Check Firebase Hosting logs for any errors

For more information on Firebase Hosting, see: https://firebase.google.com/docs/hosting 