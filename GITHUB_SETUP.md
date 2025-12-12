# How to Upload to GitHub

## Step 1: Create Repository on GitHub

1. Go to: https://github.com/new
2. **Repository name:** `layout` (or any name you want)
3. **Description:** (optional) Tech Company Smartwatch Store
4. **Visibility:** Choose Public or Private
5. **IMPORTANT:** Do NOT check any of these boxes:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. Click **"Create repository"** button

## Step 2: Push Your Code

After creating the repository, run this command in your terminal:

```bash
git push -u origin main
```

## If You Get Authentication Errors:

If you see authentication errors, you may need to:

1. **Use Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Give it a name like "layout-upload"
   - Select scope: `repo` (full control of private repositories)
   - Click "Generate token"
   - Copy the token
   - When pushing, use the token as your password

2. **Or use SSH instead:**
   ```bash
   git remote set-url origin git@github.com:selvarajane/layout.git
   git push -u origin main
   ```

## Alternative: Different Repository Name

If you want a different repository name, tell me and I'll update the remote URL.

