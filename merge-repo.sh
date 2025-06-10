#!/bin/bash
set -e

# List of repos (GitHub repo names)
REPOS=(
  "ehb_aie"
  "ehb_pe1"
  "ehb_pe2"
  "ehb_weba"
  "ehb_webe"
  "ehb-ite"
  "ehb-serveros"
  "SDE"
  "ehb-etib"
)

GITHUB_USER="huaxel"

echo "Starting merge process into $(pwd)"

for NAME in "${REPOS[@]}"; do
  REMOTE_URL="https://github.com/$GITHUB_USER/$NAME.git"

  echo "Processing repo '$NAME' from URL '$REMOTE_URL'"

  # Add remote
  git remote add "$NAME" "$REMOTE_URL" || { echo "Remote $NAME already exists, skipping add"; }

  # Fetch remote
  git fetch "$NAME"

  # Find main branch name (try main, then master)
  MAIN_BRANCH="main"
  if ! git rev-parse --verify "$NAME/$MAIN_BRANCH" >/dev/null 2>&1; then
    MAIN_BRANCH="master"
    if ! git rev-parse --verify "$NAME/$MAIN_BRANCH" >/dev/null 2>&1; then
      echo "Error: Neither 'main' nor 'master' branch found on remote $NAME"
      git remote remove "$NAME"
      continue
    fi
  fi

  echo "Merging branch '$MAIN_BRANCH' from repo '$NAME'..."

  # Perform merge with history preserved into subdirectory
  git merge --allow-unrelated-histories -s ours --no-commit "$NAME/$MAIN_BRANCH"
  mkdir -p "$NAME"
  git read-tree --prefix="$NAME/" -u "$NAME/$MAIN_BRANCH"
  git commit -m "Merge repo '$NAME' into subdirectory '$NAME' preserving history"

  # Remove remote
  git remote remove "$NAME"
  echo "Merged repo '$NAME' successfully."
done

echo "✅ All repos merged!"
