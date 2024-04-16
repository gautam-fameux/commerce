#!/bin/bash

# Set up fixed values
BRANCH_NAME="one"
REMOTE="origin"
WORKING_DIRECTORY="commerce"

# Navigate to the repository directory
cd "$WORKING_DIRECTORY"

# Ensure we're in the right directory and the repository exists
if [ ! -d ".git" ]; then
    echo "Error: No git repository found in $WORKING_DIRECTORY"
    exit 1
fi

# Fetch the latest branches information
git fetch $REMOTE

# Check if the branch exists and delete it remotely and locally
if git show-ref --verify --quiet "refs/heads/$BRANCH_NAME"; then
    git branch -D $BRANCH_NAME  # Force delete the branch locally
    git push $REMOTE --delete $BRANCH_NAME  # Delete the branch remotely
    echo "Deleted branch: $BRANCH_NAME"
else
    echo "Branch $BRANCH_NAME does not exist. Creating a new one."
fi

# Create a new branch from master and switch to it
git checkout master
git pull $REMOTE master  # Ensure master is up to date
git checkout -b $BRANCH_NAME

# Add all changes and commit
git add .
git commit -m "Reset and update branch $BRANCH_NAME"

# Push the new branch to the remote repository
git push $REMOTE $BRANCH_NAME --force

# Output success message
echo "Branch $BRANCH_NAME has been reset and updated on $REMOTE."
