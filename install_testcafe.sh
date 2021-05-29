#!/usr/bin/env bash

# Install node and npm

# Linux
#sudo apt install nodejs
#sudo apt install npm

# Mac
brew install node

node -v
npm -v

npm -install g testcafe
npm install --save-dev testcafe-reporter-allure@npm:@isaac.frontend/testcafe-reporter-allure

## Install allure
## Linux
#sudo apt-add-repository ppa:qameta/allure
#sudo apt-get update
#sudo apt-get install allure
## Mac
#brew install allure