import React,{useState} from 'react'
const Birthdaylist = ({people}) => {

const [bdays,setBdays] = useState(people);
  return (

    <>
    <p>{people.length} bdays today</p>
        {
            bdays.map((person) => {
                const {Name,Age,weight} = person
                return(
                    <>
                    <h1>{Name}</h1>
                    <p>{Age}</p>
                    <p>{weight}</p>
                    </>
                )
            })
        }
        <button type='button' onClick = {() => setBdays([])}> clear all </button>
    </>
  )
}

export default Birthdaylist;