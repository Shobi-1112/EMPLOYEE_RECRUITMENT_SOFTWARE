import React from 'react';
import ContentBox from '../text-match';
import Button from '../button';
import { hrAssignConstants } from '../../../constants/hrAssign';
import styles from './index.module.scss';

const Reschedule = ({ requests }) => {
  return (
    <div className={styles.reschedule}>
      <div className={styles.button_style}>
        <Button text={'View Request Log'} className={styles.button_style} />
      </div>
      {requests.map((request) => {
        return (
          <div
            key={request.id}
            className={`${styles.reschedule_requests} flex-column`}
          >
            <div
              className={`${styles.reschedule_requests_heading} flex-justify-between`}
            >
              <ContentBox
                title={'Round No:'}
                value={request.round}
                direction={'row'}
              />
              <ContentBox
                title={'Contest Name:'}
                value={request.contestName}
                direction={'row'}
              />
              <ContentBox
                title={'HR Name:'}
                value={request.employeeName}
                direction={'row'}
              />
              <ContentBox
                title={'Request Type:'}
                value={request.requestType}
                direction={'row'}
              />
            </div>
            <div className={styles.reschedule_requests_hrreason}>
              <ContentBox
                title={'HR Reason'}
                value={request.reason}
                align={'start'}
              />
            </div>
            <div className={styles.reschedule_requests_details}>
              <div>
                <ContentBox
                  title={'Contestant Name:'}
                  value={request.contestantName}
                  direction={'row'}
                />
              </div>
              <div className={styles.reschedule_requests_details_buttons}>
                {hrAssignConstants.buttonConstant.map((button) => {
                  return (
                    <Button
                      key={button.text}
                      text={button.text}
                      icon={button.icon}
                      type={button.text === 'Accept' ? 'safe' : 'danger'}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reschedule;
