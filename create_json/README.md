# Description

Scripts to scrape NDIS website to find Providers listed by cluster and turn them into JSON files ready for importing into database.

# Dependencies

To run manually from source requires the following (this may not be exhaustive). Tested only on unbuntu 14.04 but should be portable to other linux distributions.

- `bash` or similar `sh` based shell
- `python3`
- `python3` library `requests`
- `java`
- `tabular-java`

## Tabular

Requires the command line version https://github.com/tabulapdf/tabula-java which itself has a dependency on Java. During development the Ubuntu package version `OpenJDK Runtime Environment (IcedTea 2.6.8) (7u121-2.6.8-1ubuntu0.14.04.1)` was used without problem.

# To use (Linux)

The ultimate intent is to create a Dockerfile to automate this process and remove the need for the end user to have a number of dependencies installed.

**1. Download PDFs**

```
cd scrape_website
./grab_provider_lists.sh
cd ..
```

  - Leaves a list of files that it attempted to download in `scrape_website/files_to_grab.txt`
  - Writes downloaded files into directory `raw_data/`

**2. Turn PDFs into JSON files**

This requires `tabular` jar file to be found in the directory `pdftojson/`, see dependencies above.

```
cd pdftojson
./createJSONfromPDF.sh
cd ..
```

  - Process each and every file found in `raw_data/`
  - Leaves `.json` and intermediate `.csv` files in `pdftojson/`

# Debugging

## Wrong / Not Enough PDF Files Found

The web site is scrapped by the script `./` which makes assumptions on what page on the NDIS web site lists the files to be downloaded and how those files are named.

Look in the script for the variable ` ` to chnage the page inspected. Look in the script for the list named `WORDS` to change which files are selected for download. Only URLs with all the words in the list are selected, you may have to fine tune this list over time as the NDIS web site does not use a consistent namign convention.

## PDF to JSON

The tricky step is turning the PDF into a CSV file. PDF is not a format designed for machine reading and we are fortunate that there is a great tool, [Tabular](https://github.com/tabulapdf/tabula-java/wiki) that does this job for us. Even so the parsing is not an exact science and while Tabular works a treat right now that may not be the case if NDIS changes their PDF format unexpectedly.

Once in CVS format the JSON conversion should be fairly robust. If you are experiencing problems look at the intermediate CSV files and compare them by eye with the PDFs first.

John Judge, 28 Nov 2016
