#!/usr/bin/env zsh
set -euo pipefail

PASSWORD="${BLOG_ENV_SECRET:-}"

if [[ -z "$PASSWORD" ]]; then
  read -s "PASSWORD?🔑 Enter encryption password: "
  echo
fi

if [[ ! -f ".env" ]]; then
  echo "❌ .env file not found!"
  exit 1
fi

openssl enc -aes-256-cbc -pbkdf2 -salt \
  -in .env -out .env.enc -k "$PASSWORD"

echo "✅ Encrypted .env → .env.enc"
