#!/bin/bash

# heavenly_script.sh - A celestial script by Pucci for divine tasks

echo "Welcome to Pucci's Heavenly Script!"
echo "This script will help you perform divine tasks on your system."

# Check if the user is root (admin privileges)
if [ "$(id -u)" -ne 0 ]; then
    echo "You need to run this script as root. Exiting..."
    exit 1
fi

# Heavenly maintenance: update and upgrade the system
echo "Updating the system to the latest divine version..."
apt update && apt upgrade -y
echo "System is now divinely upgraded."

# Backup important files
echo "Creating a backup of important files..."
mkdir -p /root/backup
cp -r /home/$USER/Documents /root/backup/
echo "Backup complete. Files are safely stored in /root/backup."

# A celestial task: check disk space and remind user to keep the heavens clean
echo "Checking available disk space for heavenly purposes..."
df -h

echo "Reminder: Keep the heavens (your system) clean and free of clutter!"

# Heavenly cleanup: remove unnecessary files
echo "Performing celestial cleanup..."
apt autoremove -y
echo "Celestial cleanup complete. Your system is lighter than ever!"

# Final message from Pucci
echo "Thank you for using Pucci's Heavenly Script. May your system always be divine."
