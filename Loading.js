import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Loading() {
	return (
		<View style={styles.conatiner}>
			<Text style={styles.text}>Getting the fucking weather </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 30,
		paddingVertical: 100,
		backgroundColor: '#FDF6AA',
	},
	text: {
		color: '#2C2C2C',
		fontSize: 30,
	},
});
