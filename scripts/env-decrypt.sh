#!/usr/bin/env zsh
set -euo pipefail

PASSWORD="${BLOG_ENV_SECRET:-}"

if [[ -z "$PASSWORD" ]]; then
  read -s "PASSWORD?🔑 Enter decryption password: "
  echo
fi

if [[ ! -f ".env.enc" ]]; then
  echo "❌ .env.enc not found!"
  exit 1
fi

openssl enc -d -aes-256-cbc -pbkdf2 \
  -in .env.enc -out .env -k "$PASSWORD"

echo "🔓 Decrypted .env.enc → .env"
