import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Colors} from '../../../res';
import ToolBar from '../../components/common/ToolBar';
import {getUsers} from '../../api/Api';
import {connect} from 'react-redux';
import {hideLoading, showLoading} from '../../redux/actions/LoadingActions';
import TextNormal from '../../components/common/TextNormal';
import LoadingView from '../../components/common/LoadingView';

const Profile = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    handleGetUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetUsers = async () => {
    props.showLoading();
    try {
      let response = await getUsers();
      setUsers(response);
    } catch (e) {
      console.log('handle get users error', e);
    }
    setTimeout(() => {
      props.hideLoading();
    }, 250);
  };

  return (
    <View style={styles.container}>
      <ToolBar title={'Profile'} />
      {props.loading && <LoadingView />}
      <FlatList
        data={users}
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
    backgroundColor: Colors.white,
  },
});

export default connect(
  (state) => ({
    loading: state.loadingState.loading,
  }),
  {hideLoading, showLoading},
)(Profile);
