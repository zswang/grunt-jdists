# grunt-jdists [![Build Status](https://img.shields.io/travis/zswang/grunt-jdists/master.svg)](https://travis-ci.org/zswang/grunt-jdists) [![NPM version](https://img.shields.io/npm/v/grunt-jdists.svg)](http://badge.fury.io/js/grunt-jdists)

> Code block processing with [jdists](https://github.com/zswang/jdists).

## Installation

Install package with NPM and add it to your development dependencies:

`npm install --save-dev grunt-jdists`

## The "jdists" task

### Overview

In your project's Gruntfile, add a section named `jdists` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jdists: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

## Options

- `remove`

	Remove block tag name list (default "remove,test")

- `trigger`

	Trigger name list (default "release")

- `config`

	Path to config file (default ".jdistsrc")

MIT © [zswang](http://weibo.com/zswang)