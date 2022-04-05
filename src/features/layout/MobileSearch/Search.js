import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../ModalComponent/Modal';
import { closeSearchModal } from './SearchModalSlice';
import styles from './styles.module.css';
import ArrowBackIcon from '../../../assets/icons/arrow-back.svg';
import SearchIcon from '../../../assets/icons/search.svg';
import { useNavigate } from 'react-router-dom';
import { changeSearchVariable } from '../../pages/Search/SearchVariableSlice';

function Search({ onClose = () => null, ...props }) {
	const dispatch = useDispatch();
	const searchModalState = useSelector((state) => state.searchModal.open);

	let navigate = useNavigate();
	const searchVariable = useSelector((state) => state.searchVariable.value);
	return (
		<Modal open={searchModalState} onClose={() => dispatch(closeSearchModal())}>
			<div className={styles.navbar} onClick={(e) => e.stopPropagation()}>
				<img
					src={ArrowBackIcon}
					alt=''
					style={{
						cursor: 'pointer',
					}}
					onClick={() => dispatch(closeSearchModal())}
				/>
				<div className={styles.searchContainer}>
					<input
						type='text'
						className={styles.searchInput}
						placeholder='Search books, genres, authors, etc.'
						value={searchVariable}
						onChange={(e) => dispatch(changeSearchVariable(e.target.value))}
					/>
					<div className={styles.searchIconContainer}>
						<img src={SearchIcon} alt='' onClick={() => navigate('/search')} />
					</div>
				</div>
			</div>
		</Modal>
	);
}

export default Search;
