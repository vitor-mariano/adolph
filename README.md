# Adolph

Smart functions for daily challenges

## Installation

`npm install --save adolph`

## Functions

### clearString

`String → String`

###### Added in v0.1.0

Remove accents and uppercase characters.

``` javascript
clearString('José Raphaël'); // jose raphael
```

### filterByProp

`String → a → [{k: v}] → [{k: v}]`

###### Added in v0.1.0

Filter objects from `list` where `prop` matches the given `query`.

``` javascript
const list = [{ name: 'João Silva' }, { name: 'José Raphaël' }, { name: 'Joseph Climber' }];
filterByProp('name', 'jose', list); // [{ name: 'José Raphaël' }, { name: 'Joseph Climber' }]
```

### paginate

`Number → Number → [a] → [a]`

###### Added in v0.1.0

Get the `nth` portion of `n` size portions of a `list`.

``` javascript
const list = [{ id: 1 }, { id: 2 }, ..., { id: n }];
paginate(2, 10, list); // [{ id: 11 }, { id: 12 }, ..., { id: 20 }]
```

### removeByProp

`String → a → [{k: v}] → [{k: v}]`

###### Added in v0.1.0

Remove the first object from `list` where `prop` matches the given `value`.

``` javascript
const list = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4}];
removeByProp('id', 2, list); // [{ id: 1 }, { id: 3 }, { id: 4}]
```

## License

React Fission is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
