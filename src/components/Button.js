import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { fullWhite } from 'material-ui/styles/colors';
import Add from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';

const style = {
  margin: 12
};

const Button = ({ type, onClick }) => {
  if (type === 'delete') {
    return (
      <RaisedButton
        secondary={true}
        icon={<Remove color={fullWhite} />}
        style={style}
        onClick={onClick}
      />
    );
  } else if (type === 'favorite') {
    return (
      <RaisedButton
        backgroundColor="#a4c639"
        onClick={onClick}
        icon={<Add color={fullWhite} />}
        style={style}
      />
    );
  }
};

Button.propTypes = {
  type: PropTypes.oneOf(['delete', 'favorite'])
}

export default Button;
