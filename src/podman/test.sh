#!/bin/bash

echo "fuckme"

# foo() {
# 	local RESULTS;
# 	RESULTS=$(podman machine ssh < ./podman_write_file_to_vm.sh "\$HOME/.config/containers/postgres/server.crt" "Certificate:")
# 	# RESULTS=$(podman machine ssh < ./testtest.sh)
# 	echo $?;
# }; foo

podman machine ssh < ./podman_write_file_to_vm.sh \$HOME/.config/containers/postgres/server.crt Certificate:

# echo "fuckhim"
# LOG "${RESULTS}";
# echo "fuckyou"
