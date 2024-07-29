import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem({ item, onDelete }) {
	return (
		<Pressable onPress={onDelete.bind(this, item.id)}>
			<View style={styles.goalItem}>
				<Text style={styles.goalItemText}>{item.text}</Text>
			</View>
		</Pressable>
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
