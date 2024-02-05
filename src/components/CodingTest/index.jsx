import React, { useState } from 'react'
import "./CodingTest.scss"
import { Editor } from "@monaco-editor/react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Button from "../Button/index"
const CodingTest = () => {
    const question = [1, 2, 3, 4];
    const languageOptions = ["python", "javascript", "java", "cpp"];
    const tableRow = ["TestCase","Input", "Expected Output", "Your Output"]
    const [selectLanguage, setSelectLanguage] = useState("python");
    const themes=["vs-light","vs-dark"]
    const [theme,setTheme]=useState("vs-light")
    const [codeValue, setCodeValue] = useState(`Write code here`);
    const [coding,setCoding]=useState([{name:"",code:""}])
    const jsonFormat = JSON.stringify(coding, null, 2);
    const [screen,setScreen]=useState(false)
    const handleChange = (newValue) => {
      setCodeValue(newValue);
       setCoding((data)=>({...data,name:selectLanguage,code:codeValue}))
    };
    
    console.log(jsonFormat);
    return (
        <div className='codingContainer'>
            <div className='position'>
                <div className='leftQuestionNumber'>
                    <h2 className='sideHeading'>Coding Questions </h2>
                    <div className='sidenumber'>
                        {question.map(f => (
                            <div className='questionNumbers'>{f}</div>
                        )
                        )
                        }
                    </div>
                </div>
            </div>
            <div className='TestPage'>
                <div className='QuestionDisplay'>
                    <h2>Question :</h2>
                </div>
                <div className='Compailer'>
                    <div className='optionsChange'>
                        <div className='language'>
                    Language : <select className='languageSelection' onChange={(event) => setSelectLanguage(event.target.value)}>
                        {languageOptions.map(f => (
                            <option key={f} >{f}</option>
                            ))}
                    </select>
                            </div>
                        <Button type={"button"} text={screen?"🌙 Dark":"☀️ light"} className={"screen"} onClick={()=>setScreen(!screen)} />
                    </div>
                    <Editor
                        height="88vh"
                        width="100%"
                        theme={screen?"vs-light":"vs-dark"}
                        language={selectLanguage}
                        value={codeValue}
                        onChange={handleChange}
                        className="compailerText"
                        options={{
                            contextmenu: false
                        }}
                    />
                    <div className='RunButton'>
                        <Button type={"button"} text={"Run"} className={"compileButtons"} />
                        <Button type={"button"} text={"Submit"} className={"submitButtons"} />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CodingTest
