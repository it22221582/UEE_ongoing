// src/screens/ReportSelectionScreen.js
//This screen will allow users to select the type and 
//time frame of the report they want to generate.
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReportSelectionScreen = () => {
  const navigation = useNavigation();
  const [reportType, setReportType] = useState('');
  const [timeFrame, setTimeFrame] = useState('');

  const generateReport = () => {
    if (reportType && timeFrame) {
      navigation.navigate('ReportDisplay', { reportType, timeFrame });
    } else {
      alert('Please select both report type and time frame.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose the type of the report you want to produce?</Text>
      <Picker selectedValue={reportType} onValueChange={(itemValue) => setReportType(itemValue)}>
        <Picker.Item label="Select Report Type" value="" />
        <Picker.Item label="Food Distribution Summary" value="foodDistributionSummary" />
        <Picker.Item label="Volunteer Contributions Report" value="volunteerContributions" />
        <Picker.Item label="Waste Reduction Report" value="wasteReduction" />
        <Picker.Item label="Orphanage Requests vs. Fulfillment" value="orphanageFulfillment" />
        <Picker.Item label="Event Impact Report" value="eventImpact" />
      </Picker>

      <Text style={styles.heading}>Would you like the report to cover a weekly, monthly, or yearly period?</Text>
      <Picker selectedValue={timeFrame} onValueChange={(itemValue) => setTimeFrame(itemValue)}>
        <Picker.Item label="Select Time Frame" value="" />
        <Picker.Item label="Weekly" value="weekly" />
        <Picker.Item label="Monthly" value="monthly" />
        <Picker.Item label="Yearly" value="yearly" />
      </Picker>

      <Button title="Generate Report" onPress={generateReport} />
      <Button title="Go to My Reports Section" onPress={() => navigation.navigate('ReportHistory')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default ReportSelectionScreen;
