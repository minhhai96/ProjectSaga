import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {Colors} from '../../../res';
import ToolBar from '../../components/common/ToolBar';
import {getUsers} from '../../api/Api';
import {connect} from 'react-redux';
import {hideLoading, showLoading} from '../../redux/actions/LoadingActions';
import TextNormal from '../../components/common/TextNormal';
import LoadingView from '../../components/common/LoadingView';
import {SafeAreaView} from 'react-native-safe-area-context';
import {sizeWidth} from '../../ultils/SizeUltils';

const Profile = (props) => {
  // const [users, setUsers] = useState([]);
  //
  // useEffect(() => {
  //   handleGetUsers();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  //
  // const handleGetUsers = async () => {
  //   props.showLoading();
  //   try {
  //     let response = await getUsers();
  //     setUsers(response);
  //   } catch (e) {
  //     console.log('handle get users error', e);
  //   }
  //   setTimeout(() => {
  //     props.hideLoading();
  //   }, 250);
  // };

  console.log("Dimensions.get('window').width", Dimensions.get('window').width);

  return (
    <SafeAreaView style={styles.container}>
      {/*<ToolBar title={'Profile'} />*/}
      {/*{props.loading && <LoadingView />}*/}
      {/*<FlatList*/}
      {/*  data={users}*/}
      {/*  renderItem={(item) => {*/}
      {/*    return <TextNormal>{item.item.login}</TextNormal>;*/}
      {/*  }}*/}
      {/*  keyExtractor={(item, index) => index.toString()}*/}
      {/*/>*/}
      <View style={styles.triangleCorner} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  triangleCorner: {
    height: sizeWidth(503),
    backgroundColor: '#2DB3C9',
    borderLeftWidth: Dimensions.get('window').width,
    borderBottomWidth: 120,
    borderLeftColor: 'transparent',
    borderBottomColor: 'white',
  },
});

export default connect(
  (state) => ({
    loading: state.loadingState.loading,
  }),
  {hideLoading, showLoading},
)(Profile);
