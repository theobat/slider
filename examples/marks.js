webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var React = __webpack_require__(3);
	var ReactDOM = __webpack_require__(160);
	var Slider = __webpack_require__(161);
	
	var style = { width: 400, margin: 50 };
	var marks = {
	  '-10': '-10°C',
	  0: '0°C',
	  26: '26°C',
	  37: '37°C',
	  100: '100°C'
	};
	
	var log = function log(value) {
	  console.log(value);
	};
	
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Slider with marks, `step=null`'
	    ),
	    React.createElement(Slider, { min: -10, marks: marks, step: null, onChange: log, defaultValue: 20 })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Slider with marks and steps'
	    ),
	    React.createElement(Slider, { min: -10, marks: marks, step: 10, onChange: log, defaultValue: 20 })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Slider with marks, `included=false`'
	    ),
	    React.createElement(Slider, { min: -10, marks: marks, included: false, defaultValue: 20 })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Slider with marks and steps, `included=false`'
	    ),
	    React.createElement(Slider, { min: -10, marks: marks, step: 10, included: false, defaultValue: 20 })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Range with marks'
	    ),
	    React.createElement(Slider, { min: -10, range: true, marks: marks, onChange: log, defaultValue: [20, 40] })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Range with marks and steps'
	    ),
	    React.createElement(Slider, { min: -10, range: true, marks: marks, step: 10, onChange: log, defaultValue: [20, 40] })
	  )
	), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=marks.js.map