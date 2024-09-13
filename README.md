[![Maintainability](https://api.codeclimate.com/v1/badges/e856060bb13eba1be9a7/maintainability)](https://codeclimate.com/github/VladimirMastepanov/frontend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e856060bb13eba1be9a7/test_coverage)](https://codeclimate.com/github/VladimirMastepanov/frontend-project-46/test_coverage)
___
#### JsonYamlDiff – Command-Line Tool for Comparing JSON and YAML Files
**JsonYamlDiff** is a simple and efficient command-line tool designed to compare JSON and YAML files, highlighting differences in both structure and content. It provides an easy way to spot changes between configuration files or data sets, making it an essential utility for developers and system administrators.
___

#### Features
* Supports JSON and YAML formats: Easily compare JSON and YAML files side-by-side.
* Detailed comparison: Identifies and displays differences in file structure, values, and types.
* Command-line interface: Simple CLI commands for quick comparisons.
* Cross-platform: Works on any system that supports Node.js.


#### Installation
To use this tool, you'll need Node.js installed on your machine. Then, install the package globally.
```
# Clone the repository
git clone git@github.com:VladimirMastepanov/JsonYamlDiff.git

# Navigate to the project directory
cd JsonYamlDiff

# Install dependencies
npm install

# Optionally, install globally
npm install -g
```

#### Usage
To compare two files, run the gendiff command:
```
gendiff <file1> <file2>
```
For example:
```
gendiff file1.yml file2.yml
```
[![asciicast](https://asciinema.org/a/tR4BmQ7FKfS9lFRMCHVfojwE4.svg)](https://asciinema.org/a/tR4BmQ7FKfS9lFRMCHVfojwE4)


#### Command-line options:
```
 -V, --version        output the version number
 -f, --format <type>  output format
 -h, --help           display help for command
```
---
#### Technologies and Dependencies
* **Commander** – A popular tool for building CLI applications.
* **js-yaml** – For parsing and handling YAML files.
* **lodash** – Used for deep object comparison.
* **Jest** – For unit testing.


#### Development Tools
* **ESLint** (Airbnb config) – For code style enforcement and linting.
* **Jest** – For writing unit tests to ensure the reliability of the tool.
---

**More examples of the application in action, showcasing output in various formatting options:**

* ###### default:
```
$ gendiff <filepath1> <filepath2>
```
[![asciicast](https://asciinema.org/a/StsP3mneXwaoVEWDZsSIbW8vh.svg)](https://asciinema.org/a/StsP3mneXwaoVEWDZsSIbW8vh)

* ###### plain:
```
$ gendiff -f plain <filepath1> <filepath2>
```

[![asciicast](https://asciinema.org/a/N037EAOWUZ0t6xp9F2zfqSiCG.svg)](https://asciinema.org/a/N037EAOWUZ0t6xp9F2zfqSiCG)

* ###### JSON:
```
$ gendiff -f json <filepath1> <filepath2>
```
[![asciicast](https://asciinema.org/a/0kTbEZ8mVwpwwS7fbTxB1zQ6m.svg)](https://asciinema.org/a/0kTbEZ8mVwpwwS7fbTxB1zQ6m)