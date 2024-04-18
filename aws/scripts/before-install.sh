#!/bin/bash
# before-install.sh: clean old directories before installing new app version

if [ -d /home/ubuntu/app ]; then
    rm -rd /home/ubuntu/app
fi

mkdir -vp /home/ubuntu/app
