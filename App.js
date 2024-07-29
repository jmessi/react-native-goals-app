import { useState } from 'react';
import {
	Button,
	FlatList,
	ScrollView,
	StatusBar,
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

	function toggleAddGoalModal() {
		setOpenModal(!openModal);
	}

	return (
		<>
			<StatusBar style='light' />
			<View style={styles.appContainer}>
				<Button
					title='Add New Goal!'
					color={'#a065ec'}
					onPress={toggleAddGoalModal}
				/>
				<GoalInput
					onAddGoal={addGoalHandler}
					visible={openModal}
					onCancel={toggleAddGoalModal}
				/>
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
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
		// backgroundColor: '#1e085a',
	},
	goalsContainer: {
		flex: 5,
	},
});
