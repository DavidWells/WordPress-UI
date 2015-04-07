var React = require('react');
var classUtils = require('./utils/classes.js');

var Button = React.createClass({

  propTypes: {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    className: React.PropTypes.string,
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    primary: React.PropTypes.bool,
    label: function(props, propName, componentName){
          if (!props.children && !props.label) {
            return new Error('Warning: Required prop `label` or `children` was not specified in `'+ componentName + '`.')
          }
    },
  },

  render: function() {
    var {
      active,
      disabled,
      label,
      primary,
      ...other
    } = this.props,
    // if href, its a link
    isLink = (this.props.href) ? true : false,
    children = (label) ? <span className="button-label">{label}</span> : this.props.children;

    var classes = classUtils.mergeClasses(this.props.className, 'button', {
          'button-primary': !this.props.disabled && primary,
    });

    var buttonProps = {
      className: classes,
      disabled: disabled
    };

    if (disabled && isLink) {
      return (
        <span {...other}
          className={classes}
          disabled={disabled}>
          {children}
        </span>
      );
    }

    return isLink ? (
      <a {...buttonProps} {...other} >
        {children}
      </a>
    ) : (
      <button {...buttonProps} {...other} >
        {children}
      </button>
    );
  }

});

module.exports = Button;