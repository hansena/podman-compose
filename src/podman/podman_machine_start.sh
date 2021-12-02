#!/bin/bash

# coerce the path
cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P

echo "Starting podman machine..."
eval "$(ssh-agent -s)"
podman machine init
podman machine start
{
    echo "Confirming connection to Podman VM..."
    podman info --format={{".Registries"}}
    echo "Podman VM connected."
} || {
    echo "Recovering from Podman connection error..."
    podman machine ssh < ./podman_machine_enable_user.sh
    echo "Podman VM connected."
}
echo "Configuring podman registries..."
podman machine ssh < ./podman_configure_registries.sh

exit 0
