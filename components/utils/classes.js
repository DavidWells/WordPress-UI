var classNames = require('classnames');

var classUtils = {

	mergeClasses: function(propClasses, defaultClasses, additionalClassObj) {
	  var classString = '';

	  //Initialize the classString with the classNames that were passed in
	  if (propClasses) classString += ' ' + propClasses;

	  //Add in initial classes
	  if (typeof defaultClasses === 'object') {
	    classString += ' ' + classNames(defaultClasses);
	  } else {
	    classString += ' ' + defaultClasses;
	  }

	  //Add in additional classes
	  if (additionalClassObj) classString += ' ' + classNames(additionalClassObj);

	  //Convert the class string into an object and run it through the class set
	  return classNames(this.getClassSet(classString));
	},

	getClassSet: function(classString) {
	  var classObj = {};

	  if (classString) {
	    classString.split(' ').forEach(function(className) {
	      if (className) classObj[className] = true;
	    });
	  }

	  return classObj;
	}

};

module.exports = classUtils;