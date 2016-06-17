#!/bin/sh
s3cmd sync --delete-removed _site/ s3://elite-hackers.com/ --verbose
