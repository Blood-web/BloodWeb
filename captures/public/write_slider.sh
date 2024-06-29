#!/bin/bash

# the working directory
dir="/var/www/html/captures/public"
# total jpg's in the dir
total_captures=$(find "$dir"/images/capture_*.jpg -type f | wc -l)

# array Beginning 
new_content="[ {caption:\"latest and Greatest\"}, "   

for i in $(seq "$total_captures" -1 1); do
  has_caption="$(exiftool -Caption "$dir/images/capture_$i.jpg")"
  # If image has Caption meta -> Get caption meta 
  if [[ ! "$has_caption" == "" ]]; then                                 
    caption="$( echo "$has_caption" | cut -d ':' -f 2 | sed 's/^ *//')"
  else
    [[ "$i" == "$total_captures" ]] && caption="Latest and Greatest"
  fi
  # Add next caption to new build_slider content 
  new_content+="{caption:\"$caption x$i\"}," #{caption:\"${caption:-"x$i -Missing_Caption"}\"}," 
done

#remove last_char(,) and close array
new_content="${new_content%?}]"

# Replace build_slider content 
sed -i 's/build_slider(\[[^]]*\])/build_slider('"$new_content"')/' index.html > test.html

echo "*** Index has been rewritten ***"
