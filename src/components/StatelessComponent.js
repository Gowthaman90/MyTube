import React from 'react';
import PropTypes from 'prop-types';

const StatelessComponent = props => (
    <div>
        <h1>{props.title}</h1>
    </div>
);

StatelessComponent.propTypes = {
    title: PropTypes.string.isRequired
};

export default StatelessComponent;
