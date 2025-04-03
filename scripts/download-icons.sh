#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/skills
mkdir -p public/images/social

# Download skill icons
curl -o public/images/skills/python.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
curl -o public/images/skills/java.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
curl -o public/images/skills/javascript.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
curl -o public/images/skills/docker.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
curl -o public/images/skills/azure.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg"
curl -o public/images/skills/pandas.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg"
curl -o public/images/skills/numpy.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg"

# Download social and contact icons
curl -o public/images/social/github.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg"
curl -o public/images/social/linkedin.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/linkedin.svg"
curl -o public/images/social/twitter.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/twitter.svg"
curl -o public/images/social/email.svg "https://raw.githubusercontent.com/tabler/tabler-icons/master/icons/mail.svg"
curl -o public/images/social/phone.svg "https://raw.githubusercontent.com/tabler/tabler-icons/master/icons/phone.svg"
curl -o public/images/social/location.svg "https://raw.githubusercontent.com/tabler/tabler-icons/master/icons/map-pin.svg" 