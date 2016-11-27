# grab list of urls pointing to lists of provider names from NDIS web site
#
# would be much better to have machien readable version of the web site
# this script just looks for links with the specified words in them
# (look for the variable WORDS in the code below)
# they point to documents listing providers by cluster
#

import requests
from html.parser import HTMLParser

# list of words to look for in candidate URLS in LOWERCASE
WORDS = ["provider", "cluster", "pdf"]

# URL to search
baseURL = 'https://www.ndis.gov.au/providers/find-registered-service-providers/provider-lists'

# keep found URLS
URLS = []

# looks at provided URL to see if is is a candidate for one pointing to
# a provider cluster list
# uses the WORDS list from above
def looksGood(text):
    if text.startswith('#'):
        return False
    searchText = text.lower()
    for i in WORDS:
        if not i in searchText:
            return False
    return True


class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        # is it a hyperlink
        if tag == 'a':
            # find hyperlink references and check each one
            for i in attrs:
                if i[0] == "href":
                    if looksGood(i[1]):
                        URLS.append(i[1])
    def handle_endtag(self, tag):
        pass
        # print("Encountered an end tag :", tag)
    def handle_data(self, data):
        pass
        # print("Encountered some data  :", data)

r = requests.get(baseURL)
parser = MyHTMLParser()
parser.feed(r.text)
parser.close()

# build address oart of URL
s = r.url.split('/')
addressURL = s[0] + "//" + s[2]

for i in URLS:
    print(addressURL + i)
