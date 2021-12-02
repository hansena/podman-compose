#!/bin/bash

# coerce the path
cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P

echo "Installing podman components..."
brew install podman
./podman_machine_start
podman info
echo "Podman setup completed."

exit 0
