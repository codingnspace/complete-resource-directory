import React, { Component, PropTypes } from 'react';
import { groupBy } from 'lodash';

import Resource from './Resource';

import './ResourceList.css';

class ResourceList extends Component {
  render() {
    const groupedResources = groupBy(this.props.resources, 'topic');
    const topicsArr = Object.keys(groupedResources);

    const allResources = topicsArr.map(topic => {
      const resourcesByTopic = groupedResources[topic].map(resource => {
        if (!resource.title.toLowerCase().includes(this.props.filterText.toLowerCase())
          || (!resource.isHighlighted && this.props.isHighlightedOnly)) {
          return;
        } else {
          return (
            <Resource title={resource.title} url={resource.url} isHighlighted={resource.isHighlighted} />
          );
        }
      }
      );

      return (
        <div className="Resource-Group">
          <h2>{topic}</h2>
          {resourcesByTopic}
        </div>
      );
    })

    return (
      <div>{allResources}</div>
    );
  }
}

export default ResourceList;
