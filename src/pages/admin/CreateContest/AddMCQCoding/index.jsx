import React from 'react'
import "./AddMCQCoding.scss"
import InputTag from '../../../../components/InputTag'
import Button from '../../../../components/Button'
import assets from '../../../../assets'
const AddMCQandCoding = () => {

    return (
        <div>
            <div className='ContestnameEnter'>
                <h1 className='heading'>Basic Information</h1>
                <InputTag type={"text"} lable={"Contest Name"} className={"contestinfo"} placeholder={"Enter contest Name"} />
            </div>
            <div className='ContestnameEnter'>
                <h2>Add Rounds</h2>
                <Button text={"Add +"} className={"addbuttonContestCreate"} ></Button>
                <img src={assets.noResults} alt="no-round" className='notfountimg' />
            </div>

        </div>
    )
}

export default AddMCQandCoding
