
import geo
import os

address = """
10 OBrien Street
CESSNOCK
NSW
2325
"""

# Ensure you set this variable in your environment
API_KEY = os.environ['GOOGLE_API_KEY']

myEncoder = geo.Geo(API_KEY)

print(myEncoder.geo_from_address(address))

lat = -32.8418769
lng = 151.345344

print(myEncoder.address_from_geo(lat,lng))