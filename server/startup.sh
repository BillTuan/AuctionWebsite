#!/bin/bash

rm -f /webapp/tmp/pids/server.pid
bundle install
rails db:create
rails s -b 0.0.0.0