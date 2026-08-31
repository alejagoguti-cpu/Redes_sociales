# Deployment Guide - Bitaxus Community Manager

Complete guide for deploying the Bitaxus Community Manager guide to GitHub Pages and other platforms.

## Table of Contents
1. [GitHub Pages Deployment](#github-pages-deployment)
2. [Local Development](#local-development)
3. [Self-Hosted Deployment](#self-hosted-deployment)
4. [Domain Configuration](#domain-configuration)
5. [Troubleshooting](#troubleshooting)

---

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

The repository is already configured for automatic GitHub Pages deployment.

**Current Setup:**
- Repository: `alejagoguti-cpu/Redes_sociales`
- Deployment Branch: `gh-pages`
- Live URL: `https://alejagoguti-cpu.github.io/Redes_sociales/`

**What Gets Deployed:**
- `bitaxus-cm-guide.html` (Main guide)
- `calendar.json` (Content calendar)
- `README.md` (Documentation)

### Manual Deployment Steps

If you need to manually deploy changes to GitHub Pages:

1. **Commit your changes on the main branch:**
   ```bash
   git add .
   git commit -m "feat: Update content and documentation"
   git push origin claude/new-session-g3eot1
   ```

2. **Create/Update gh-pages branch:**
   ```bash
   # Check out the gh-pages branch
   git checkout gh-pages
   
   # Merge changes from main branch
   git merge claude/new-session-g3eot1
   
   # Push to GitHub
   git push -u origin gh-pages
   ```

3. **Verify deployment:**
   - Wait 1-2 minutes for GitHub to process
   - Visit: `https://alejagoguti-cpu.github.io/Redes_sociales/`
   - Hard refresh (Ctrl+Shift+R) to clear cache

### Continuous Deployment (Optional)

To automate deployment on every push, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [claude/new-session-g3eot1]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to GitHub Pages
        run: |
          git config user.email "actions@github.com"
          git config user.name "GitHub Actions"
          git checkout --orphan gh-pages
          git rm -rf .
          git checkout HEAD -- .
          git add -A
          git commit -m "Deploy to GitHub Pages"
          git push -u origin gh-pages --force
```

---

## Local Development

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/alejagoguti-cpu/Redes_sociales.git
   cd Redes_sociales
   ```

2. **Start a local server:**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if installed)
   npx http-server
   ```

3. **Access locally:**
   - Open browser: `http://localhost:8000`
   - Navigate to `bitaxus-cm-guide.html`

### Development Tips

**Hot Reload (with Python):**
```bash
pip install watchdog
watchmedo shell-command \
  --patterns="*.html;*.css;*.js;*.json" \
  --recursive \
  --command='echo "Change detected"' \
  .
```

**Live Development (with VSCode):**
1. Install "Live Server" extension
2. Right-click on `bitaxus-cm-guide.html`
3. Select "Open with Live Server"

---

## Self-Hosted Deployment

### Deploy to VPS/Server

**Requirements:**
- Web server (Nginx, Apache, or Node.js)
- SSH access to server
- Domain name (optional)

### Option 1: Nginx

1. **Copy files to server:**
   ```bash
   scp -r . user@your-server:/var/www/bitaxus-cm/
   ```

2. **Configure Nginx:**
   ```nginx
   server {
       listen 80;
       server_name bitaxus.yourdomain.com;
       root /var/www/bitaxus-cm;
       index bitaxus-cm-guide.html;

       location / {
           try_files $uri $uri/ /bitaxus-cm-guide.html;
       }

       # Cache static assets
       location ~* \.(js|css|json|woff2)$ {
           expires 30d;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

3. **Restart Nginx:**
   ```bash
   sudo systemctl restart nginx
   ```

### Option 2: Apache

1. **Copy files:**
   ```bash
   scp -r . user@your-server:/var/www/bitaxus-cm/
   ```

2. **Configure .htaccess:**
   ```apache
   <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /bitaxus-cm-guide.html [L]
   </IfModule>

   <IfModule mod_expires.c>
       ExpiresActive On
       ExpiresByType application/json "access plus 30 days"
       ExpiresByType text/javascript "access plus 30 days"
       ExpiresByType text/css "access plus 30 days"
   </IfModule>
   ```

3. **Enable mod_rewrite:**
   ```bash
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```

### Option 3: Node.js

1. **Install dependencies:**
   ```bash
   npm init -y
   npm install express
   ```

2. **Create `server.js`:**
   ```javascript
   const express = require('express');
   const path = require('path');
   const app = express();

   app.use(express.static(path.join(__dirname)));

   app.get('*', (req, res) => {
       res.sendFile(path.join(__dirname, 'bitaxus-cm-guide.html'));
   });

   app.listen(3000, () => {
       console.log('Server running on http://localhost:3000');
   });
   ```

3. **Run server:**
   ```bash
   node server.js
   ```

---

## Domain Configuration

### Point Domain to GitHub Pages

1. **Update DNS records** with your domain provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
           185.199.109.153
           185.199.110.153
           185.199.111.153

   Type: AAAA
   Name: @
   Value: 2606:50c0:8000::153
          2606:50c0:8001::153
          2606:50c0:8002::153
          2606:50c0:8003::153
   ```

2. **Configure GitHub repository:**
   - Go to Settings → Pages
   - Select "Branch: gh-pages"
   - Enter custom domain: `your-domain.com`
   - Enable "Enforce HTTPS"

3. **Wait for DNS propagation** (24-48 hours)

### Using CNAME with Subdomain

For `bitaxus-cm.yourdomain.com`:

1. **Add CNAME record:**
   ```
   Type: CNAME
   Name: bitaxus-cm
   Value: alejagoguti-cpu.github.io
   ```

2. **GitHub configuration:**
   - Set custom domain to `bitaxus-cm.yourdomain.com`
   - Save configuration

---

## Troubleshooting

### GitHub Pages Not Loading

**Problem:** "404 Page not found"

**Solution:**
1. Verify gh-pages branch exists:
   ```bash
   git branch -a
   ```

2. Check Settings → Pages:
   - Confirm "gh-pages" branch is selected
   - Check for error messages

3. Clear cache and hard refresh:
   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)

4. Verify files are on gh-pages branch:
   ```bash
   git checkout gh-pages
   ls -la
   ```

### CSS/JS Not Loading

**Problem:** Page loads but styling/interactivity is broken

**Solution:**
1. Check browser console for 404 errors
2. Verify file paths in HTML are relative (no leading `/`)
3. Clear GitHub Pages cache (Settings → Pages → Save)
4. Wait 5 minutes and refresh

### Analytics Dashboard Not Saving Data

**Problem:** Data disappears on page reload

**Solution:**
1. Check browser localStorage is enabled
2. Open DevTools → Application → LocalStorage
3. Verify data is being saved
4. Try uploading CSV file to populate data

### Domain Not Resolving

**Problem:** Custom domain shows "Domain does not resolve"

**Solution:**
1. Verify DNS records are correct
2. Wait for DNS propagation (use `nslookup your-domain.com`)
3. Check GitHub repository settings for typos
4. Ensure HTTPS enforcement is enabled (wait 1 hour if just set)

---

## Monitoring & Updates

### Check Deployment Status

1. **GitHub Pages build status:**
   - Go to repository → Actions
   - Check latest workflow run

2. **Monitor with GitHub CLI:**
   ```bash
   gh run list --workflow=pages/pages-build-deployment
   ```

3. **Verify live site:**
   ```bash
   curl -I https://alejagoguti-cpu.github.io/Redes_sociales/
   ```

### Update Process

1. **Make changes** on development branch
2. **Test locally** with `python3 -m http.server 8000`
3. **Commit and push** to main branch
4. **Update gh-pages** branch
5. **Verify deployment** after 1-2 minutes

---

## Performance Optimization

### Reduce Page Load Time

1. **Enable gzip compression** (Nginx):
   ```nginx
   gzip on;
   gzip_types text/css application/javascript application/json;
   ```

2. **Add caching headers:**
   ```nginx
   location ~* \.(html)$ {
       expires 1d;
   }
   ```

3. **Optimize JSON files:**
   - Minify calendar.json
   - Remove unnecessary whitespace

### Bandwidth Usage

GitHub Pages provides unlimited bandwidth. For self-hosted:

- Monitor traffic with server logs
- Enable compression for large files
- Use CDN for assets (Cloudflare is free)

---

## Backup & Recovery

### Backup Your Data

1. **Backup repository:**
   ```bash
   git clone --mirror https://github.com/alejagoguti-cpu/Redes_sociales.git
   ```

2. **Export analytics data:**
   - Open analytics.html dashboard
   - Click "Export as JSON"
   - Save file locally

3. **Archive templates:**
   ```bash
   tar -czf templates-backup.tar.gz templates/
   ```

### Recovery Procedure

1. **Restore from GitHub:**
   ```bash
   git fetch origin
   git reset --hard origin/gh-pages
   ```

2. **Restore exported data:**
   - Open analytics.html
   - Upload previously exported JSON file

---

## Version Control

### Track Deployments

Add deployment version to footer of bitaxus-cm-guide.html:

```html
<div style="font-size: 0.85rem; color: var(--color-text-secondary); margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--color-dark-border);">
    Version 1.0.0 | Last deployed: August 31, 2024
</div>
```

### Release Management

Tag releases on GitHub:
```bash
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0
```

---

## Support

For deployment issues:
1. Check GitHub Actions workflow logs
2. Review browser console for errors
3. Verify file paths in HTML
4. Clear cache and hard refresh
5. Contact GitHub Support if DNS-related

