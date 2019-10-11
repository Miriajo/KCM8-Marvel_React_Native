import {connect} from 'react-redux';
import View from './view';
//import {charactersActions} from '../../../redux/characters';

const mapStateToProps = state => {
  return {
    character: state.characters.item,
    isFetching: state.characters.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
