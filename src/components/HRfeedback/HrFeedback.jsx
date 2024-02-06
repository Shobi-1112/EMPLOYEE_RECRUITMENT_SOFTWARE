import React from "react";
import "/home/divum/hiring_platform/hiring-platform-frontend/src/components/HrFeedback.scss";
import Person2Icon from '@mui/icons-material/Person2';
function Hrfeedback() {
    return (
      <div className="hr-container"> 
      FEEDBACK
      <div className="name-container">
                NAME:
                <div>
                    <input type="text"  className="input" />
                </div>
            </div>
            <div className="person-icon"><Person2Icon/></div>
            <div className="date-container">
                SCHEDULE DATE AND TIME:
                <div>
                    <input type="text"  className="input" />
                </div>
            </div>
            <div className="feedback-container">
        FEEDBACK:
        <div>
          <label>
            <input type="radio" name="feedback" value="eligible" />
            Eligible
          </label>
          <label>
            <input type="radio" name="feedback" value="considered" />
            Can Be Considered
          </label>
          <label>
            <input type="radio" name="feedback" value="notSatisfied" />
            Rejected
          </label>
        </div>
        </div>
        <div className="comment-container">
                DESCRIPTION:
                <div>
                    <input type="text"  className="input1" />
                </div>
            </div>
            <button type="button" className="submit">
            SUBMIT
          </button>
      </div>
    )
  }
  
  export default Hrfeedback;