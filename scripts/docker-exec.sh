#!/bin/bash
/usr/bin/docker container ps | grep express-test > /dev/null 2>&1
if [ $? = 1 ]
then
 echo 'not running'
else
 echo 'running'
 /usr/bin/docker stop express-test > /dev/null 2>&1
 /usr/bin/docker rm express-test > /dev/null 2>&1
fi

/usr/bin/docker pull dotrong/express-test > /dev/null 2>&1
/usr/bin/docker run -p 80:3000 --name express-test -d dotrong/express-test > /dev/null 2>&1