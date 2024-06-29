#!/bin/sh
if [ "$GIT_COMMIT" = "33609d2c4c621478e3d32847d9ac5fafb545886f" ] || [ "$GIT_COMMIT" = "466286ae7b986cc099a4c28edf297592eb7b585c"]; then
  if [ "$GIT_AUTHOR_NAME" = "Blood-web" ]; then
    sed -i '14s/.*/"REPLACEMENT_TEXT"/' package.json
  fi
fi
