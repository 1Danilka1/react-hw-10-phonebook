import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const TodoItem = ({ id, name, number }) => {
	const dispatch = useDispatch();

	const handleDeleteClick = () => {
		dispatch(deleteContact({ id }));
	};

	return (
		<li>
			<div>
				<span>
                    {name} :  
					{number}
				</span>
				<button onClick={handleDeleteClick}>
					Delete
				</button>
			</div>
		</li>
	);
};

export default TodoItem;