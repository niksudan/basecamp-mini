import * as React from 'react';
import Checkbox from './Checkbox';
import Completion from './Completion';
import DueDate from './DueDate';

const Item = ({ item }) => (
  <div className="is-flex">
    <div>
      <Checkbox completed={item.completed} /> 
    </div>
    <div style={{paddingBottom: '1rem', paddingLeft: '0.5rem'}}>
      <p className="heading" style={{ marginBottom: 0 }}>
        {item.bucket.name} &raquo; <a href={item.parent.app_url} target="_blank">{item.parent.title}</a>
      </p>
      <p style={{ marginBottom: 0 }}>
        <a href={item.app_url} target="_blank">
          <strong>{item.content}</strong>
        </a>
      </p>
      <div>
        {
          item.completed ?
          <Completion completion={item.completion} /> :
          (item.due_on !== null && <DueDate date={item.due_on} />)
        }
      </div>
    </div>
  </div>
);

export default Item;
