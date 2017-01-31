import React from 'react';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class SelectStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.update = this.update.bind(this);
  }

  componentWillMount() {
  }

  renderList(query = '') {
    const banks = [
      'Bank of America',
      'Citibank',
      'Chase',
      'Wells Fargo',
      'HSBC',
      'US Bank',
      'Ally',
      'BB&T',
      'Charles Schwab',
      'TD Bank',
      'Fidelity',
      'PNC'
    ];
    if (query === '') {
      return banks.slice(0, 6);
    } else {
      return banks.filter(bank => bank.toLowerCase()
      .includes(query.toLowerCase())).slice(0, 6);
    }
  }

  renderButtons() {
    const {query} = this.state;
    const {selectBank} = this.props;
    const banks = this.renderList(query);
    const style = {
      margin: 12,
    };
    return (
      <List>
        {banks.map((bank, idx) => (<RaisedButton
          key={idx} label={bank} value={bank}
          style={style} onTouchTap={selectBank}/>))}
      </List>
    );
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const {query} = this.state;
    return (
      <div className="select-step">
        <span>Please select the bank you wish to link</span>
        <br />
        <TextField
          floatingLabelText="Bank Name"
          floatingLabelFixed={true}
          value={query}
          onChange={this.update('query')}
          fullWidth={true}
        /><br />
      {this.renderButtons()}
      </div>
    );
  }
}

export default SelectStep;
