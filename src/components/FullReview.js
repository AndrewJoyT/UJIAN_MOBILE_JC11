/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Icon} from 'native-base';
import {View, ScrollView, StyleSheet, Platform} from 'react-native';
import {Header, Card, Avatar} from 'react-native-elements';
import {useSelector} from 'react-redux';

export const FullReview = ({navigation}) => {
  const Reviews = useSelector(({Review}) => Review);
  const {userReviews} = Reviews;

  return (
    <View>
      <Header
        placement="left"
        centerComponent={{
          text: 'Full Review',
          style: {color: 'white', fontSize: 18, fontWeight: '700'},
        }}
        leftComponent={{
          icon: 'arrow-back',
          color: 'white',
          onPress: () => navigation.goBack(),
        }}
        containerStyle={style.headerContainer}
      />
      <ScrollView style={{marginBottom: 55}}>
        <Card
          title="User Reviews"
          titleStyle={{fontSize: 24, textAlign: 'center'}}
          wrapperStyle={reviewStyle.wrapper}>
          {userReviews.map(val => {
            return (
              <View style={{marginBottom: 10, width: '100%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginRight: 'auto',
                    marginBottom: 10,
                    paddingHorizontal: 15,
                  }}>
                  <Avatar
                    rounded
                    size="medium"
                    containerStyle={{marginRight: 10}}
                    source={{uri: val.review.user.profile_image}}
                  />
                  <View>
                    <Text style={reviewStyle.textName}>
                      {val.review.user.name}
                    </Text>
                    <View style={{flexDirection: 'row', width: 200}}>
                      <Text style={reviewStyle.textRating}>
                        <Icon
                          type="FontAwesome"
                          name="star"
                          style={{fontSize: 16, color: 'gold'}}
                        />
                        &nbsp;
                        <Text style={{fontSize: 16, color: 'black'}}>
                          {val.review.rating}
                        </Text>
                      </Text>
                      <Text style={reviewStyle.textRatingText}>
                        {`(${val.review.rating_text})`}
                      </Text>
                      <Text style={reviewStyle.textTime}>
                        {val.review.review_time_friendly}
                      </Text>
                    </View>
                  </View>
                </View>
                {val.review.review_text ? (
                  <View
                    style={{
                      paddingHorizontal: 15,
                    }}>
                    <Text style={reviewStyle.textReview}>
                      {val.review.review_text}
                    </Text>
                  </View>
                ) : (
                  <View
                    style={{
                      paddingHorizontal: 15,
                    }}>
                    <Text style={reviewStyle.textReviewEmpty}>
                      Empty Review
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
        </Card>
      </ScrollView>
    </View>
  );
};

const reviewStyle = StyleSheet.create({
  textReview: {
    marginBottom: 18,
    textAlign: 'left',
  },
  textReviewEmpty: {
    marginBottom: 18,
    textAlign: 'left',
    color: 'grey',
  },
  textName: {
    fontSize: 18,
    textAlign: 'left',
  },
  textRating: {
    flex: 1,
    marginLeft: 0,
    width: '100%',
  },
  textRatingText: {
    flex: 2,
    fontSize: 16,
    textAlign: 'left',
  },
  textTime: {
    flex: 3,
    fontSize: 16,
    color: 'grey',
    textAlign: 'left',
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
    // marginBottom: 50,
  },
  imageWrapper: {
    width: '100%',
  },
  image: {
    height: 250,
  },
});

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
