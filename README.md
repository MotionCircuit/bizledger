# BizLedger

Digital khata, billing and stock app for small businesses in India. Udhar and jama, WhatsApp reminders with UPI QR, bills, stock, offers for customers and reports. Plans are bought through Google Play.

This repository contains the public website of BizLedger (hosted with GitHub Pages): home, pricing, FAQ, about, contact, privacy policy, terms and conditions, refund policy and account deletion instructions.

**Operated by:** MotionCircuit (Proprietor: Nitin), Noorwala, Panipat, Haryana 132103, India
**Contact:** contact.whonithin@gmail.com &middot; +91 90531 55257

## Moving to your own domain
1. Buy the domain, point DNS to GitHub Pages (see GitHub docs).
2. Run `./set-domain.sh yourdomain.com` (updates canonical, sitemap, robots, social image URLs and creates CNAME).
3. Commit, push, enable the custom domain in Repo Settings > Pages and tick "Enforce HTTPS".
4. Switch contact email from Gmail to a domain email (e.g. hello@yourdomain.com) in all pages.


## Design
The website follows the app's design tokens (see the app's `design/tokens/Theme.kt`): red #EB190A, ink #14161B, page #F6F6F7, Inter, ink pill buttons, dark mode. Phone screens on the home page are HTML illustrations; replace with real screenshots if you like. Pricing numbers live in `site.js` (`P` object) and mirror the app's recommended plan ladder: edit them if you change prices in Admin > Plans.
