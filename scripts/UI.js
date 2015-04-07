// ES6
import React from 'react';
import Button from './button';
import Postbox from './Postbox';

export default class App extends React.Component {
  _buttonFunc() {
  	alert('hi');
  }
  render() {
    return (
    	<div>
	      <h1>WordPress UI.</h1>

	      <div id="Buttons">
	      	  <h2>Buttons.</h2>
		  	  {/* Inline example */}
		      <Button onClick={this._buttonFunc} label="Button Primary" primary="true" />

		      {/* Nested children example */}
		      <Button onClick={this._buttonFunc} primary="true">
		      	Button Primary with children
		      </Button>

		  	  {/* Disabled example */}
		      <Button onClick={this._buttonFunc} label="Button Primary" disabled="true" primary="true" />

	      	  {/* Inline example */}
	          <Button onClick={this._buttonFunc} label="Button Secondary" />

	          {/* Nested children example */}
		      <Button onClick={this._buttonFunc} >
		      	 Button Secondary with children
		      </Button>

		  	  {/* Button with link  example */}
		      <Button onClick={this._buttonFunc}
		      		  label="Button With Link"
		      		  href="http://google.com"
		      		  primary="true">
		      </Button>

		      <h2>Postbox.</h2>
		      <div className="postbox-container">
		      	<Postbox label="Publish"/>
		      </div>

	      </div>

	    </div>
    );
  }
}