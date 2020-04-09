/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Card, CardItem, Text, Icon, Left, View} from 'native-base';
import {Image} from 'react-native';

export const RestaurantCard = ({data}) => {
  return (
    <Card>
      <View>
        <Image
          source={{uri: data.restaurant.featured_image}}
          style={{height: 200, width: '100%'}}
        />
      </View>
      <CardItem
        style={{
          flexDirection: 'column',
          borderWidth: 0,
          height: 80,
          marginTop: 0,
          marginHorizontal: 0,
        }}>
        <Left
          style={{
            // borderWidth: 1,
            flex: 1,
            width: '100%',
            marginTop: -10,
            marginBottom: -10,
            height: 25,
          }}>
          <Text
            style={{
              // borderWidth: 1,
              flex: 1,
              marginLeft: 0,
              width: '100%',
            }}>
            <Icon
              type="FontAwesome"
              name="star"
              style={{fontSize: 13, color: 'gold'}}
            />
            &nbsp;
            <Text style={{fontSize: 13, color: 'black'}}>
              {data.restaurant.user_rating.aggregate_rating}
            </Text>
          </Text>
        </Left>

        <Left
          style={{
            // borderWidth: 1,
            flex: 1,
            flexDirection: 'column',
            marginBottom: 0,
            width: '100%',
            height: 33,
            alignItems: 'center',
          }}>
          <Text
            style={{
              // borderWidth: 1,
              marginLeft: 0,
              width: '100%',
              fontSize: 13,
              flex: 1,
              alignItems: 'flex-start',
              fontWeight: 'bold',
            }}>
            {data.restaurant.name}
          </Text>
        </Left>
      </CardItem>
    </Card>
  );
};
