#!/bin/bash

rm -rf $HOME/.config/containers/registries.conf
echo "unqualified-search-registries = ['docker.io']" > $HOME/.config/containers/registries.conf
echo "short-name-mode='permissive'" >> $HOME/.config/containers/registries.conf
echo "[[registry]]" >> $HOME/.config/containers/registries.conf
echo "location = 'docker.io'" >> $HOME/.config/containers/registries.conf
echo "insecure = true" >> $HOME/.config/containers/registries.conf
exit
