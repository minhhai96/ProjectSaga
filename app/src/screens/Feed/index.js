import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import ToolBar from '../../components/common/ToolBar';
import BackIcon from '../../components/common/BackIcon';
import * as RootNavigation from '../../router/RootNavigation';
import LoadingView from '../../components/common/LoadingView';
import {connect} from 'react-redux';
import {hideLoading, showLoading} from '../../redux/actions/LoadingActions';
import {getListUsers} from '../../redux/actions/UsersActions';

const Feed = (props) => {
  useEffect(() => {
    getListUsers();
  }, []);

  console.log('props users', props.users);

  return (
    <View style={styles.container}>
      <ToolBar
        LeftComponent={
          <BackIcon
            iconName={'menu'}
            onPress={() => RootNavigation.toggleDrawer()}
          />
        }
        center={'Feed'}
      />
      {props.loading && <LoadingView />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default connect(
  (state) => ({
    loading: state.loadingState.loading,
    users: state.usersState.users,
  }),
  {hideLoading, showLoading, getListUsers},
)(Feed);
