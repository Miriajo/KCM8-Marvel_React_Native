import {connect} from 'react-redux';
import {comicsActions} from '../../../redux/comics';
import View from './view';

const mapStateToProps = state => {
  return {
    comicsList: state.comics.list,
    isFetching: state.comics.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchComicsList: () => {
      dispatch(comicsActions.fetchComicsList());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
