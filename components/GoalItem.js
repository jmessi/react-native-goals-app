import { StyleSheet, Text, View } from 'react-native';

function GoalItem({ text }) {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalItemText}>{text}</Text>
		</View>
	);
}

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 5,
		padding: 8,
		borderRadius: 8,
		backgroundColor: '#ae8afd',
	},
	goalItemText: {
		color: '#fff',
	},
});
