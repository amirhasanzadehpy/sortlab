# Sortlab

`sortlab` is a versatile sorting package that supports various data structures, such as number arrays and strings, and provides multiple popular sorting algorithms.

## Features

- **Supports multiple data types**: Number arrays, strings, etc.
- **Multiple sorting algorithms**: Insertion Sort, Selection Sort, Bubble Sort, etc.
- **Easy to use**: Simple API for integrating sorting functionality into your projects.


## Installation

You can install `sortlab` using npm:

```bash
npm install sortlab
```

## Usage

Here are some examples of how to use `sortlab` in your projects:

### Sorting a Number Array

```javascript
const { Sorter } = require('sortlab');

const numberArray = [34, 7, 23, 32, 5, 62];

const sorterInstance = new Sorter(numberArray);

const sortedArray = sorterInstance.bubbleSort();

console.log(`Bubble Sort: ${sortedArray}`);
```

### Sorting a String

```javascript
const { Sorter } = require('sortlab');

const stringData = "sortexample";
const sorterInstance = new Sorter(stringData);

const sortedString = sorterInstance.selectionSort();
console.log(`Quick Sort: ${sortedString}`);
```

## Supported Sorting Algorithms

- **Insertion Sort**
- **Selection Sort**
- **Bubble Sort**
- **Quick Sort**
- More algorithms coming soon...

## Contributing

We welcome contributions! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.
