# AxiGear Local Build and Deploy Script
Write-Output "🚀 Starting AxiGear local build and deploy process..."

# Step 1: Build the site
Write-Output "👷 Building the site..."
npx next build --no-lint

# Verify build was successful
if ($LASTEXITCODE -ne 0) {
    Write-Output "❌ Build failed! Exiting."
    exit 1
}

Write-Output "✅ Build completed successfully!"

# Step 2: Add the built files to git
Write-Output "📦 Adding built files to git..."
git add out/ -f

# Step 3: Commit the changes
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Deploy: Update built files ($timestamp)"

# Step 4: Push to GitHub which will trigger Render deployment
Write-Output "🚀 Pushing to GitHub..."
git push

Write-Output "✅ Deployment complete! Render will automatically update from the pre-built files."
Write-Output "🌐 Your site should be live in a few moments." 