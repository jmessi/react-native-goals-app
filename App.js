import { useState } from 'react';
import {
	Button,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [openModal, setOpenModal] = useState(false);

	function addGoalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
	}

	function deleteGoalHandler(id) {
		setCourseGoals((currentCourseGoals) =>
			currentCourseGoals.filter((goal) => goal.id !== id)
		);
	}

	function startAddGoalHandler() {
		setOpenModal(!openModal);
	}

	return (
		<View style={styles.appContainer}>
			<Button
				title='Add New Goal!'
				color={'#5e0acc'}
				onPress={startAddGoalHandler}
			/>
			<GoalInput onAddGoal={addGoalHandler} visible={openModal} />
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => (
						<GoalItem item={itemData.item} onDelete={deleteGoalHandler} />
					)}
					keyExtractor={(item, index) => item.id}
				/>
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
	goalsContainer: {
		flex: 5,
	},
});
