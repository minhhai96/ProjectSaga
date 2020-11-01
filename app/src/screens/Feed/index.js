import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ToolBar from '../../components/common/ToolBar';
import BackIcon from '../../components/common/BackIcon';
import * as RootNavigation from '../../router/RootNavigation';
import LoadingView from '../../components/common/LoadingView';
import {connect} from 'react-redux';
import {hideLoading, showLoading} from '../../redux/actions/LoadingActions';
import {getListUsers} from '../../redux/actions/UsersActions';
import TextNormal from '../../components/common/TextNormal';

const Feed = (props) => {
  useEffect(() => {
    props.getListUsers();
  }, []);

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
      <FlatList
        data={props.users}
        renderItem={(item) => {
          return <TextNormal>{item.item.login}</TextNormal>;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
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
