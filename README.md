<p align="center">

<a href="https://github.com/generate/generate">
<img height="150" width="150" src="https://raw.githubusercontent.com/generate/generate/master/docs/logo.png">
</a>
</p>

Generate generator for creating React applications, components, and related React resources.

# @generate/react

[![NPM version](https://img.shields.io/npm/v/@generate/react.svg?style=flat)](https://www.npmjs.com/package/@generate/react) [![NPM monthly downloads](https://img.shields.io/npm/dm/@generate/react.svg?style=flat)](https://npmjs.org/package/@generate/react)

![@generate/react demo](https://raw.githubusercontent.com/generate/generate/master/docs/demo.gif)

**Work in progress**

_This generator is still a work in progress and will be published soon._

## Getting started

### Install

**Installing the CLI**

To run the `@generate/react` generator from the command line, you'll need to install [Generate][] globally first. You can do that now with the following command:

```sh
$ npm install --global generate
```

This adds the `gen` command to your system path, allowing it to be run from any directory.

**Install @generate/react**

Install this module with the following command:

```sh
$ npm install --global @generate/react
```

### CLI

Run this generator's `default` [task](/tasks.md#default) with the following command:

```sh
$ gen @generate/react
```

**What you should see in the terminal**

If completed successfully, you should see both `starting` and `finished` events in the terminal, like the following:

```sh
[00:44:21] starting ...
...
[00:44:22] finished ✔
```

If you do not see one or both of those events, please [let us know about it](../../issues).

### Help

To see a general help menu and available commands for 's CLI, run:

```sh
$  help
```

## Available tasks

All available tasks for this generator.

### [react:react](generator.js#L21)

Generate a `index.js` file to the current working directory. Learn how to [customize behavior(#customization) or override built-in templates.

**Example**

```sh
$ gen react:react
```

### [react](generator.js#L33)

Alias for running the [react](#react) task with the following command:

**Example**

```sh
$ gen react
```

Visit Generate's [documentation for tasks](https://github.com/generate/generate/blob/master/docs/tasks.md).

## Next steps

### Running unit tests

It's never too early to begin running unit tests. When you're ready to get started, the following command will ensure the project's dependencies are installed then run all of the unit tests:

```sh
$ npm install && test
```

### Publishing your generator

If you're tests are passing and you're ready to publish your generator to [npm](https://www.npmjs.com), you can do that now with the following command:

**Are you sure you're ready?!**

Let's go!

```sh
$ npm publish
```

## About

### What is "Generate"?

Generate is a command line tool and developer framework for scaffolding out new GitHub projects using [generators](https://github.com/generate/generate/blob/master/docs/generators.md) and [tasks](https://github.com/generate/generate/blob/master/docs/tasks.md).

Answers to prompts and the user's environment can be used to determine the templates, directories, files and contents to build. Support for [gulp](https://gulpjs.com), [base](https://github.com/node-base/base) and [assemble](https://github.com/assemble/assemble) plugins, and much more.

**For more information**:

* Visit the [generate project](https://github.com/generate/generate/)
* Visit the [generate documentation](https://github.com/generate/generate/blob/master/docs/)
* Find [generators on npm](https://www.npmjs.com/browse/keyword/generate-generator) (help us [author generators](https://github.com/generate/generate/blob/master/docs/micro-generators.md))

### Community

Bigger community means more plugins, better support and more progress. Help us make Generate better by spreading the word:

* Show your love by starring the project
* Tweet about Generate. Mention using `@generatejs`, or use the `#generatejs` hashtag
* Get implementation help on [StackOverflow](http://stackoverflow.com/questions/tagged/generate) with the `generatejs` tag
* Discuss Generate with us on [Gitter](https://gitter.im/generate/generate)
* If you publish a generator, to make your project as discoverable as possible, please add the unique keyword `generategenerator` to your project's package.json.

### Contributors

| **Commits** | **Contributor** |  
| --- | --- |  
| 565 | [jonschlinkert](https://github.com/jonschlinkert) |  
| 27  | [doowb](https://github.com/doowb) |  
| 1   | [dawsbot](https://github.com/dawsbot) |  
| 1   | [stefanwalther](https://github.com/stefanwalther) |  

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Yash Pandit**

* [GitHub Profile](https://github.com/yashpandit)
* [Twitter Profile](https://twitter.com/iyashpandit)

### License

Copyright © 2020, [Yash Pandit](https://github.com/yashpandit).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.8.0, on January 10, 2020._