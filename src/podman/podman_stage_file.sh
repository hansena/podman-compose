#!/bin/bash

# coerce the path
cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P

# read arguments
FROM=$2
TO=$1

echo "FROM: $FROM"
echo "TO: $TO"

# get the file and write the lines into an array
IFS=$'\n' read -d '' -r -a file_lines < $FROM


# write the lines to the target file
# source ./podman_write_file_to_vm.sh $TO "${file_lines[@]}"

# podman machine ssh < ./podman_write_file_to_vm.sh $TO "${file_lines[@]}"
LINES="$(printf '%q\n' "$(echo ${file_lines[@]})")"

# echo ./podman_write_file_to_vm.sh "$TO" "$(printf '%q\n' "$(echo ${file_lines[@]})")"
# podman machine ssh < ./podman_write_file_to_vm.sh "$TO" "$(printf '%q\n' "$(echo ${file_lines[@]})")"
podman machine ssh < ./podman_write_file_to_vm.sh 'test.txt'


# ./podman_write_file_to_vm.sh $TO "$(printf '%q\n' "$(echo ${file_lines[@]})")"
