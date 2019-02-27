import { connect } from 'react-redux';
import { SongsterrSelectors } from '../../data-layer/redux-services/songster';

const mapStateToProps = state => ({
  songsLoading: SongsterrSelectors.songsLoaded(state),
  songsCollection: SongsterrSelectors.songsCollection(state),
  songsError: SongsterrSelectors.songsError(state),
});

const mapDispatchToProps = {};

export const SongsterConnectService = connect(
  mapStateToProps,
  mapDispatchToProps,
);
