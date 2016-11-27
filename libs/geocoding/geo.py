#
# Geo En/Decoder Helper object
# Lea Anthony (https://github.com/lea-anthony)
# Donated as part of Sydney RHoK Summer Hackathon
#

from geolocation.main import GoogleMaps
import json


class Geo:

    def __init__(self, API_KEY):
        self.google_maps = GoogleMaps(api_key=API_KEY)

    def processLocation(self, location):
        """Converts the given Address object into JSON"""
        temp = location.__dict__
        aa = temp['_administrative_area']
        del temp['_administrative_area']
        admin_areas = []
        for admin_area in aa:
            this_admin = {'type': admin_area.area_type, 'name': admin_area.name,
                          'short_name': admin_area.short_name}
            admin_areas.append(this_admin)
        temp["administrative_areas"] = admin_areas
        return temp

    def geo_from_address(self, address):
        """Gets full address details for the given address string. Returns JSON data"""
        locations = self.google_maps.search(location=address)  # sends search to Google Maps.

        result = []
        for location in locations.all():
            this_result = self.processLocation(location)
            result.append(this_result)

        return result

    def address_from_geo(self, lat, lng):
        """Gets full address details for the given long/lat location. Returns JSON data"""
        locations = self.google_maps.search(lat=lat, lng=lng).all()  # sends search to Google Maps.

        result = []
        for location in locations:
            this_result = self.processLocation(location)
            result.append(this_result)

        return result



