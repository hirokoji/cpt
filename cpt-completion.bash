#/usr/bin/env bash

_dothis_completions()
{

  directoryList=($(ls -d $CPT_ROOT/templates/*/ | sed -e  "s|${CPT_ROOT}/templates||" | tr -d / | grep -v bin ));
  COMPREPLY=($(compgen -W "${directoryList[*]}" "${COMP_WORDS[1]}"))

}

complete -F _dothis_completions cpt
