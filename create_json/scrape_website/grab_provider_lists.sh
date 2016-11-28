#!/bin/sh

# save list of files that we will grab for logging purposes
filelist="files_to_grab.txt"

# put downloaded files in this directory
outputdir='../raw_data'

python3 list_cluster_files.py > $filelist

number=`wc -l $filelist | cut -f1 -d' '`
echo "Found $number files to download from NDIS website"
echo

for i in `cat $filelist`
do
    # create a tidier output file if one looks warrented
    #
    # cut off anything (and including) any '?' character
    tmp1=`basename $i | sed 's/\?.*//'`
    # add a pdf at the end if needed
    output=`basename $tmp1 '.pdf'`.pdf

    echo "Downloading $output"
    curl --progress-bar --output ${outputdir}/$output $i
done
