import { GiCrossMark } from 'react-icons/gi';
import { TiTick } from 'react-icons/ti';

const hrAssign = ['Technical HR', 'Personal HR', 'Reschedule Request'];
const techHR = [
  {
    contestName: 'Test',
    roundNumber: 2,
    status: 'Assigned',
    roundType: 'Technical',
    roundId: '3811bbb3-57b0-4975-9db1-09878bb1c3e1',
    contestDate: '16 Feb, 04:30 pm',
  },
];
const personalHR = [
  {
    contestName: 'Test',
    roundNumber: 2,
    status: 'Assigned',
    roundType: 'Technical',
    roundId: '3811bbb3-57b0-4975-9db1-09878bb1c3e1',
    contestDate: '16 Feb, 04:30 pm',
  },
];
const rescheduleRequest = [
  {
    id: 1,
    round: '2 - Technical',
    contestName: 'Test',
    employeeName: 'Amrit Candida',
    requestType: 'CANCEL',
    reason: 'Just kidding',
    assignedTime: '14/02/24 - 16:30',
    preferredTime: '16/02/24 - 10:48',
    status: 'APPLIED',
  },
  {
    id: 2,
    round: '2 - Technical',
    contestName: 'Test',
    employeeName: 'Amrit Candida',
    requestType: 'RESCHEDULE',
    reason: 'Just kidding',
    assignedTime: '14/02/24 - 17:00',
    preferredTime: '16/02/24 - 10:48',
    status: 'APPLIED',
  },
  {
    id: 3,
    round: '2 - Technical',
    contestName: 'Test',
    employeeName: 'null null',
    requestType: 'CANCEL',
    reason: 'Just kidding',
    assignedTime: '14/02/24 - 16:30',
    preferredTime: '16/02/24 - 10:48',
    status: 'APPLIED',
  },
  {
    id: 4,
    round: '2 - Technical',
    contestName: 'Test',
    employeeName: 'null null',
    requestType: 'RESCHEDULE',
    reason: 'Just kidding',
    assignedTime: '14/02/24 - 17:00',
    preferredTime: '16/02/24 - 10:48',
    status: 'APPLIED',
  },
  {
    id: 5,
    round: '2 - Technical',
    contestName: 'Test',
    employeeName: 'null null',
    requestType: 'CANCEL',
    reason: 'Just kidding',
    assignedTime: '14/02/24 - 17:30',
    preferredTime: '16/02/24 - 10:48',
    status: 'APPLIED',
  },
  {
    id: 6,
    round: '2 - Technical',
    contestName: 'Test',
    employeeName: 'null null',
    requestType: 'RESCHEDULE',
    reason: 'Just kidding',
    assignedTime: '14/02/24 - 16:30',
    preferredTime: '16/02/24 - 10:48',
    status: 'APPLIED',
  },
];

const buttonConstant = [
  { icon: <GiCrossMark fontSize={13} />, text: 'Reject' },
  { icon: <TiTick fontSize={20} />, text: 'Accept' },
];

export const hrAssignConstants = {
  hrAssign,
  techHR,
  personalHR,
  rescheduleRequest,
  buttonConstant,
};
