/**
 * Created by lea on 26/11/2016.
 */

function location(lng, lat, title) {
    var self = this;
    self.lng = lng;
    self.lat = lat;
    self.title = title;

    self.toString = function() {
        return "{ lng:" + self.lng + " , lat: " + self.lat + ", title: '" + self.title + "'}";
    };

    return self;
}

function geo2geoJSONPString(locations) {

    var result = "eqfeed_callback(";
    var features = [];
    var index = 0;
    for( index in locations) {
        console.log(locations[index]);
        features.push(geo2geoJSONObject(locations[index]));
    }
    var result_object = {};
    result_object['type'] = "FeatureCollection";
    result_object['features'] = features;

    result += JSON.stringify(result_object);
    result += ")";
    return result;

}

function geo2geoJSONObject(location) {
    var result = {};
    result['type'] = "Feature";
    var properties = {};
    properties['name'] = location.title;
    properties['marker-symbol'] = "marker";
    result['properties'] = properties;
    var geometry = {};
    geometry['type'] = "Point";
    geometry['coordinates'] = [location.lng,location.lat];
    result['geometry'] = geometry;

    return result;

    /**
     return "{"type":"Feature","properties":
     {"mag":5,
     "place":"Central Mid-Atlantic Ridge",
     "time":1480127945710,
     "updated":1480129026040,
     "tz":-120,
     "url":"http://earthquake.usgs.gov/earthquakes/eventpage/us10007cfu",
     "detail":"http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us10007cfu.geojsonp",
     "felt":null,"cdi":null,"mmi":null,"alert":null,"status":"reviewed","tsunami":0,"sig":385,
     "net":"us","code":"10007cfu","ids":",us10007cfu,","sources":",us,",
     "types":",cap,geoserve,origin,phase-data,","nst":null,"dmin":10.272,
     "rms":0.68,"gap":87,"magType":"mb","type":"earthquake",
     "title":"M 5.0 - Central Mid-Atlantic Ridge"},

     "geometry":{"type":"Point","coordinates":[-32.1043,3.784,10]},

     "id":"us10007cfu"},"
     */
}

module.exports = {
    geo2geoJSONObject: geo2geoJSONObject,
    location: location,
    geo2geoJSONPString: geo2geoJSONPString
};