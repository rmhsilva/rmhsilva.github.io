#!/bin/sh

if [ "$EUID" -eq 0 ]; then
    echo Not meant to be run as root!
    exit 1
fi

echo Bootstrapping!
echo Assuming Python and Git are installed...

# checkout dotfiles
cd $HOME
[ -d .dotfiles ] || git clone -o origin_https https://github.com/rmhsilva/dotfiles/ .dotfiles

# create initial inventory
cat <<EOF > ~/.dotfiles/inventory
[local]
localhost  ansible_connection=local
EOF

echo Dotfiles checked out to ~/.dotfiles
