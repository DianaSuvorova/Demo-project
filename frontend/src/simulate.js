
export function keydown(k) {
  const oEvent = document.createEvent('KeyboardEvent');

  // Chromium Hack
  Object.defineProperty(oEvent, 'keyCode', {
    get: function get() { return this.keyCodeVal; },
  });
  Object.defineProperty(oEvent, 'which', {
    get: function get() { return this.keyCodeVal; },
  });

  if (oEvent.initKeyboardEvent) {
    oEvent.initKeyboardEvent('keydown', true, true, document.defaultView, false, false, false, false, k, k);
  } else {
    oEvent.initKeyEvent('keydown', true, true, document.defaultView, false, false, false, false, k, 0);
  }

  oEvent.keyCodeVal = k;

  if (oEvent.keyCode !== k) {
    //eslint-disable-next-line
    alert(`keyCode mismatch ${oEvent.keyCode}  ( ${oEvent.which} )`);
  }

  document.dispatchEvent(oEvent);
}
