export const iTest = (el) => {
  const textField = el.findWhere(c => c.name() === 'TextField');
  const input = textField.findWhere(c => c.name() === 'input');
  const button = el.findWhere(c => c.name() === 'button');
  window.els = {
    el,
    textField,
    input,
    button,
  };

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

  actions.forEach((a, n) => {
    setTimeout(() => a(), (n * 250) + 3000);
  });
};
