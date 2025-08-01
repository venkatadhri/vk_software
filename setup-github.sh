#!/bin/bash

# VK Software Website - GitHub Pages Setup Script
# This script helps you quickly set up the repository for GitHub Pages

echo "🌊 VK Software - GitHub Pages Setup"
echo "===================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Get repository URL from user
echo ""
echo "📋 Please provide your GitHub repository details:"
read -p "GitHub Username: " username
read -p "Repository Name (default: vk-software): " repo_name

# Set default repository name
if [ -z "$repo_name" ]; then
    repo_name="vk-software"
fi

# Construct repository URL
repo_url="https://github.com/$username/$repo_name.git"

echo ""
echo "🔗 Repository URL: $repo_url"
echo ""

# Ask for confirmation
read -p "Is this correct? (y/n): " confirm
if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "❌ Setup cancelled."
    exit 1
fi

# Initialize git repository
echo ""
echo "🚀 Initializing Git repository..."

# Check if already a git repository
if [ -d ".git" ]; then
    echo "📁 Git repository already exists."
else
    git init
    echo "✅ Git repository initialized."
fi

# Add remote origin
echo ""
echo "🔗 Adding remote origin..."
git remote remove origin 2>/dev/null || true
git remote add origin "$repo_url"
echo "✅ Remote origin added: $repo_url"

# Create initial commit
echo ""
echo "📝 Creating initial commit..."
git add .
git commit -m "Initial commit: VK Software website"
echo "✅ Initial commit created."

# Push to GitHub
echo ""
echo "⬆️ Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Next Steps:"
    echo "1. Go to https://github.com/$username/$repo_name"
    echo "2. Go to Settings > Pages"
    echo "3. Select 'Deploy from a branch'"
    echo "4. Choose 'main' branch and '/ (root)' folder"
    echo "5. Click 'Save'"
    echo ""
    echo "🌐 Your website will be available at:"
    echo "https://$username.github.io/$repo_name/"
    echo ""
    echo "📖 For custom domain setup, see GITHUB-PAGES-CONFIG.md"
else
    echo "❌ Failed to push to GitHub."
    echo "Please check:"
    echo "1. Repository exists on GitHub"
    echo "2. You have push permissions"
    echo "3. GitHub credentials are configured"
fi

echo ""
echo "🌊 Setup complete!"
