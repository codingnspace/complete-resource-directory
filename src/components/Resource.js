import React, { Component, PropTypes } from 'react';

import './Resource.css';

class Resource extends Component {
  render() {
    const  { isHighlighted, title, url } = this.props;
    const resourceCN = isHighlighted ? "Resource isHighlighted" : "Resource";

    return (
      <div className={resourceCN}>
        <h3>
          <a href={url} title={title}>
            {title}
          </a>
        </h3>
      </div>
    );
  }
}

Resource.propTypes = {
  isHighlighted: PropTypes.bool,
  title: PropTypes.string,
  url: PropTypes.string
}

export default Resource;
