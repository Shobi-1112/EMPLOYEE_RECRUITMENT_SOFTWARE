import React, { useState } from 'react'
import "./CodingTest.scss"
import { Editor } from "@monaco-editor/react";
import InputTag from '../InputTag/InputTag';
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaMoon } from "react-icons/fa";
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
    const outputs = [
        {
            case:"SampleTestCase 1",
            input: "10 + 10",
            expect: "20",
            your: "10",
            results:false
        },
        {
            case:"SampleTestCase 2",
            input: "50 + 5",
            expect: "55",
            your: "55",
            results:true
        },
        {
            case:"SampleTestCase 3",
            input: "20 + 10",
            expect: "30",
            your: "30",
            results:true
        }
    ]
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
                        <InputTag type={"button"} value={screen?"🌙 Dark":"☀️ light"} className={"screen"} onClick={()=>setScreen(!screen)} />
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
                        <InputTag type={"button"} value={"Run"} className={"compileButtons"} />
                        <InputTag type={"button"} value={"Submit"} className={"submitButtons"} />
                    </div>
                    
                    <div className='OutputVerification' style={{}}>
                    <h2>Sample TestCase : 2/3</h2>
                        <table>
                            <tr className='tablerow'>
                                {tableRow.map(f => (
                                    <th>{f}</th>
                                ))
                                }
                            </tr>
                            {outputs.map(f => (
                                <tr>
                                    <td style={{color:f.results?"green":"red"}}>{f.case} {f.results?<FaCheck style={{color:"green"}}/>:<ImCross style={{color:f.results?"green":"red"}}/>}</td>
                                    <td style={{background:f.results?"rgb(175, 210, 188)":"rgb(216, 161, 161)"}}>{f.input}</td>
                                    <td style={{background:f.results?"rgb(175, 210, 188)":"rgb(216, 161, 161)"}}>{f.expect}</td>
                                    <td style={{background:f.results?"rgb(175, 210, 188)":"rgb(216, 161, 161)"}}>{f.your}</td>
                                   

                                </tr>

                            ))

                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodingTest
