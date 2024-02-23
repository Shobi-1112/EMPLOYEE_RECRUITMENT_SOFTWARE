import React, { useEffect, useState } from 'react';
import { hrAssignConstants } from '../../../constants/hrAssign';
import { hrComponents } from '../../../components/hr-components';
import { useDispatch, useSelector } from 'react-redux';

//styles
import styles from './index.module.scss';
import { techHRDetails } from '../../../store/hr-assign-slice';

const HrAssign = () => {
  const [page, setPage] = useState(
    hrAssignConstants.hrAssign ? hrAssignConstants.hrAssign[0] : ''
  );

  const [contest, setContest] = useState();
  const dispatch = useDispatch();
  const handleToggle = (page) => {
    setPage(page);
  };

  const techHR = useSelector((state) => state.hrAssignDetails.techHR);

  const personalHR = useSelector((state) => state.hrAssignDetails.personalHR);

  const rescheduleRequest = useSelector(
    (state) => state.hrAssignDetails.rescheduleRequest
  );

  useEffect(() => {
    dispatch(techHRDetails(page));
    page === 'Technical HR'
      ? setContest(techHR)
      : page === 'Personal HR'
      ? setContest(personalHR)
      : setContest(rescheduleRequest, () => console.log(contest));
  }, [page, dispatch]);

  return (
    <div className={styles.hrassign}>
      <hrComponents.Toggle
        switchStates={hrAssignConstants.hrAssign}
        handleToggle={handleToggle}
        page={page}
      />
      {page === 'Personal HR' ? (
        <hrComponents.Contest contests={hrAssignConstants.personalHR} />
      ) : page === 'Technical HR' ? (
        <hrComponents.Contest contests={hrAssignConstants.techHR} />
      ) : (
        <hrComponents.Reschedule
          requests={hrAssignConstants.rescheduleRequest}
        />
      )}
    </div>
  );
};

export default HrAssign;
