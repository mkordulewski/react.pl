'use strict';

var _jsxFileName = '_js/examples/hello.js';
var name = Math.random() > 0.5 ? 'nieznajomy' : 'internauto';
var HELLO_COMPONENT = ('\nclass HelloMessage extends React.Component {\n  render() {\n    return <div>Witaj, {this.props.name}.</div>;\n  }\n}\n\nReactDOM.render(<HelloMessage name="' + name + '" />, mountNode);\n').trim();

ReactDOM.render(React.createElement(ReactPlayground, { codeText: HELLO_COMPONENT, __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  }
}), document.getElementById('helloExample'));