import {connect} from 'react-redux';
import {charactersActions} from '../../../redux/characters';
import View from './view';

const mapStateToProps = state => {
  return {
    comic: state.comics.item,
    isFetching: state.characters.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    postCharacter: data => dispatch(charactersActions.postCharacter(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
