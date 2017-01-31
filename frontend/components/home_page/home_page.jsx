import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import $ from 'jquery';

import SelectStep from '../step/select_step';
import LoginStep from '../step/login_step';
import VerifyStep from '../step/verify_step';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {finished: false, stepIndex: 0, bank: "", username: "", password: "", loading: false, answer: ""};
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.selectBank = this.selectBank.bind(this);
    this.updateParent = this.updateParent.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    const {loading, stepIndex} = this.state;
    if (loading && nextState.loading) {
      const {token, approval} = nextProps;
      if (token.length !== 0 && !approval) {
        this.setState({loading: false, stepIndex: stepIndex + 1});
      } else if (token.length !== 0 && approval) {
        this.setState({loading: false, stepIndex: stepIndex + 1, finished: true});
      }
    }
  }

  handleNext() {
    const {stepIndex, username, password, answer} = this.state;
    const {userLogin, verifyUser, token, user} = this.props;
    const nextIndex = stepIndex + 1;
    if (nextIndex === 2) {
      this.setState({loading: true});
      userLogin({username, password});
    } else if (nextIndex === 3) {
      this.setState({loading: true});
      verifyUser({token, answer, user});
    } else {
      this.setState({
        stepIndex: nextIndex,
        finished: stepIndex >= 2,
      });
    }
  }

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1
      });
    }
  }

  updateParent(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  selectBank(e) {
    e.preventDefault();
    let bank = $(e.target).text();
    console.log(bank);
    this.setState({bank});
  }

  getStepContent(stepIndex) {
    const {bank, username, password, answer} = this.state;
    switch (stepIndex) {
      case 0:
        return (<SelectStep bank={bank} selectBank={this.selectBank}/>);
      case 1:
        return (<LoginStep updateParent={this.updateParent} username={username} password={password}/>);
      case 2:
        return (<VerifyStep updateParent={this.updateParent} answer={answer}/>);
      default:
        return 'Finished Verification :)';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
    return (
      <div className="home-page">
        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Bank Select</StepLabel>
            </Step>
            <Step>
              <StepLabel>Bank Login</StepLabel>
            </Step>
            <Step>
              <StepLabel>Verify</StepLabel>
            </Step>
          </Stepper>
          <div style={contentStyle}>
            {finished ? (
              <p>
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    this.setState({stepIndex: 0, finished: false});
                  }}
                >
                  Click here
                </a> to reset the example.
              </p>
            ) : (
              <div>
                <div className="step-frame">
                  {this.getStepContent(stepIndex)}
                </div>
                <div style={{marginTop: 12}}>
                  <FlatButton
                    label="Back"
                    disabled={stepIndex === 0}
                    onTouchTap={this.handlePrev}
                    style={{marginRight: 12}}
                  />
                  <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    primary={true}
                    onTouchTap={this.handleNext}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <Dialog
          title="Please wait"
          modal={false}
          open={this.state.loading}
        >
          <span>Loading your data...</span><br />
          <CircularProgress size={80} thickness={5} />
        </Dialog>
      </div>
    );
  }
}

export default HomePage;
