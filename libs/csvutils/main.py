#
# CSV Helper object
# Lea Anthony (https://github.com/lea-anthony)
# Donated as part of Sydney RHoK Summer Hackathon
#

import csvmapper


class CSV:

    def __init__(self, csv_filename, has_header=True):

        self.parser = csvmapper.CSVParser(csv_filename, hasHeader=has_header)

    def to_json(self, pretty=True):
        converter = csvmapper.JSONConverter(self.parser)
        return converter.doConvert(pretty=pretty)

    def to_objects(self):
        return self.parser.buildObject()


if __name__ == "__main__":

    filename = "Australian_Post_Codes_Lat_Lon.csv"
    myCSV = CSV(filename)
    # objs = myCSV.to_objects()
    json = myCSV.to_json()
    print(json)

