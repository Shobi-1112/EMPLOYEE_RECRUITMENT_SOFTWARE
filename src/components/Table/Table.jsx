import React, { useEffect, useMemo, useState } from 'react'
import { useTable } from 'react-table';
import "./Table.scss"
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";  
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Search } from '../Searching/searching';
import {contain} from "../Searching/searching"
import { questionContent } from '../../List';
const Table = ({headings,content,searchop}) => {

  const [currentPage,setCurrentPage]=useState(1);
  const recordsPage=2;
  const lastIndex=currentPage*recordsPage;
  const firstPage=lastIndex-recordsPage;
  // const records=content.slice(firstPage,lastIndex)
  const page=Math.ceil(content.length/recordsPage)
  const numbers=[...Array(page+1).keys()].slice(1)
  // const [values,setValues]=useState("");
  const datas=React.useMemo(() => content.slice(firstPage,lastIndex),[])  
  const colum=React.useMemo(() =>[
    {
      Header:"NO",
      accessor:"no"
    },
    {
      Header:"QUESTION",
      accessor:"question"
    },
    {
      Header:"TYPE",
      accessor:"type"
    },
    {
      Header:"WEIGHTAGE",
      accessor:"weightage"
    },
    {
      Header:"ACTION",
      accessor:"action"
    }
  ], [])  

  const { getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = useTable({ columns: colum, data: datas});
  
  function prepage(){
  if(currentPage!==1){
    setCurrentPage(currentPage-1)
  }
  }

  function nextpage(){
    if(currentPage!==page){
      setCurrentPage(currentPage+1)
    }
  }

  function changepage(id){
    setCurrentPage(id)
  }

  const handleSearch = (result) => {
    return result
  }
 
  return (
    <div className='tableContaier'>
      <Search data={searchop} handleSearch={handleSearch}/>
      <div className='tableHeading'>
<table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>
        <nav className='pagechangeContainer'>
          <ul className='changepage'>
            <li className='listofbuttons'>
              <a href='#' className='page-link' onClick={prepage}><MdOutlineKeyboardDoubleArrowLeft /></a>
            </li>
                {numbers.map((n,i)=>(
                  <li className='listofbuttons'>
              <a href='#' className={`page-item ${currentPage === n ? 'active': ''}`} style={{color:currentPage===n?"green":"gray"}} onClick={changepage}>{n}</a>
                    
                  </li>
                ))}
                 <li className='listofbuttons'>
              <a href='#' className='page-link' onClick={nextpage}><MdKeyboardDoubleArrowRight /></a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Table
