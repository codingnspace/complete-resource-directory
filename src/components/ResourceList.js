import React, { Component, PropTypes } from 'react';
import { groupBy } from 'lodash';

import Resource from './Resource';
import data from '../data';

import './ResourceList.css';

class ResourceList extends Component {
  render() {
    const groupedResources = groupBy(data, 'topic');
    const topicsArr = Object.keys(groupedResources);

    const allResources = topicsArr.map(topic => {
      const resourcesByTopic = groupedResources[topic].map(resource => (
        <Resource title={resource.title} url={resource.url} />
      ));

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
