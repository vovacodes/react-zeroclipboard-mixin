'use strict';

var ZeroClipboard = require('zeroclipboard');

var ZeroClipboardMixin = {

  componentDidMount: function componentDidMount() {
    var zeroclipboardElementsSelector = this.zeroclipboardElementsSelector || '[data-zeroclipboard-copy-btn]';
    this.clipboardClient = new ZeroClipboard();
    this.clipboardClient.clip(this.getDOMNode().querySelectorAll(zeroclipboardElementsSelector));
  },
  componentDidUpdate: function componentDidUpdate() {
    var zeroclipboardElementsSelector = this.zeroclipboardElementsSelector || '[data-zeroclipboard-copy-btn]';
    var copyBtns = Array.prototype.slice.apply(this.getDOMNode().querySelectorAll(zeroclipboardElementsSelector));

    if (isArraysContentEqual(copyBtns, this.clipboardClient.elements())) {
      // this.clipboardClient was already applied to these buttons, do nothing.
      return;
    }

    this.clipboardClient.unclip();
    this.clipboardClient.clip(copyBtns);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.clipboardClient.destroy();
  }

};

ZeroClipboardMixin.ZeroClipboard = ZeroClipboard;

function isArraysContentEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  return a.every(function(element) { return b.indexOf(element) >= 0; })
}

module.exports = ZeroClipboardMixin;
