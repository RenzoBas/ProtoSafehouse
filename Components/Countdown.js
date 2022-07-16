import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';


export default function CountDownTimer(props) {
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    //We are showing the coundown timer for a given expiry date-time
    //If you are making a quize type app then you need to make a simple timer
    //which can be done by using the simple like given below
    //that.setState({ totalDuration: 30 }); //which is 30 sec
    var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
    //Getting the current date-time with required formate and UTC
    var expirydate = props.intialValue; //You can set your own date-time
    //Let suppose we have to show the countdown for above date-time
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    //difference of the expiry date-time given and current date-time
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    //converting in seconds
    setTotalDuration(d);
    //Settign up the duration of countdown in seconds to re-render
  }, []);

  //If it's not showing the time, delete the ending parentheses and type something random like: wrwr and then delete it and replace it with a parentheses
  console.log(setTotalDuration);

  return (

    <CountDown style={styles.countdownStyle}
      until={parseInt(totalDuration)}
      //duration of countdown in seconds
      timetoShow={('H', 'M', 'S')}
      //formate to show
      onFinish={() => alert('finished')}
      //on Finish call
      //The size below controls the ssize of the countdown timer
      size={15}
      timeLabelStyle={{ color: 'red', fontWeight: 'bold', marginBottom: 20 }}
      digitStyle={{ backgroundColor: 'rgba(52, 52, 52, 0)' }}
      digitTxtStyle={{ color: 'cyan', fontWeight: 'bold' }}
      showSeparator
      separatorStyle={{ color: 'cyan', marginBottom: 15 }}
    />

  )
}

//This below contains the border that contains the timer
const styles = StyleSheet.create({
  countdownStyle: {
    marginTop: 120,
    marginRight: 15,
    justifyContent: 'flex-start',
  },
});