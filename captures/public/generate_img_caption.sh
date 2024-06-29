#!/bin/bash

random_num () {
  min="$1" && max="$2"
  echo $((RANDOM % (max - min +1) + min))
}

# Code Container
dir="/var/www/html/captures/public"
# Img Container +img_name($1)
image_to_caption="$dir/images/$1"

# Caption Files
adjectives_file="$dir/adjectives.txt"
nouns_file="$dir/nouns.txt"
pre_text_file="$dir/pre-text.txt"
captions_file="$dir/image-quotes.txt"

# Decide if to use pretext
generate_pre_text="$(random_num 1 3)"

# Decide if to use a prebuilt caption
use_prebuilt_caption="$(random_num 1 4)"


# Random text to use
random_adjective="$(cat $adjectives_file | head -n $(random_num 1 $(($(wc -l < $adjectives_file) + 1))) | tail -1 )"
random_noun="$(cat $nouns_file | head -n $(random_num 1 $(($(wc -l < $nouns_file) + 1))) | tail -1 )"

# Generate the caption
if [[ "$use_prebuilt_caption" -eq 1 ]]; then
  random_caption="$(cat $captions_file | head -n $(random_num 1 $(($(wc -l < $captions_file) + 1))) | tail -1 )"
elif [[ $generate_pre_text -eq 1 ]]; then
  random_pre_text="$(cat $pre_text_file | head -n $(random_num 1 $(($(wc -l < $pre_text_file) + 1))) | tail -1 )"
  random_caption="$random_pre_text $random_adjective $random_noun"
else
  random_caption="$random_adjective $random_noun"
fi

exiftool -Caption="$random_caption" "$image_to_caption"
