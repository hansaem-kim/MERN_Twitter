import React from 'react';

//testing changes

class TweetBox extends React.Component {
  render() {
    return (
        <div>
            <h3>{this.props.text}</h3>
        </div>
    );
  }
}

export default TweetBox;