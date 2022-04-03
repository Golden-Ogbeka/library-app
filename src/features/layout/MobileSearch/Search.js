import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../ModalComponent/Modal';
import { closeSearchModal } from './SearchSlice';
import styles from './styles.module.css';
import ArrowBackIcon from '../../../assets/icons/arrow-back.svg';
import SearchIcon from '../../../assets/icons/search.svg';

function Search({ onClose = () => null, ...props }) {
	const dispatch = useDispatch();
	const searchModalState = useSelector((state) => state.search.open);
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
					/>
					<div className={styles.searchIconContainer}>
						<img src={SearchIcon} alt='' />
					</div>
				</div>
			</div>
		</Modal>
	);
}

export default Search;
