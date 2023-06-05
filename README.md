## nodejs-package


[![Maintainability](https://api.codeclimate.com/v1/badges/9c7351f15aed1d55a077/maintainability)](https://codeclimate.com/github/DVR2210/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/9c7351f15aed1d55a077/test_coverage)](https://codeclimate.com/github/DVR2210/frontend-project-46/test_coverage)


### Hexlet tests and linter status:
[![Actions Status](https://github.com/DVR2210/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/DVR2210/frontend-project-46/actions)

### NAME

       gendiff - compare files line by line

### SYNOPSIS

       gendiff [option] filepath1 filepath2

### DESCRIPTION

       Compares two configuration files and shows a difference.
       -f, --format <type> There are three possible formats: stylish (default), plain and json.
       Supported file extensions: json, yaml/yml.

### USAGE

      In stylish format added properties are marked with plus, removed - with minus. 
      For updated properties old value is marked with minus, new value - with plus. 
      Unchanged properties aren't marked at all.
      In plain format unchanged properties are not mentioned in diff.

      # stylish format (default):
       gendiff path/to/file1.json another/path/file2.yaml

      {
        + follow: false
          setting1: Value 1
        - setting2: 200
        - setting3: true
        + setting3: {
              key: value
          }
        + setting4: blah blah
        + setting5: {
              key5: value5
          }
      }

      # plain fornat:
      gendiff --format filepath1 filepath2

      Property 'common.follow' was added with value: false
      Property 'group1.baz' was updated. From 'bas' to 'bars'
      Property 'group2' was removed

      # json format:
      gendiff --format path/file1.yml anotherpath/file2.json

      [
        {
          "key": "common",
          "type": "nested",
          "value": [
            {
              "key": "follow",
              "type": "added",
              "value": false
            }
          ]
        }
      ]

### SYSTEM REQUREMENTS:

      Node 14.x version at least

### HOW TO INSTALL:

      # clone this repository on your machine with SSH key
      $git clone git@github.com:PShorin/frontend-project-46.git

      #go to directory where you downloaded it
      $cd directory-name

      # run the one of these command to install all necessary dependencies
      $make install
      or
      $npm ci

      # this command is responsible for linking commands from package.json to "./bin" directory
      $npm link

      # run utility
      $ gendiff <filepath1> <filepath2>

      # run help 
      $ gendiff -h     

### LAUNCH EXAMPLE

1. Difference calculation between two flat JSON files and JSON  files. 
[![asciicast](https://asciinema.org/a/k9dzdDtGA6xTenSOaiCuFVKBa.svg)](https://asciinema.org/a/k9dzdDtGA6xTenSOaiCuFVKBa)

2. Difference calculation between two JSON files, default format (stylish).
[![asciicast](https://asciinema.org/a/ZmWyGBG3kG6tqsnickU4xShRC.svg)](https://asciinema.org/a/ZmWyGBG3kG6tqsnickU4xShRC)

3. Difference calculation between two YAML files, format plain.
[![asciicast](https://asciinema.org/a/ONNItkV42sEwhgfdr8QpRe0cq.svg)](https://asciinema.org/a/ONNItkV42sEwhgfdr8QpRe0cq)

4. Difference calculation between two YAML files, format json.
[![asciicast](https://asciinema.org/a/BOigaftHcSpwUXlJZgS0xt9IP.svg)](https://asciinema.org/a/BOigaftHcSpwUXlJZgS0xt9IP)


