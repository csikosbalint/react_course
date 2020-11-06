#!/usr/bin/env bash
yarn server &
sleep 3
netstat -tpln
yarn start