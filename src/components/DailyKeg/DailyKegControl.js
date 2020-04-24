import React from 'react';
import DailyKeg from './DailyKeg';
import DailyKegDetails from './DailyKegDetails';

class DailyKegControl extends React.Component {

  constructor(props) {

    super(props);
  }

  handleChangingSelectedTicket = () => {

  }

  render() {

    return (
      <React.Fragment>
        <DailyKeg masterKegList={this.props.masterKegList} /><br />
        <button type="button"> Details </button>
      </React.Fragment>
    );
  }
}

export default DailyKegControl; 