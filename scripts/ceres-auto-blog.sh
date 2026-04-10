#!/bin/bash
# Auto-generate a blog article for ceres.agency
# Run: ./scripts/generate-article.sh
# Cron: 0 8 * * 1,3,5 (every Monday, Wednesday, Friday at 8am)

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
TOPICS_FILE="$SCRIPT_DIR/topics.json"
PUBLISHED_FILE="$SCRIPT_DIR/published.txt"
BLOG_DIR="$PROJECT_DIR/src/app/blog"

# Create published tracker if not exists
touch "$PUBLISHED_FILE"

# Pick next unpublished topic
TOPIC=$(python3 -c "
import json
published = set(open('$PUBLISHED_FILE').read().strip().split('\n')) if open('$PUBLISHED_FILE').read().strip() else set()
topics = json.load(open('$TOPICS_FILE'))
for t in topics:
    if t['slug'] not in published:
        print(json.dumps(t))
        break
")

if [ -z "$TOPIC" ]; then
    echo "All topics published!"
    exit 0
fi

SLUG=$(echo "$TOPIC" | python3 -c "import sys,json; print(json.load(sys.stdin)['slug'])")
TITLE=$(echo "$TOPIC" | python3 -c "import sys,json; print(json.load(sys.stdin)['title'])")
CATEGORY=$(echo "$TOPIC" | python3 -c "import sys,json; print(json.load(sys.stdin)['category'])")
KEYWORDS=$(echo "$TOPIC" | python3 -c "import sys,json; print(json.load(sys.stdin)['keywords'])")

echo "Generating article: $TITLE ($SLUG)"

# Create article directory
mkdir -p "$BLOG_DIR/$SLUG"

# Get today's date
TODAY=$(date +"%d %B %Y" | sed 's/January/janvier/;s/February/fevrier/;s/March/mars/;s/April/avril/;s/May/mai/;s/June/juin/;s/July/juillet/;s/August/aout/;s/September/septembre/;s/October/octobre/;s/November/novembre/;s/December/decembre/')

# Generate article using Claude CLI
# Find latest Claude binary (path changes with VSCode extension updates)
CLAUDE_BIN=$(ls -t /Users/guillaumedelachet/.vscode/extensions/anthropic.claude-code-*-darwin-arm64/resources/native-binary/claude 2>/dev/null | head -1)
if [ -z "$CLAUDE_BIN" ]; then
  echo "ERROR: Claude CLI not found"
  exit 1
fi
cd "$PROJECT_DIR"
"$CLAUDE_BIN" -p "Create a comprehensive French blog article page for the Ceres RevOps agency website.

Write the file at: $BLOG_DIR/$SLUG/page.tsx
Also create a layout.tsx in the same directory with unique metadata.

Topic: \"$TITLE\"
Category: $CATEGORY
Keywords: $KEYWORDS
Date: $TODAY

RULES:
- 'use client' with progress bar and active section tracking in sidebar
- Sticky sidebar with sections nav (active section highlighted)
- import Badge from '@/components/marketing/Badge' and import Connector from '@/components/marketing/Connector' and import Link from 'next/link'
- Bubble cards: rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]
- Dark sections: rounded-2xl bg-[#111]
- NO blobs (global in layout)
- pt-[80px] md:pt-[100px]
- JSON-LD Article schema
- 2500+ words, very detailed, actionable content
- 8+ sections with Connector between each
- Include tool favicons with https://www.google.com/s2/favicons?domain=DOMAIN&sz=32
- Related articles + CTA at end linking to /contact
- All text in French
- No emojis
- Use &apos; for apostrophes in JSX
- DO NOT use > in JSX text, use 'plus de' or &gt;
- Author: Guillaume Delachet
- Search the web for the latest information on this topic to make the content current and accurate

Write BOTH files (page.tsx and layout.tsx) now." --allowedTools "Edit,Write,Read,Bash,WebSearch,WebFetch" 2>&1

# Add to published list
echo "$SLUG" >> "$PUBLISHED_FILE"

# Add to blog listing
# (The blog listing reads from filesystem, so new articles appear automatically if we add them to the articles array)
# For now, we'll just commit and push

# Add to sitemap
python3 -c "
import re
sitemap = open('$PROJECT_DIR/src/app/sitemap.ts').read()
new_entry = '    \"$SLUG\",'
if '$SLUG' not in sitemap:
    sitemap = sitemap.replace('  ];', '    \"$SLUG\",\n  ];', 1)
    open('$PROJECT_DIR/src/app/sitemap.ts', 'w').write(sitemap)
    print('Added to sitemap')
else:
    print('Already in sitemap')
"

# Git commit and push
cd "$PROJECT_DIR"
git add -A
git commit -m "Auto-publish: $TITLE

Category: $CATEGORY
Keywords: $KEYWORDS

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
git push origin main

echo "Published: $TITLE"
echo "URL: https://ceres.agency/blog/$SLUG"
