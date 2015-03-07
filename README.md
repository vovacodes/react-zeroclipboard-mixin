# react-zeroclipboard-mixin

[![Dependency Status](https://david-dm.org/wizardzloy/react-zeroclipboard-mixin.svg)](https://david-dm.org/wizardzloy/react-zeroclipboard-mixin)
[![Dev Dependency Status](https://david-dm.org/wizardzloy/react-zeroclipboard-mixin/dev-status.svg)](https://david-dm.org/wizardzloy/react-zeroclipboard-mixin)

React mixin for automatic binding of the ZeroClipboard client to the clipboard action DOM elements

## Installation

```npm install --save react-zeroclipboard-mixin```

## Usage

ZeroClipboardMixin is available as a CommonJS module (so that you could simply ```require``` it with Browserify, Webpack, etc.) or as UMD bundle (could be used as a AMD, CommonJS or browser global).
UMD bundle includes ZeroClipboard and could be found under the ```./dist/zeroclipboard-mixin.bundle.js```.

```javascript

var React = require('react');
var ZeroClipboardMixin = require('react-zeroclipboard-mixin');

// configure ZeroClipboard before using mixin
ZeroClipboardMixin.ZeroClipboard.config({
  swfPath: 'http://rawgit.com/zeroclipboard/zeroclipboard/master/dist/ZeroClipboard.swf'
});

var MyCopyButton = React.createClass({

  // CSS selector that would be used to find zeroclipboard action elements.
  // Default: '[data-zeroclipboard-copy-btn]'
  zeroclipboardElementsSelector: '[data-zeroclipboard-copy-btn]',

  mixins: [ ZeroClipboardMixin ],

  render: function() {
    return (
      <div>
        // Cannot be top-level element, so wrap it with div
        <button data-zeroclipboard-copy-btn data-clipboard-text="Text to copy">Copy</button>
      </div>
    );
  }

});

React.render(<MyCopyButton/>, document.body)

```

### Notes

* Doesn't support top-level elements as a clipboard control elements.
* ```ZeroClipboard``` is available as a property of mixin ```ZeroClipboardMixin.ZeroClipboard```.
* You always have to configure ```ZeroClipboard``` and set the path to its ```.swf``` file, before using this mixin.
