#!/bin/bash
# before-install.sh: clean old directories before installing new app version

date >> ~/before.log

if [ -d /home/ubuntu/app ]; then
    rm -rd /home/ubuntu/app
    echo "removed app/ folder" >> ~/before.log
fi

mkdir -vp /home/ubuntu/app
