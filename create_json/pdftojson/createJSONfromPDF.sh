#!/bin/bash

# iterates over CSV files in local directory and creates
# JSON files

TABULAR='java -jar ./tabula-0.9.1-jar-with-dependencies.jar --pages all  -f CSV'

for i in ../raw_data/*.pdf
do
    echo "Processing $i"
    filename=`basename $i '.pdf'`

    # get raw CSV from tabular
    echo "...Running Tabular to get raw CSV data from table"
    $TABULAR $i -o ${filename}.tmp1 2>/dev/null

    # strip out \r characters
    echo "...Stripping \\r characters"
    tr '\r' ' ' < ${filename}.tmp1 | sed 's/ $//' > ${filename}.tmp2

    # remove extra copies of the header line
    string=`head -1 ${filename}.tmp2 | cut -f1 -d','`
    echo "...Stripping extra copies of header line starting with \"$string\""
    sed -e "2,\$ {/^$string/d;}" ${filename}.tmp2 > ${filename}.csv

    # convert to json
    echo "...Creating JSON file ${filename}.json"
    python ./convert_pc.py < ${filename}.csv > ${filename}.json

    # remove tmp files, keep csv
    rm ${filename}.tmp1 ${filename}.tmp2
done
