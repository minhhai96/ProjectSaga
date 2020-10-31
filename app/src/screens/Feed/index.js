import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import ToolBar from '../../components/common/ToolBar';
import BackIcon from '../../components/common/BackIcon';
import * as RootNavigation from '../../router/RootNavigation';
import LoadingView from '../../components/common/LoadingView';
import {connect} from 'react-redux';
import {hideLoading, showLoading} from '../../redux/actions/LoadingActions';

const Feed = (props) => {
  useEffect(() => {
    props.showLoading();
    setTimeout(() => {
      props.hideLoading();
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }),
  {hideLoading, showLoading},
)(Feed);
