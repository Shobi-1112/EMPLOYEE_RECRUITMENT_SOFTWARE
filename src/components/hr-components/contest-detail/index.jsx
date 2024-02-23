import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button';
import ContentBox from '../text-match';

//stylesheet
import styles from './index.module.scss';

const ContestDisplay = ({ contests }) => {
  const navigate = useNavigate();
  const handleClick = (contest) => {
    console.log('click ', contest);
    contest.status === 'Assigned'
      ? navigate('/admin/hrAssign/contestdetails', { state: { data: contest } })
      : navigate('/lo');
  };
  return (
    <div className={styles.contest_display}>
      {contests.map((contest, index) => {
        return (
          <div key={index} className={styles.contest_display_details}>
            <div
              className={`${styles.contest_display_details_box} flex-justify-between`}
            >
              <ContentBox title={'Contest Name'} value={contest.contestName} />
              <ContentBox title={'Round No'} value={contest.roundNumber} />
              <ContentBox title={'Contest Date'} value={contest.contestDate} />
              <ContentBox title={'Status'} value={contest.status} />
            </div>
            <div style={{ textAlign: 'center', width: '10%' }}>
              <Button
                text={
                  contest.status === 'Assigned' ? 'View Schedule' : 'Assign HR'
                }
                onClickFunction={() => handleClick(contest)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContestDisplay;
