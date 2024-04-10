import React, { useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import Button from "../../../components/Button";
// import { LanguageDataToApi } from "../../../Actions/Api/Api_config";
import "./CodingTest.scss";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import QuestionBar from "../../../components/Questionbar/QuestionBar";
import { GrPrevious, GrNext } from "react-icons/gr";
import axios from "axios";
import { useNavigate } from "react-router";

const CodingPage = () => {
  const navigate = useNavigate();
  const[remainingTime,setRemainingTime]=useState()
  const [supportedLanguages, setSupportedLanguages] = useState([]);
  const [testcaseDisplay, setTestcaseDisplay]=useState(false);
  const [submitTestCase,setsubmitTestCase]=useState(false);
  const [selectLanguage, setSelectLanguage] = useState();
  const [Version,setVersion]=useState();
  const [theme, setTheme] = useState("vs-light");
  const [codeValue, setCodeValue] = useState();
  const [coding, setCoding] = useState({ name: "", code: "" });
  const [screen, setScreen] = useState(false);
  const [question, setQuestion] = useState(null);
  const [functionCodes, setFunctionCodes] = useState({});
  const [casesList, setCasesList] = useState([]);
  const [roundType, setRoundType] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const [message, setMessage] = useState("");
  const [objects, setObjects] = useState([]);
  const [submitdata, setSubmitdata] = useState([]);
  const [draftCode, setDraftCode] = useState("");
  const [currentAction, setCurrentAction] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hiddencodingcount, setHiddencodingcount] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionId, setQuestionId] = useState(null);

  useEffect(() => {
    const fetchQuestionData = async (index) => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v2/codingQuestion/codingforfinal"
        );
        const data = await response.json();
        setQuestion(data);
        console.log("data", data);
        setRoundType(data.object.roundType);

        let count = 0;
        if (data?.object && Array.isArray(data.object.questionDtos)) {
          data.object.questionDtos.forEach((item) => {
            if (item && item.casesList && Array.isArray(item.casesList)) {
              count += item.casesList.length;
            }
          });
        }

        setQuestionCount(count);

        if (data?.object.questionDtos[0]?.casesList) {
          setCasesList(data?.object.questionDtos[0]?.casesList);
        } else {
          setCasesList([]);
        }

        // const myquestionId = data.object.questionDtos[index].questionId;
        // console.log("hi", myquestionId);
        // sessionStorage.setItem("questionId", myquestionId);

        setQuestionCount(data.object.questionDtos.length);
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };

    fetchQuestionData();
  }, []);

  useEffect(() => {
    const fetchSupportedLanguages = async () => {
      try {
        const data = await LanguageDataToApi();
        setSupportedLanguages(data.object);
        setSelectLanguage(data.object[0].language);
        setVersion(data.object[0].version);
        console.log("hii",data);
      } catch (error) {
        console.error("Error fetching supported languages:", error);
      }
    };

    fetchSupportedLanguages();
  }, []);

  const postCompileData = async () => {
    // const questionId = data.object.questionDtos[index].questionId;
    try {
      const data = {
        questionId: questionId,
        code: coding.code,
        language: selectLanguage,
        version: Version,
        input: " ",
      };
      console.log("shobiiii-->", data);
      const response = await axios.post(
        "http://localhost:8080/api/v2/compile/27257510-d82f-4b73-b08b-1d1e7d8516b5/codingforfinal/1dd02956-423d-4c6f-a197-7e52316e09e2",
        data
      );
      console.log("k", response);
      setTestcaseDisplay(true);
      setMessage(response.data.message);
      console.log(response.data.object);
      setObjects(response.data.object);
      setCurrentAction("compile");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      const isVisible = document.visibilityState === "visible";
      console.log("Page visibility:", isVisible ? "visible" : "hidden");

      if (!isVisible) {
        setHiddencodingcount((prevCount) => prevCount + 1);
      } else {
        setHiddencodingcount(0);
      }

      if (!isVisible) {
        window.location.href = "/";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [hiddencodingcount]);

  const getDraft = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v2/draftCode/27257510-d82f-4b73-b08b-1d1e7d8516b5/codingforfinal/1"
      );
      console.log("Draft Code:", response.data);
      setDraftCode(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async () => {
    try {
      await postSubmitData();
      await getDraft();
    } catch (err) {
      console.error(err);
    }
  };
  const handleCompile = async () => {
    try {
      if (question && question.object && question.object.questionDtos) {
        const questionId =
          question.object.questionDtos[currentQuestionIndex].questionId;
        await postCompileData(questionId);
      } else {
        console.error("Error: Question data is not available.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  console.log(Version);

  

  const postSubmitData = async () => {
    try {
      const data = {
        questionId: questionId,
        code: coding.code,
        language: selectLanguage,
        version: Version,
        input: " ",
      };
      console.log("shobiiii-->", data);
      const response = await axios.post(
        "http://localhost:8080/api/v2/submit/27257510-d82f-4b73-b08b-1d1e7d8516b5/codingforfinal/1dd02956-423d-4c6f-a197-7e52316e09e2",
        data
      );
      console.log("k", response);
      setMessage(response.data.message);
      console.log(response.data.object);
      setsubmitTestCase(true);
      setSubmitdata((prevSubmitData) => {
        const newData = [...prevSubmitData];
        newData[currentQuestionIndex] = response.data.object;
        return newData;
      });
      setCurrentAction("submit");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchFunctionCodes = async (index) => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v2/codingQuestion/codingforfinal"
        );
        const data = await response.json();
        if (data?.object.questionDtos[index]?.functionCodes) {
          setFunctionCodes(data.object.questionDtos[index].functionCodes);
          setQuestionId(
            data?.object.questionDtos[index]?.questionId,
            "amirtha"
          );
        } else {
          setFunctionCodes({});
        }
      } catch (error) {
        console.error("Error fetching function codes:", error);
      }
    };

    fetchFunctionCodes(currentQuestionIndex);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (selectLanguage && functionCodes) {
      console.log("functionCodes --->", functionCodes);
      const functionCodeArray = Object.values(functionCodes);
      const selectedFunctionCode = functionCodeArray.find(
        (code) =>
          code?.codeLanguage?.toLowerCase() === selectLanguage?.toLowerCase()
      );
      console.log("selectedFunctionCode--->", selectedFunctionCode);
      var selectedLanguage = supportedLanguages.filter((language)=>{
        return language?.language?.toLowerCase()===selectedFunctionCode?.codeLanguage?.toLowerCase();
      })
      setVersion(selectedLanguage[0]?.version);
      // console.log(selectedLanguage[0]?.version);
      if (selectedFunctionCode) {
        setCodeValue(selectedFunctionCode.code);
      }
    }
  }, [selectLanguage, functionCodes]);

  const handleChange = (newValue) => {
    setCodeValue(newValue);
    setCoding({ ...coding, code: newValue });
  };

  if (!question || !functionCodes === 0) {
    return <div>Loading...</div>;
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionCount - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      console.log("current", currentQuestionIndex);
      setCasesList(
        question.object.questionDtos[currentQuestionIndex + 1]?.casesList || []
      );
    }
    setTestcaseDisplay(false);
    setsubmitTestCase(false);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setCasesList(
        question.object.questionDtos[currentQuestionIndex - 1]?.casesList || []
      );
    }
    setTestcaseDisplay(false);
    setsubmitTestCase(false);
  };

  const handleLastQuestion = () => {
    navigate('/user/userhome');
  };

  const isLastQuestion = () => {
    return currentQuestionIndex === questionCount - 1
  }

  console.log(isLastQuestion, "lastquestion");

  const renderObjects = () => {
    const toggleDetails = (index) => {
      if (expandedIndex === index) {
        setExpandedIndex(null);
      } else {
        setExpandedIndex(index);
      }
    };

    return (
      <div className="outputContainer">
        {message === "error" ? (
          <p>{objects}</p>
        ) : (
          objects.map((obj, index) => (
            <div key={obj.id} className="testCaseContainer">
              <h3
                className={
                  obj.result === "PASS"
                    ? "testCaseHeader-pass"
                    : "testCaseHeader-fail"
                }
                onClick={() => toggleDetails(index)}
              >
                TestCase {index + 1}{" "}
                {expandedIndex === index ? <FaAngleUp /> : <FaAngleDown />}
              </h3>
              {expandedIndex === index && (
                <div className="testCaseContent">
                  <p>
                    <strong>Input:</strong> {obj.input}
                  </p>
                  <p>
                    <strong>Output:</strong> {obj.output}
                  </p>
                  <p>
                    <strong>Expected Output:</strong> {obj.expectedOutput}
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    );
  };

  const renderSubmitdata = () => {
    return (
      <div className="submitDataContainer">
        {submitdata.map((obj, index) => (
          <div key={obj.id} className="testCaseContainer">
            <h3
              className={
                obj.result === "PASS"
                  ? "testCaseHeader-pass"
                  : "testCaseHeader-fail"
              }
            >
              Hidden TestCase {index + 1}
            </h3>
          </div>
        ))}
      </div>
    );
  };
 
 

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
    setCasesList(question.object.questionDtos[index]?.casesList || []);
  };

  return (
    <div className="codingContainer">
      <QuestionBar
        roundType={roundType}
        questionCount={questionCount}
        handleQuestionClick={handleQuestionClick}
      />
      <div className="TestPage">
        <div className="QuestionDisplay">
          <h2>QUESTION :</h2>
          {console.log("questionset data --->", question.object.questionDtos)}
          {question && (
            <div className="Question">
              <p>
                {question.object.questionDtos[
                  currentQuestionIndex
                ].question.replace("\n", " ")}
              </p>
              <div className="testcases">
                <h3>Cases List:</h3>
                <ul>
                  {casesList.map((item) => (
                    <li key={item.caseId}>
                      <strong>Input:</strong> {item.input}
                      <br />
                      <strong>Output:</strong> {item.output}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="Compiler">
          <div className={"optionsChange " + (screen ? " darkscreen" : " ")}>
            <div className="language">
              Language :{" "}
              <select
                className="languageSelection "
                value={selectLanguage}
                onChange={(event) =>
                  setSelectLanguage(event.target.value.toLowerCase())
                }
              >
                {supportedLanguages.map((lang, index) => (
                  <option key={index}>{lang.language}</option>
                ))}
              </select>
            </div>
            <Button
              type={"button"}
              text={screen ? "🌙 Dark" : "☀️ light"}
              className={"screen"}
              onClick={() => setScreen(!screen)}
            />
          </div>
          <Editor
            height="78vh"
            width="100%"
            theme={screen ? "vs-light" : "vs-dark"}
            language={selectLanguage}
            value={codeValue}
            onChange={handleChange}
            className="compailerText"
            options={{
              contextmenu: false,
            }}
          />
          <div className="RunButton">
            <Button
              type={"button"}
              text={"Compile"}
              className={"compileButtons"}
              onClick={handleCompile}
            />
            <Button
              type={"button"}
              text={"Submit"}
              className={"submitButtons"}
              onClick={handleSubmit}
            />
          </div>
          { ((currentAction === "compile" && testcaseDisplay) || (currentAction === "submit" && submitTestCase)) && <div className="Message">
            <p>{message}</p>
            <div>
              {currentAction === "compile" && renderObjects()}
              {currentAction === "submit" && renderSubmitdata()}
            </div>
          </div>}
        </div>
        <div className="NavigationButtons">
          {currentQuestionIndex > 0 && (
            <button className="previousbutton" onClick={handlePreviousQuestion}>
              <GrPrevious /> Previous
            </button>
          )}
          <div className="submit-next-container">
            <button
              className="nextbutton"
              onClick={() => {
                if (isLastQuestion()) {
                  handleLastQuestion();
                } else {
                  handleNextQuestion();
                }
              }}
              disabled={
                isLastQuestion() && currentQuestionIndex === questionCount - 1
              }
            >
              {isLastQuestion() ? "Submit" : "Next"}
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingPage;
