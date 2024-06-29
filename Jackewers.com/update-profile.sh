#!/bin/bash
echo "Starting script" >> /tmp/update-profile-debug.log
# Priofile Options
all_options=(--name --handle --age --currently --mood)

# Get the current date in yyyy-mm-dd format
current_date=$(date +%F)
# Input date of birth in yyyy-mm-dd format
dob="3" #$(mysql -ubloodweb -pBLOODWEBMYSQL -DUsers -se "select birthday from HODLERS where id = 1;")
# Calculate age
timestamp_current=$(date -d "$current_date" +%s)
timestamp_dob=$(date -d "$dob" +%s)
seconds_in_year=$((60*60*24*365))


# Default profile data
name="Jack Ewers"
handle="@TheGuyWithTheHoles"
age=$(( ($timestamp_current - $timestamp_dob) / $seconds_in_year ))
currently="Coding"
mood="Great"

return_page_status() {
    STATUS=$(curl -s -o /dev/null -I -w "%{http_code}" $1)
    if [[ "$STATUS" != "000" ]]; then
        echo "active"
    else
        echo "inactive"
    fi
}

# Function to update profile variables
update_profile() {
    while [[ "$#" -gt 0 ]]; do
        case $1 in
            --name) name="$2"; shift ;;
            --handle) handle="$2"; shift ;;
            --age) age="$2"; shift ;;
            --currently) currently="$2"; shift ;;
            --mood) mood="$2"; shift ;;
            --?) echo "All options: ${all_options[@]}"; exit;;
            *) echo "Unknown parameter: $1"; exit 1 ;;
        esac
        shift
    done
}

# Update profile based on command-line arguments
update_profile "$@"

# Generate profile.js file
cat > /var/www/html/Jackewers.com/profile.js <<EOF
const profile = {
    "name": "$name",
    "handle": "$handle",
    "age": "$age",
    "currently": "$currently",
    "mood": "$mood",
    "jackewers.com":"$(return_page_status "www.jackewers.com")",
    "bloodweb.net":"$(return_page_status "www.bloodweb.net")"
};
last_profile_edit="$(date +'%d/%m/%Y')"
EOF

echo "profile.js generated with updated data."
