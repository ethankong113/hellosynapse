import React from 'react';
import TextField from 'material-ui/TextField';

class VerifyStep extends React.Component {
  render() {
    const {answer, updateParent} = this.props;
    return (
      <div className='verify-step'>
        <span>I heard you like questions so we put a question in your question?</span>
        <TextField
          hintText="Please enter your answer"
          floatingLabelText="MFA answer"
          fullWidth={true}
          value={answer}
          onChange={updateParent('answer')}
          /><br />
      </div>
    );
  }
}

export default VerifyStep;
