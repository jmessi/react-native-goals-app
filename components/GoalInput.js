import { useState } from 'react';
import {
	Button,
	Image,
	Modal,
	StyleSheet,
	TextInput,
	View,
} from 'react-native';

function GoalInput({ onAddGoal, visible, onCancel }) {
	const [enteredGoalText, setEnteredGoalText] = useState('');

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		if (enteredGoalText) {
			onAddGoal(enteredGoalText);
			setEnteredGoalText('');
			onCancel();
		}
	}

	return (
		<Modal visible={visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/goal.png')}
				/>
				<TextInput
					placeholder='Your course goal!'
					style={styles.textInput}
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title='Add goal'
							onPress={addGoalHandler}
							color={'#b180f0'}
						/>
					</View>
					<View style={styles.button}>
						<Button title='Cancel' onPress={onCancel} color={'#f31282'} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#311b6b',
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		borderRadius: 6,
		color: '#120438',
		width: '100%',
		padding: 16,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: 'row',
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
});
