/*
User Story: I can type GitHub-flavored Markdown into a text area.
User Story: I can see a preview of the output of my markdown that is updated as I type.
*/
// clear the console
console.clear();

// title component
let Title = React.createClass({ displayName: "Title",
  render: function () {
    let titleClass = 'heading-text-one';
    let codedByClass = 'heading-text-two';
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { className: titleClass }, this.props.title), /*#__PURE__*/
      React.createElement("h5", { className: codedByClass }, "developed by ", /*#__PURE__*/React.createElement("a", { target: "_blank", href: "https://www.freecodecamp.com/virtualsenzu" }, "Graphic Silvr"))));


  } });

ReactDOM.render( /*#__PURE__*/
React.createElement(Title, { title: "Markdown Previewer" }),
document.getElementById('title'));


// tip component
let Tips = React.createClass({ displayName: "Tips",
  propTypes: {
    tipArr: React.PropTypes.array },

  getInitialState: function () {
    return {
      counter: 0 };

  },
  _incrementCounter: function () {
    if (this.state.counter >= this.props.tipArr.length - 1) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
  },
  componentDidMount: function () {
    let myInterval = setInterval(this._incrementCounter, 10000);
    this.setState({ myInterval: myInterval });
  },
  render: function () {
    let classes = 'heading-text-one';
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h5", { className: classes, dangerouslySetInnerHTML: { __html: this.props.tipArr[this.state.counter] } })));


  } });

/*ReactDOM.render(
  <Tips tipArr={[
    "Use # before text to create an H1.",
    "Use ## before text to create an H2."
  ]}/>,
  document.getElementById('tips')
);*/

// markdown and output
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false });

let MarkdownOutput = React.createClass({ displayName: "MarkdownOutput",
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h4", null, "Markdown Output"), /*#__PURE__*/
      React.createElement("hr", null), /*#__PURE__*/
      React.createElement("div", { dangerouslySetInnerHTML: { __html: marked(this.props.value) } })));


  } });

let MarkdownContainer = React.createClass({ displayName: "MarkdownContainer",
  getInitialState: function () {
    return {
      value: '## This is some markdown\n### Consider making your own\n\n#### List items\n- George\n- Paul\n- Ringo\n- John\n\n#### Make it **bold** or make it *italic*\n\n#### Create links [Github](https://github.com/graphicsilvr)' };

  },
  handleChange(event) {
    this.setState({ value: event.target.value });
  },
  render: function () {
    console.log(marked(this.state.value));
    let containerClass = 'rounded-corners container-class col-xs-12 col-md-6';
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: containerClass }, /*#__PURE__*/
      React.createElement("h4", null, "Markdown Input"), /*#__PURE__*/
      React.createElement("hr", null), /*#__PURE__*/
      React.createElement("textarea", { className: "markdown-text", onChange: this.handleChange, value: this.state.value }), /*#__PURE__*/
      React.createElement("hr", null), /*#__PURE__*/
      React.createElement(Tips, { className: "text-center", tipArr: [
        "Use # before text to create an h1.",
        "Use ** ** or __ __ to make text <b>bold</b>.",
        "Use ## before text to create an h2.",
        "Use * * or _ _ to make text <i>italic</i>.",
        "Denote sections of code with ``` ```."] })), /*#__PURE__*/


      React.createElement("div", { className: containerClass }, /*#__PURE__*/
      React.createElement(MarkdownOutput, { value: this.state.value }))));



  } });

ReactDOM.render( /*#__PURE__*/
React.createElement(MarkdownContainer, null),
document.getElementById('markdown-container'));