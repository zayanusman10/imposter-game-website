# Imposter Game Website

Publication website for Imposter Game app, featuring Privacy Policy, Terms of Service, and app information.

## Setup

```bash
cd imposter-game-website
npm install
npm start
```

## Build for Production

```bash
npm run build
```

The build folder will contain static files ready for deployment.

## Pages

- **/** - Home page with app features and download links
- **/privacy** - Privacy Policy
- **/terms** - Terms of Service
- **/support** - FAQ and contact information

## Deployment

The built files can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront

## Customization

### Update Store Links
Edit `src/components/Footer.js` and `src/pages/Home.js` to add your actual App Store and Google Play links.

### Update Contact Email
The contact email `theimpostergameonline@gmail.com` is used throughout. Update in:
- `src/pages/PrivacyPolicy.js`
- `src/pages/TermsOfService.js`
- `src/pages/Support.js`
- `src/components/Footer.js`

### Add Logo/Favicon
Replace files in `public/` folder:
- `favicon.ico`
- `logo192.png`
- `logo512.png`

## Design

The website uses the same Kodak Cinema theme as the app:
- Dark background (#0a0a0a)
- Amber/gold accent (#FFB800)
- Film perforation aesthetic
- Clean, modern typography
