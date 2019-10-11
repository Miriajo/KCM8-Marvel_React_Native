import {connect} from 'react-redux';
import {charactersActions} from '../../../redux/characters';
import {CharacterForm} from '../../organisms';

const mapStateToProps = state => {
  return {
    comic: state.comics.item,
    character: state.characters.item,
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
)(CharacterForm);
