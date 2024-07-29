import { useState } from 'react';
import {
	Button,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			enteredGoalText,
		]);
		setEnteredGoalText('');
	}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Your course goal!'
					style={styles.textInput}
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<Button title='Add goal' onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<ScrollView>
					{courseGoals.length ? (
						courseGoals.map((goal, id) => (
							<View key={id} style={styles.goalItem}>
								<Text style={styles.goalItemText}>
									{++id} - {goal}
								</Text>
							</View>
						))
					) : (
						<Text>Empty list</Text>
					)}
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#CCCCCC',
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: {
		flex: 5,
	},
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
