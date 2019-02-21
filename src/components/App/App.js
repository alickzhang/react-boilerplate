import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from './AppActions';

class App extends Component {
  componentDidMount() {
    const { initialize } = this.props;
    initialize();
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  data: state.app.data
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...AppActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
