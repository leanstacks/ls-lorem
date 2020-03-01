# ls-lorem

ls-lorem is a JavaScript library for placeholder text generation.

## Installation

With Node.js:

```
$ npm install ls-lorem
```

With Yarn:

```
$ yarn add ls-lorem
```

## Usage

In Node.js:

```
const lorem = require('ls-lorem');
```

### Words

Create a string of words. The maximum number of words is 1000.

```
// Generate one word.
const w1 = lorem.words();
// "lorem"

// Generate specified number of words.
const w2 = lorem.words(6);
// "elit aliqua ipsum irure urna voluptate"
```

Create an array of words. The maximum number of words is 1000.

```
// Generate one word.
const w1 = lorem.wordsAsArray();
// ["lorem"]

// Generate specified number of words.
const w2 = lorem.wordsAsArray(6);
// ["elit","aliqua","ipsum","irure","urna","voluptate"]
```

### Sentences

Create a string of sentences. The maximum number of sentences is 100.

```
// Generate one sentence.
const s1 = lorem.sentences();
// "Neque in ad do deserunt nunc."

// Generate specified number of sentences.
const s2 = lorem.sentences(2);
// "Ligula enim nibh cras vel. Arcu quam sed qui in labore nulla convallis."
```

Create an array of sentences. The maximum number of sentences is 100.

```
// Generate one sentence.
const s1 = lorem.sentencesAsArray();
// ["Neque in ad do deserunt nunc."]

// Generate specified number of sentences.
const s2 = lorem.sentencesAsArray(2);
// ["Ligula enim nibh cras vel.","Arcu quam sed qui in labore nulla convallis."]
```

### Paragraphs

Create a single paragraph as a string or multiple paragraphs as an array. The maximum number of paragraphs in the array is 50.

```
// Generate one paragraph. Returns a string.
const p1 = lorem.paragraph();
// "Voluptate dolore mollit urna nostrud nulla. Commodo irure aliqua ea anim facilisis. Sint excepteur a irure ullamco sed. Sit neque qos sapien veniam mollit sed. Ad nam officia id magna consequat id tempus."

// Generate specified number of paragraphs. Returns an array of strings.
const p2 = lorem.paragraphs(2);
// ["Cupidatat tempus fermentum ullamco sed laoreet mi. Ex neque a dapibus morbi adipiscing. Consequat ipsum ut nibh anim egestas arcu. Dapibus cillum magna tempor commodo. Elit elit consectetur dolore ea bibendum elit. Officia nunc est enim sapien ero. Massa ligula nulla lorem aliqua laboris irure reprehenderit.","Sit duis consectetur magna qos eiusmod voluptate. Fugait posuere sint ornare ipsum voluptate ero. Anim in aliquip consectetur qui aenean commodo. Urna pariatur laboris nulla tempus mollit. Proin cras nisi vitae consequat cillum ea."]

```
