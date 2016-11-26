import csv
import json

filename = "Australian_Post_Codes_Lat_Lon.csv"

ifile = open(filename, "rb")
reader = csv.reader(ifile)

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
            this_obj[header[colnum]] = col.strip()
            # print '%-8s: %s' % (header[colnum], col)
            colnum += 1

        result.append(this_obj)
    rownum += 1

print json.dumps(result)

ifile.close()