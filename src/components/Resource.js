import React, { Component, PropTypes } from 'react';

import Button from './Button';
import './Resource.css';

class Resource extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favCount: 0,
      unFavCount: 0
    }
  }

  addFav = () => (
   this.setState({
      favCount: this.state.favCount +1
    })
  );

  unFav = () => (
   this.setState({
      unFavCount: this.state.unFavCount -1
    })
  );

  render() {
  const  { title, url } = this.props;
    return (
      <div className="Resource">
        <h3>
          <a href={url} title={title}>
            {title}
          </a>
        </h3>
        <div className='btn-group'>
          <Button type="favorite" onClick={this.addFav} />
          <span className="FavCount">
            {this.state.favCount + this.state.unFavCount}
          </span>
          <Button type="delete" onClick={this.unFav} />
        </div>
      </div>
    );
  }
}

Resource.propTypes = {
  favCount: PropTypes.number,
  postDate: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}

export default Resource;
