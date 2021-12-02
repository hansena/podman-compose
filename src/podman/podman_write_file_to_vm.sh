#!/bin/bash

# echo "hello"

# p=$1
# path=$( echo ${p%/*} )
# echo "path: $path"

mkdir -v $path
touch $1
chmod -R 777 $path

# # put all args in an array
# LINES=( "$@" )
# # remove the path argument from the array
# unset LINES[0]

# # echo "$1"
# # echo "${LINES[@]}"

# for LINE in "${LINES[@]}"
# do
#     echo "$LINE" >> $1
# done

# exit
