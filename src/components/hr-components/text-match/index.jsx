import styles from './index.module.scss';

const ContentBox = ({ title, value, direction, align }) => {
  let statusClass = 'values';
  if (title === 'Status') {
    statusClass = value === 'Assigned' ? 'assign' : 'pending';
  }
  let boxDirection = direction ? direction : 'content_box';
  let alignItem = align ? align : '';
  return (
    <div className={`${styles[boxDirection]}  ${styles[alignItem]}`}>
      <p>{title}</p>
      <p className={`${styles[statusClass]}`}>{value}</p>
    </div>
  );
};

export default ContentBox;
