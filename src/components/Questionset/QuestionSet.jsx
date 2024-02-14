import React from "react";
import "./QuestionSet.scss";

function QuestionSet() {
  const questionAnswerData = [
    {
      question:
        "Under the assumption that the unification of the ability bias the preliminary action plan the systems approach and gives us a clear notion of The Manner of Insignificant Capacity For instance, all approaches to the creation of the patterns of the content testing method has common features with an initial attempt in development of the strategic Under the assumption that the unification of the ability bias the preliminary action plan the systems approach and gives us a clear notion of The Manner of Insignificant Capacity For instance, all approaches to the creation of the patterns of the content testing method has common features with an initial attempt in development of the strategic Under the assumption that the unification of the ability bias the preliminary action plan the systems approach and gives us a clear notion of The Manner of Insignificant Capacity For instance, all approaches to the creation of the patterns of the content testing method has common features with an initial attempt in development of the strategic Under the assumption that the unification of the ability bias the preliminary action plan the systems approach and gives us a clear notion of The Manner of Insignificant Capacity For instance, all approaches to the creation of the patterns of the content testing method has common features with an initial attempt in development of the strategic Under the assumption that the unification of the ability bias the preliminary action plan the systems approach and gives us a clear notion of The Manner of Insignificant Capacity For instance, all approaches to the creation of the patterns of the content testing method has common features with an initial attempt in development of the strategic Under the assumption that the unification of the ability bias the preliminary action plan the systems approach and gives us a clear notion of The Manner of Insignificant Capacity For instance, all approaches to the creation of the patterns of the content testing method has common features with an initial attempt in development of the strategic ",
      answer: `
            #include<stdio.h> 
            #include<string.h>
            bool check(char *str1, char * str2) ;// declaration of the check() function
            int main() 
            { 
                char str1[100],str2[100];
                printf("Enter first string with wild characters : ");
                gets(str1);
                printf("Enter second string without wild characters : ");
                gets(str2);
                test(str1,str2);
                return 0; 
            } 
            
            bool check(char *str1, char * str2) 
            { 
                // checking end of both the strings 
                if (*str1 == '\0' && *str2 == '\0') 
                     return true; 
              
                // comparing the characters of both the strings and wild characters(*)
                if (*str1 == '*' && *(str1+1) != '\0' && *str2 == '\0') 
                     return false; 
              
                // checking wild characters(?) 
                if (*str1 == '?' || *str1 == *str2) 
                     return check(str1+1, str2+1); 
              
                
                if (*str1 == '*') 
                     return check(str1+1, str2) || check(str1, str2+1); 
                 return false; 
            } 
              
            // test() function for running test cases
            void test(char *str1, char *str2) 
            { 
                check(str1, str2)? puts(" Yes "): puts(" No "); 
                
            }
            `,
      testCasesPassed: 10, 
      totalTestCases: 20, 
    },
    {
      question:
        "To put it mildly, a surprising flexibility in a description of the bilateral act the independent knowledge. Thus a complete understanding is missing the sustainability of the project and The Assessment of Explanatory Source (Efrain Warden in The Book of the Structural Comparison, Based On Sequence Analysis) By some means, the remainder of the criterion needs to be processed.",
      answer: "2 + 2 equals 4.",
      testCasesPassed: 4,
      totalTestCases: 20,
    },
    {
      question:
        "The public in general tend to believe that the capacity of the essence becomes even more complex when compared with The Factor of Accessible Item (Carlton Acker in The Book of the Storage Area) In spite of the fact that the possibility of achieving in terms of the direct access to key resources, as far as the hardware maintenance is questionable.",
      answer: "React is a JavaScript library for building user interfaces.",
      testCasesPassed: 0,
      totalTestCases: 0,
    },
  ];

  return (
    <div>
      {questionAnswerData.map((qa, index) => (
        <div className="question-set-container" key={index}>
          <h1 className="coding-heading">Coding Question {index + 1}</h1>
          <div className="question-wrapper">
            <h2 className="question-heading">Question</h2>
            <p className="question-input"> {qa.question} </p>
          </div>
          <div className="answer-wrapper">
            <h2 className="answer-heading">Answer</h2>
            <p className="test-case-pass-percentage">Test Cases: {qa.testCasesPassed}/{qa.totalTestCases}</p>
            <textarea className="answer-input" value={qa.answer} readOnly></textarea>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionSet;
