#!/bin/bash
systemctl --user enable podman.socket
sudo loginctl enable-linger $USER
exit