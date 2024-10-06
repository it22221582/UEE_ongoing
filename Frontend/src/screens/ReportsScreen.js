// screens/ReportsScreen.js

//This component will show a list of reports fetched from the backend.
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getAllReports } from '../services/reportService';

const ReportsScreen = ({ navigation }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const fetchedReports = await getAllReports();
        setReports(fetchedReports);
      } catch (error) {
        console.error('Error fetching reports:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Reports</Text>
      <FlatList
        data={reports}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReportDetails', { reportId: item._id })}
          >
            <View style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
              <Text style={{ fontSize: 18 }}>{item.title}</Text>
              <Text>{item.generatedBy.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ReportsScreen;
