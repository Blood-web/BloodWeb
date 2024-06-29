#!/bin/bash

#debug this file
photo_debugging=1
delete_latest_capture=0

# Container
dir="/var/www/html/captures/public/images"

# new image name
new_img="new_capture.jpg"

# Total '*capture_*.jpg' photos in the capture folder
capture_count=$(find "$dir"/*capture_*.jpg -type f | wc -l)
total_captures="$(( capture_count + 1 ))"
# Special fx
use_fx=1
fx_count="$(wc -l < ifx)"
random_num=$(( 1 + RANDOM % (fx_count - 1 + 1)))

# Delete old Capture
[[ "$delete_latest_capture" == 1 ]] && rm "$dir/$new_img"

# $new_img ? -> Rename prior new_img
if [ -f "$dir/$new_img" ]; then mv "$dir/$new_img" "$dir/capture_$total_captures.jpg"; fi

#  Use special fx ? -> Get random fx 
if [[ "$use_fx" == 1 ]]; then fx="$(cat ifx | head -n $random_num | tail -1 )"; fi

# camera init & rotate 90deg -> wait 1s -> take the photo 
raspistill -rot 90 -t 1000 -ifx "${fx:-none}" -o "$dir/$new_img"
# caption latest img 
./generate_img_caption.sh "$new_img"
# Remove_originals
rm "$dir"/*jpg_original


# DEBUG
if [[ "$photo_debugging" -eq 1 ]]; then
    echo " 
          Photo new_capture($(( capture_count + 1)) Taken Sucessfully
          
          Dir: $dir
          Numbered captures: $capture_count
          
          New img Name: $new_img
          OverWriting new captures? $delete_latest_capture

          Use special_fx: $use_fx
          
         "
fi

#return to camera wait state
