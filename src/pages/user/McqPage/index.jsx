import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { RiFlag2Line } from "react-icons/ri";
import { GrPrevious, GrNext } from "react-icons/gr";
import QuestionBar from "../../../components/Questionbar/QuestionBar";
import "./McqPage.scss";

const McqPage = ({ navigateToLoginPage }) => {
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [data, setData] = useState(null);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [categories, setCategories] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});
  const [postData, setPostData] = useState([
    { category: "", userResponse: [] },
  ]);

  const [questions, setQuestions] = useState({
    verbal: [],
    logical: [],
    tech: [],
    aptitude: [],
  });
  const [totalAssignedTime] = useState(40 * 60);
  const navigate = useNavigate();

  const totalCategoryCount = Object.keys(categoryCounts).length;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.20:8081/api/v1/question/mcqforfinal/mcq"
        );
        const responseData = response.data;
        setData(responseData);
        console.log(responseData);
        splitCategory(responseData.object.parts);
        const counts = {};
        responseData.object.parts.forEach((part) => {
          counts[part.category] = part.questionsMcqS.length;
        });
        setCategoryCounts(counts);
        setCategories(Object.keys(counts));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const splitCategory = (data) => {
    const newQuestions = {
      verbal: [],
      logical: [],
      tech: [],
      aptitude: [],
    };

    data.forEach((dataItem) => {
      switch (dataItem.category) {
        case "VERBAL_MCQ":
          newQuestions.verbal.push(...dataItem.questionsMcqS);
          break;
        case "LOGICAL_MCQ":
          newQuestions.logical.push(...dataItem.questionsMcqS);
          break;
        case "TECHNICAL_MCQ":
          newQuestions.tech.push(...dataItem.questionsMcqS);
          break;
        case "APTITUDE_MCQ":
          newQuestions.aptitude.push(...dataItem.questionsMcqS);
          break;
        default:
          console.log(`Unknown category: ${dataItem.category}`);
      }
    });

    setQuestions(newQuestions);
  };

  const handleFlagClick = (category, questionIndex) => {
    const updatedFlaggedQuestions = { ...flaggedQuestions };
    updatedFlaggedQuestions[`${category}_${questionIndex}`] =
      !flaggedQuestions[`${category}_${questionIndex}`];
    setFlaggedQuestions(updatedFlaggedQuestions);
  };

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    } else if (currentSegmentIndex > 0) {
      setCurrentSegmentIndex((prevIndex) => prevIndex - 1);
      setCurrentQuestionIndex(
        data.object.parts[currentSegmentIndex - 1].questionsMcqS.length - 1
      );
    }
  };

  const handleOptionChange = (segmentIndex, questionIndex, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [`${segmentIndex}_${questionIndex}`]: option,
    }));
  };
  useEffect(() => {
    console.log("userResponses-->", postData);
  }, [postData]);
  console.log("indexconditioncheck ======", currentQuestionIndex);
  const handleNextClick = () => {
    const currentSegment = data.object.parts[currentSegmentIndex];
    const currentQuestion = currentSegment.questionsMcqS[currentQuestionIndex];

    const questionId = currentQuestion.questionId;
    const option =
      selectedOptions[`${currentSegmentIndex}_${currentQuestionIndex}`];
    const difficulty = currentQuestion.difficulty;
    const category = currentSegment.category.replace("_MCQ", "").toUpperCase();
    const isCorrect = "false";

    let resdata = [...postData];
    resdata[0].category = category;
    resdata[0].userResponse = [
      ...resdata[0].userResponse,
      {
        questionId,
        chosenAnswer: [option],
        difficulty,
        isCorrect,
      },
    ];

    // let resdata = [...postData];
    // let flag = false
    // for (let i = 0; i < resdata.length; i++) {
    //   if (i.category === category){
    //     flag = true;
    //     i.userResponse = [
    //       ...resdata[0].userResponse,
    //       {
    //         questionId,
    //         chosenAnswer: [option],
    //         difficulty,
    //         isCorrect,
    //       },
    //     ];
    //   }
    //   break;
    // }
    // if (!flag){
    //   resdata.category = category
    //   resdata.userResponse = [{
    //     questionId,
    //     chosenAnswer: [option],
    //     difficulty,
    //     isCorrect,
    //   }]
    //   let postData = [...postData, resdata]
    // }
    console.log("userresponsedata=====", resdata[0]);
    setPostData(resdata);
    // setPostData((prevResponses) => [
    //   ...prevResponses,
    //   {
    //     category,
    //     userResponse: [
    //       { questionId, chosenAnswer: [option], difficulty, isCorrect },
    //     ],
    //   },
    // ]);
    const totalQuestions = currentSegment.questionsMcqS.length;
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else if (currentSegmentIndex < data.object.parts.length - 1) {
      setCurrentSegmentIndex((prevIndex) => prevIndex + 1);
      setCurrentQuestionIndex(0);
    } else if (
      currentSegmentIndex === 3 &&
      currentQuestionIndex === totalQuestions - 1
    ) {
      try {
        postMcqData();
        navigate("/user/userhome");
      } catch (error) {
        console.error("Error posting MCQ data:", error);
      }
    }
  };

  console.log("partsoutputprint", postData);

  const postMcqData = async () => {
    const partWiseResponseDtoList = [];

    postData.forEach((item) => {
      partWiseResponseDtoList.push({
        category: item.category,
        userResponse: item.userResponse,
      });
    });

    const payload = {
      partWiseResponseDtoList,
    };

    try {
      const response = await axios.post(
        "http://192.168.1.20:8081/api/v1/result/mcq/27257510-d82f-4b73-b08b-1d1e7d8516b5/mcqforfinal",
        payload,
        {
          params: { status: "save" },
        }
      );
      console.log("Response:", response);
      setPostData([{ category: "", userResponse: [] }]);
      handleNextClick();
    } catch (err) {
      console.error("Error posting data:", err);
    }
  };

  if (!data || !data.object || !data.object.parts || !categories.length) {
    return <div>Loading...</div>;
  }

  const currentSegment = data.object.parts[currentSegmentIndex];
  const currentQuestion =
    currentSegment?.questionsMcqS[currentQuestionIndex] || {};
  console.log("qnindex", currentQuestion);
  return (
    <div className="MCQ">
      <QuestionBar
        categories={categories}
        questionCounts={Object.values(categoryCounts)}
        flaggedQuestions={flaggedQuestions}
        handleFlagClick={handleFlagClick}
      />
      <div className="QuestionLayout">
        <div className="Question">
          <h1 className="verbal-header">
            {currentSegment?.category?.replace("_MCQ", "")?.toUpperCase()}
          </h1>
          <p className="Questionnumber">
            Q NO: {currentQuestionIndex + 1}
            <RiFlag2Line
              style={{
                color: flaggedQuestions[
                  `${currentSegment.category}_${currentQuestionIndex}`
                ]
                  ? "red"
                  : "inherit",
              }}
              onClick={() =>
                handleFlagClick(currentSegment.category, currentQuestionIndex)
              }
            />
          </p>
          <p className="McqQuestion">{currentQuestion.question}</p>
          {currentQuestion.options &&
            currentQuestion.options.map((option, optionIndex) => {
              const questionId = `${currentSegmentIndex}_${currentQuestionIndex}`;
              // console.log(selectedOptions,"=======")
              return (
                <div className="Options" key={optionIndex}>
                  <label htmlFor={`option_${optionIndex}`}>
                    <input
                      type="radio"
                      id={`option_${optionIndex}`}
                      name={`option_${questionId}`}
                      checked={selectedOptions[questionId] === option}
                      onChange={() =>
                        handleOptionChange(
                          currentSegmentIndex,
                          currentQuestionIndex,
                          option
                        )
                      }
                    />
                    {option}
                  </label>
                </div>
              );
            })}
        </div>
        <div className="navigation-buttons">
          {currentQuestionIndex > 0 && (
            <button className="previousbutton" onClick={handlePreviousClick}>
              <GrPrevious /> Previous
            </button>
          )}
          <div className="submit-next-container">
            <button
              className="nextbutton"
              onClick={() => {
                if (
                  currentQuestionIndex ===
                  currentSegment.questionsMcqS.length - 1
                ) {
                  handleNextClick(currentSegment.category);
                  // console.log("indexcheck=====",currentQuestionIndex, currentSegmentIndex)
                  setCurrentQuestionIndex(0);
                  postMcqData();
                } else {
                  handleNextClick(currentSegment.category);
                }
              }}
              disabled={
                currentSegmentIndex === data.object.parts.length &&
                currentQuestionIndex === currentSegment.questionsMcqS.length - 1
              }
            >
              {currentQuestionIndex === currentSegment.questionsMcqS.length - 1
                ? "Submit"
                : "Next"}
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default McqPage;
