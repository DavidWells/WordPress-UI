var React = require('react');
var classUtils = require('./utils/classes.js');

var PostBox = React.createClass({

  propTypes: {
    className: React.PropTypes.string,
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
    } = this.props;
    // if href, its a link

    var classes = classUtils.mergeClasses(this.props.className, 'postbox');

    return (
          <div id="submitdiv" className="postbox">
            <div className="handlediv" title="Click to toggle"><br/></div>
            <h3 className="hndle ui-sortable-handle"><span>{label}</span></h3>
            <div className="inside">

            </div>
          </div>
    );
  }

});

module.exports = PostBox;