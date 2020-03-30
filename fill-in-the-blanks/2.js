try {
  const title = 'fill-in-2';
  console.group(title);

  const _ = {
    _: {
      _: ''
    },
    _: [],
    keepLetters: function () {
      this._._ = this._._.replace(/[^a-zA-Z]/gi, '');
    },
    handler: function (element, event) {
      // debugger;
      const newWord = event.target.value;
      this.state.word = newWord;
      this.keepLetters();
      element.innerHTML = this.state.word;
      this.log.push({
        newWord,
        thisWord: this.state.word
      });
    },
    view: function (id) {
      // debugger;
      const outputEl = document.createElement('p');
      outputEl.innerHTML = this.state.word;

      const inputEl = document.createElement('input');
      inputEl.type = 'text';
      inputEl.placeholder = 'type here';
      inputEl.onkeyup = this.handler.bind(this, _);

      const container = document.createElement('div');
      container.id = id;
      container.appendChild(inputEl);
      container.appendChild(outputEl);
      container.className = 'exercise';
      container.onclick = (function (_) {
        if (_.target === _.currentTarget) console.log(title, _);
      }).bind(_);

      return container;
    },
  }

  _
    .getElementById(_)
    .appendChild(_.view(_));


  const assert = (assertion, message) => {
    if (assertion) {
      console.log('%cPASS: ' + message, 'color:green');
    } else {
      console.log('%cFAIL: ' + message, 'color:red');
    }
  };

  assert(obj.state.word === '', 'Test 0');

  obj.state.word = 'asdf';
  obj.keepLetters();
  assert(obj.state.word === 'asdf', 'Test 1');

  obj.state.word = '1@2-5+6';
  obj.keepLetters();
  assert(obj.state.word === '', 'Test 2');

  obj.state.word = 'a_s0d`f';
  obj.keepLetters();
  assert(obj.state.word === 'asdf', 'Test 3');

  obj.state.word = '';
  assert(obj.state.word === '', 'Test 4');

  console.groupEnd();
} catch (err) {
  console.log(err);
  console.groupEnd();
}
