# PowerShell script to push to GitHub
# Run this AFTER creating the repository on GitHub

Write-Host "Pushing to GitHub..." -ForegroundColor Green
Write-Host ""

# Push to GitHub
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Success! Your code has been uploaded to GitHub!" -ForegroundColor Green
    Write-Host "Repository: https://github.com/selvarajane/layout" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "Error: Could not push to GitHub." -ForegroundColor Red
    Write-Host "Make sure you have:" -ForegroundColor Yellow
    Write-Host "1. Created the repository at https://github.com/new" -ForegroundColor Yellow
    Write-Host "2. Repository name: layout" -ForegroundColor Yellow
    Write-Host "3. Authenticated with GitHub (may need Personal Access Token)" -ForegroundColor Yellow
}

