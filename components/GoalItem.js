import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem({ item, onDelete }) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				onPress={onDelete.bind(this, item.id)}
				style={({ pressed }) => pressed && styles.pressedItem}>
				<Text style={styles.goalItemText}>{item.text}</Text>
			</Pressable>
		</View>
	);
}

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 5,
		borderRadius: 8,
		backgroundColor: '#8147FF',
	},
	pressedItem: { opacity: 0.5 },
	goalItemText: {
		color: '#fff',
		padding: 8,
	},
});
