# ls-lorem

ls-lorem is a JavaScript library for placeholder text generation.

## Installation

Using npm:

```
$ npm i --save ls-lorem
```

Using yarn:

```
$ yarn add ls-lorem
```

## Usage

In Node.js:

### Words
```
// Load the 'words' generator.
const { words } = require('ls-lorem');

// Generate one word.
const wrd = words();
// lorem

// Generate specified number of words.
const wrds = words(9);
// elit aliqua ipsum irure urna voluptate
```

### Sentences

```
// Load the 'sentences' generator.
const { sentences } = require('ls-lorem');

// Generate one sentence.
const sent = sentences();
// Neque in ad do deserunt nunc.

// Generate specified number of sentences.
const sents = sentences(2);
// Ligula enim nibh cras vel. Arcu quam sed qui in labore nulla convallis.
```
