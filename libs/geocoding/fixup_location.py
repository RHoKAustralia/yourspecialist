
import json

f = open('geoproviders.fixed.json', 'w')

result = []
with open('geoproviders.json') as data_file:
    providers = json.load(data_file)
    for provider in providers:
        if len(provider['geo']['data']) > 0:
            provider['geo']['data'] = provider['geo']['data'][0]
            provider['geo']['data']['location'] = [float(provider['geo']['data']['lng']), float(provider['geo']['data']['lat'])]
        result.append(provider)

f.write(json.dumps(result))
f.close()


