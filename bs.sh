#!/bin/bash
#
# curl -fsSL https://rmhsilva.com/bs.sh | /bin/bash
#
# Installs git, python, and dotfiles

if [ "$EUID" -eq 0 ]; then
    echo Not meant to be run as root!
    exit 1
fi

echo Bootstrapping!

set -x
set -e

if [ "$(uname)" = "Darwin" ]; then
    echo Installing Brew, git, python 3
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    brew install git
    brew install python
fi

pip3 install ansible

# checkout dotfiles
cd $HOME
git clone -o origin_https https://github.com/rmhsilva/dotfiles/ .dotfiles
cd .dotfiles
git submodule update --init --recursive

# create initial Ansible inventory
cat <<EOF > ~/.dotfiles/inventory
[local]
localhost  ansible_connection=local
EOF

echo Dotfiles checked out to ~/.dotfiles
