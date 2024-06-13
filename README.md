[![Maintainability](https://api.codeclimate.com/v1/badges/e856060bb13eba1be9a7/maintainability)](https://codeclimate.com/github/VladimirMastepanov/frontend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e856060bb13eba1be9a7/test_coverage)](https://codeclimate.com/github/VladimirMastepanov/frontend-project-46/test_coverage)
___
## Comparison two JSON or YML files



### This is a simple console program to compare two files in format JSON and YAML
___

##### Help and additional information

    $ gendiff -h

There are three options for displaying the comparison result:

* stylish (default)
* plain
* json

###### To display the comparison result in the format stylish (default):

    $ gendiff <filepath1> <filepath2>
[![asciicast](https://asciinema.org/a/8Au77dzLxiiQtHRNXm6AjeTNW.svg)](https://asciinema.org/a/8Au77dzLxiiQtHRNXm6AjeTNW)

[![asciicast](https://asciinema.org/a/tR4BmQ7FKfS9lFRMCHVfojwE4.svg)](https://asciinema.org/a/tR4BmQ7FKfS9lFRMCHVfojwE4)

[![asciicast](https://asciinema.org/a/StsP3mneXwaoVEWDZsSIbW8vh.svg)](https://asciinema.org/a/StsP3mneXwaoVEWDZsSIbW8vh)

###### To display the comparison result in the format plain:

    $ gendiff -f plain <filepath1> <filepath2>

[![asciicast](https://asciinema.org/a/N037EAOWUZ0t6xp9F2zfqSiCG.svg)](https://asciinema.org/a/N037EAOWUZ0t6xp9F2zfqSiCG)

###### To display the comparison result in the format JSON:

    $ gendiff -f json <filepath1> <filepath2>

[![asciicast](https://asciinema.org/a/0kTbEZ8mVwpwwS7fbTxB1zQ6m.svg)](https://asciinema.org/a/0kTbEZ8mVwpwwS7fbTxB1zQ6m)