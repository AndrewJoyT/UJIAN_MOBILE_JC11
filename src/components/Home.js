import React, {useEffect} from 'react';
import {View,FlatList,TouchableWithoutFeedback,StyleSheet,Platform,} from 'react-native';
import {Header} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

import {getPostList, getRestaurantDetails} from '../redux/actions';
import {HomeIcon} from './HomeIcon'
import {RestaurantCard} from './RestaurantCard';

export const Home = ({navigation}) => {
  const Actions = useDispatch();

  const Refresh = useSelector(({Post}) => Post.Refresh);
  const PostList = useSelector(({Post}) => Post.PostList);
  const User = useSelector(({Auth}) => Auth.username);

  useEffect(() => {
    Actions(getPostList());
  }, [Actions]);

  const goToDetails = restaurant => {
    Actions(getRestaurantDetails(restaurant));
    navigation.navigate('RestaurantDetails');
  };

  const onRefresh = () => {
    console.log('refresh');
    Actions(getPostList());
  };

  return (
    <View style={style.containerStyle}>
      <Header
        rightComponent={{
          text: `Hello, ${User}`,
          style: {color: 'white', fontSize: 18, fontWeight: '700'},
        }}
        leftComponent={{
          width: 50,
          icon: 'ticket',
          color: 'white',
          size: 25,
          type: 'font-awesome',
        }}
        containerStyle={{
          backgroundColor: 'tomato',
          justifyContent: 'space-around',
          paddingLeft: 25,
          elevation: 3,
          marginTop: Platform.OS === 'ios' ? 0 : -25,
        }}
        rightContainerStyle={{
          flex: 2,
          marginRight: 15,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingTop: 10,
        }}>
        <HomeIcon
          icons={'food'}
          types={'material-community'}
          name={'Varian'}
        />
        <HomeIcon
          size={25}
          icons={'credit-card'}
          types={'font-awesome'}
          name={'Kredit'}
        />
        <HomeIcon
          icons={'food-variant'}
          types={'material-community'}
          name={'Resep'}
        />
        <HomeIcon
          icons={'map-marker'}
          types={'font-awesome'}
          name={'Lokasi'}
        />
        <HomeIcon
          size={28}
          icons={'shopping-cart'}
          types={'font-awesome'}
          name={'Keranjang'}
        />
        <HomeIcon
          icons={'hamburger'}
          types={'material-community'}
          name={'Burger'}
        />
        <HomeIcon 
        icons={'pizza'} 
        types={'material-community'} 
        name={'Pizza'} 
        />
        <HomeIcon
          size={35}
          icons={'dots-horizontal'}
          types={'material-community'}
          name={'Lainnya'}
        />
      </View>

      <FlatList
        data={PostList}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            onPress={() => goToDetails(item.restaurant)}>
            <View style={{width: '50%'}}>
              <RestaurantCard data={item} />
            </View>
          </TouchableWithoutFeedback>
        )}
        style={{width: '98%'}}
        numColumns={2}
        keyExtractor={item => item.restaurant.name}
        onRefresh={onRefresh}
        refreshing={Refresh}
      />
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
});
