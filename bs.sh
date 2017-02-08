#!/bin/sh

if [ "$EUID" -eq 0 ]; then
    echo Not meant to be run as root!
    exit 1
fi

echo ***
echo Bootstrapping!
echo Assuming Python and Git are installed...

# checkout dotfiles
cd $HOME
if [ -d .dotfiles ]; then
    git clone -o origin_https https://github.com/rmhsilva/dotfiles/ .dotfiles
    cd .dotfiles
    git submodule update --init --recursive
fi

# create initial inventory
cat <<EOF > ~/.dotfiles/inventory
[local]
localhost  ansible_connection=local
EOF

echo Dotfiles checked out to ~/.dotfiles
