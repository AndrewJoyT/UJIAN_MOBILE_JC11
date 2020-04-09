import React from 'react';
import {View, Text, ScrollView, StyleSheet, Platform} from 'react-native';
import {Header, Card} from 'react-native-elements';
import {useSelector} from 'react-redux';

export const RestaurantDetails = ({navigation}) => {
  const PostDetails = useSelector(({Post}) => Post.PostDetails);
  const {
    name,
    featured_image,
    user_rating,
    location,
    cuisines,
    timings,
    average_cost_for_two,
    currency,
  } = PostDetails;

  return (
    <View>
      <Header
        placement="left"
        centerComponent={{
          text: name,
          style: {color: 'white', fontSize: 18, fontWeight: '700'},
        }}
        leftComponent={{
          icon: 'arrow-back',
          color: 'white',
          onPress: () => navigation.goBack(),
        }}
        containerStyle={style.headerContainer}
      />
      <ScrollView>
        <Card
          title={name + `\n(Rating : ${user_rating.aggregate_rating})`}
          image={{uri: featured_image}}
          wrapperStyle={style.wrapper}
          imageWrapperStyle={style.imageWrapper}
          imageStyle={style.image}>
          <Text style={style.textTitle}>Address</Text>
          <Text style={style.textContent}>{location.address}</Text>
          <Text style={style.textTitle}>Cuisines</Text>
          <Text style={style.textContent}>{cuisines}</Text>
          <Text style={style.textTitle}>Open Schedule</Text>
          <Text style={style.textContent}>{timings}</Text>
          <Text style={style.textTitle}>Avg Cost for 2 Persons</Text>
          <Text style={style.textContent}>
            {currency + ' ' + average_cost_for_two}
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: 'left',
  },
  textTitle: {
    // marginBottom: 5,
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  textContent: {
    marginBottom: 18,
    textAlign: 'center',
  },
  headerContainer: {
    backgroundColor: 'tomato',
    justifyContent: 'space-around',
    elevation: 3,
    marginTop: Platform.OS === 'ios' ? 0 : -25,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '100%',
  },
  image: {
    height: 250,
  },
});
