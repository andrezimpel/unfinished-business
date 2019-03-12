import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SectionsRenderer extends Component {
  render() {
    const { sections } = this.props;

    if (!sections || sections.length === 0) { return null; }

    const renderedSections = sections.map((section, index) => {
      const key = section.contentful_id + index;

      switch (section.__typename) {
        // case 'component':
        //   return <component key={key} text={section.text.text}/>
        default:
          return null;
      }
    });

    return (
      <div className={styles.renderer}>
        {renderedSections}
      </div>
    );
  }
}

SectionsRenderer.propTypes = {
  sections: PropTypes.array.isRequired
}

SectionsRenderer.defaultProps = {
  sections: []
}

export default SectionsRenderer;
