import {connect} from 'react-redux';
import {charactersActions} from '../../../redux/characters';
import View from './view';

const mapStateToProps = state => {
  return {
    charactersList: state.characters.list,
    isFetching: state.characters.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchCharactersList: () =>
      dispatch(charactersActions.fetchCharactersList()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
