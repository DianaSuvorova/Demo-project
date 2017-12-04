import assert from 'assert';

const successes = [];
const failures = [];
const text = [];

function formatHeader(msg) {
  return `\n${msg}`;
}

function formatMessage(msg) {
  return `  ${msg}`;
}


const makeTextFile = (content) => {
  const data = new Blob([content], { type: 'text/plain' });

  // if (textFile !== null) {
  //   window.URL.revokeObjectURL(textFile);
  // }

  const textFile = window.URL.createObjectURL(data);

  // returns a URL you can use as a href
  //eslint-disable-next-line
  console.log(`open ${textFile}`);
  return textFile;
};


export const print = () => {
  const successLength = successes.length;
  const failureLength = failures.length;
  if (successLength) {
    const pluralized = `assertion${
      successLength > 1 ? 's' : ''
    }`;
    const headerText = formatHeader(
      `${successes.length} ${pluralized} passed\n`
    );
    text.push(headerText);
    successes.forEach(success => text.push(success));
  }
  if (failures.length) {
    const pluralized = `assertion${
      failureLength > 1 ? 's' : ''
    }`;
    const failedHeader = formatHeader(
      `${failures.length} ${pluralized} failed\n`
    );
    text.push(failedHeader);
    failures.forEach(failure => text.push(failure));
  }
  makeTextFile(text.join(''));
};

export const describe = (scope, assertions) => {
  const headerText = formatHeader(scope);
  text.push(headerText);
  assertions();
//  print();
};

export const it = (message, assertion) => {
  try {
    assertion(assert);
    successes.push(formatMessage(message));
  } catch (err) {
    failures.push(formatMessage(message));
  }
};
