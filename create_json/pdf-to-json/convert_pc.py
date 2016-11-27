# read csv file from stdin and
# output formatted JSON on stdout

import csv
import json
import sys

reader = csv.reader(sys.stdin)

rownum = 0
result = []
for row in reader:
    # Save header row.
    if rownum == 0:
        header = row
    else:
        colnum = 0
        this_obj = {}
        for col in row:
            # print '%-8s: %s' % (header[colnum], col)
            if len(col) > 0:
                this_obj[header[colnum]] = col.strip()
            else:
                this_obj[header[colnum]] = ""
            # print '%-8s: %s' % (header[colnum], col)
            colnum += 1

        result.append(this_obj)
    rownum += 1

print json.dumps(result)

