#!/bin/sh
# Usage: ./set-domain.sh bizledger.in   (run once when your domain is ready)
[ -z "$1" ] && echo "Usage: ./set-domain.sh yourdomain.com" && exit 1
OLD="https://motioncircuit.github.io/bizledger/"; NEW="https://$1/"
for f in *.html sitemap.xml robots.txt; do sed -i "s#$OLD#$NEW#g" "$f"; done
echo "$1" > CNAME
echo "Done. Commit, push, then add the domain in GitHub > Settings > Pages."
