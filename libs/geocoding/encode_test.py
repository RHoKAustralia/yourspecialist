
import geo
import os
import json
import sys
from time import sleep

f = open('geoproviders.json', 'w')

# Ensure you set this variable in your environment
API_KEY = os.environ['GOOGLE_API_KEY']

myEncoder = geo.Geo(API_KEY)

cache = {}

def geoFromProvider(provider):
    accurate = True
    address = provider['Head Office Address']
    if len(address.strip()) == "Address Confidential":
        accurate = False
        address = provider['Head Office Location']
    geodata = cache.get(address)
    if not geodata:
        try:
            geodata = myEncoder.geo_from_address(address)
            sleep(0.02)
        except:
            print("Unexpected error:", sys.exc_info()[0])
            geodata = {}
        cache[address] = geodata
    else:
        print "Cache hit! for '" + address + "'"
    provider['geo'] = {}
    provider['geo']['data'] = geodata
    provider['geo']['accurate'] = accurate
    return provider

results = []

with open('providers.json') as data_file:
    providers = json.load(data_file)
    for provider in providers:
        results.append(geoFromProvider(provider))

f.write(json.dumps(results))
f.close()
sys.exit(-1)

print(myEncoder.geo_from_address(address))

lat = -32.8418769
lng = 151.345344

print(myEncoder.address_from_geo(lat,lng))