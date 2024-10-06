import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import BarChartComponent from '../components/Chart/BarChartComponent';
import LineChartComponent from '../components/Chart/LineChartComponent';
import PieChartComponent from '../components/Chart/PieChartComponent';

const ReportDisplayScreen = ({ route }) => {
  const { reportType, timeFrame } = route.params;  // Receiving timeFrame and reportType from previous page
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch data based on reportType and timeFrame
    const fetchData = async () => {
      let data;
      // Mock fetching data based on report type and time frame
      switch (reportType) {
        case 'foodDistributionSummary':
          data = await getFoodDistributionData(timeFrame);
          break;
        case 'volunteerContributions':
          data = await getVolunteerContributionsData(timeFrame);
          break;
        case 'wasteReduction':
          data = await getWasteReductionData(timeFrame);
          break;
        case 'orphanageFulfillment':
          data = await getOrphanageFulfillmentData(timeFrame);
          break;
        default:
          data = null;
      }
      setChartData(data);
    };

    fetchData();
  }, [reportType, timeFrame]);

  const getFoodDistributionData = async (timeFrame) => {
    // Here, you could fetch or generate data based on the selected time frame
    // For example, if timeFrame is 'Weekly', 'Monthly', etc.
    if (timeFrame === 'Weekly') {
      return {
        labels: ['Week 1', 'Week 2', 'Week 3'],
        datasets: [{ data: [40, 55, 70] }],
      };
    } else if (timeFrame === 'Monthly') {
      return {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [120, 150, 200] }],
      };
    }
  };

  const getVolunteerContributionsData = async (timeFrame) => {
    if (timeFrame === 'Weekly') {
      return {
        labels: ['Week 1', 'Week 2', 'Week 3'],
        datasets: [{ data: [25, 35, 45] }],
      };
    } else if (timeFrame === 'Monthly') {
      return {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [80, 90, 110] }],
      };
    }
  };

  const getWasteReductionData = async (timeFrame) => {
    if (timeFrame === 'Weekly') {
      return {
        labels: ['Week 1', 'Week 2', 'Week 3'],
        datasets: [{ data: [15, 30, 40] }],
      };
    } else if (timeFrame === 'Monthly') {
      return {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [45, 60, 80] }],
      };
    }
  };

  const getOrphanageFulfillmentData = async (timeFrame) => {
    if (timeFrame === 'Weekly') {
      return {
        labels: ['Week 1', 'Week 2', 'Week 3'],
        datasets: [{ data: [50, 60, 75] }],
      };
    } else if (timeFrame === 'Monthly') {
      return {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [140, 160, 180] }],
      };
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)} Report - {reportType.replace(/([A-Z])/g, ' $1').trim()}
      </Text>
      
      <View style={styles.chartContainer}>
        {chartData ? (
          // Conditionally render different charts based on report type
          reportType === 'foodDistributionSummary' ? (
            <BarChartComponent data={chartData} />
          ) : reportType === 'volunteerContributions' ? (
            <LineChartComponent data={chartData} />
          ) : reportType === 'wasteReduction' ? (
            <PieChartComponent data={chartData} />
          ) : (
            <Text>No chart available for this report type</Text>
          )
        ) : (
          <Text>Loading chart data...</Text>
        )}
      </View>

      <View style={styles.buttonGroup}>
        <Text>Download as:</Text>
        <Button title="PDF" onPress={() => downloadReport('pdf')} />
        <Button title="Excel" onPress={() => downloadReport('excel')} />
      </View>
    </View>
  );
};

export default ReportDisplayScreen;
