import { it, describe, print } from './reporter';

const assert = require('assert');

export const iTest = (el) => {
  describe('login flow', (test) => {
    it('lets proceed to chat rooms after name input', () => {
      const textField = el.findWhere(c => c.name() === 'TextField');
      const input = textField.findWhere(c => c.name() === 'input');
      const button = el.findWhere(c => c.name() === 'button');
      const actions = [
        () => input.getDOMNode().focus(),
        // TODO instead of input.instance().value need to simulateKeypress
        () => (input.instance().value = 'D'),
        () => (input.instance().value = 'Da'),
        () => (input.instance().value = 'Dav'),
        () => (input.instance().value = 'Davi'),
        () => (input.instance().value = 'David'),
        () => input.simulate('change', input),
        () => button.simulate('click', button),
      ];

      actions.forEach(a => a());
      const chat = el.findWhere(c => c.name() === 'Chat');
      test(assert.ok(chat));
    });
  });
  print();
};
