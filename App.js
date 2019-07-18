import { useState } from 'react'
import * as R from 'ramda'


const formHandler = callback => {
  const [values, setValues] = useState({})

  const handleSubmit = e => {
    if (e) e.preventDefault()
    callback()
  }
  const handleChange = e => {
    setValues(values => ({...values, [e.target.name]: e.target.value }))
  }
    
    return {
      handleChange,
      handleSubmit,
      values,
      setValues,
    }
    
}
const labelStyle = 
  {
    marginTop: '10px'
  , padding: '10px'
  , width: '50px'
  }


const inputStyle = 
  {
    marginTop: '10px'
  , padding: '10px'
  , width: '200px'
  }

const formStyle = 
  {
    display: 'grid'
  , gridTemplateColumns: '1fr'
  , width: '200px'

  }
  
const wrapper = 
  {
    display: 'grid'
  , margin: '20px'
  , padding: '10px'
  , gridTemplateAreas: '1fr'
  , justifyItems: ''
  }


const json = {
  name: "John Foo",
  dob: "1990-01-01",
  gender: 1,
  contact: [
    {
      type: "mobile",
      value: "0400123123"
    },
    {
      type: "home",
      value: "610000000"
    }
  ],
  guardian: {
      name: "Jane Foo",
      contact: "0400123123"
    }
}



const getCompulsoryKeys = 
  R.either(
    key =>
    ({
      name: () => true
      ,dob: () =>  true
      ,gender: () => true
    }[key]),
    R.F
  )
  
const generateTextInput = (name, handleChange,values) =>
      <input 
        type={'text'}
        name={name}
        required
        onChange={handleChange}
        value={values[name]}
        />
  
const generateInput = (k,handleChange,values) => ({
  name: () => (
     generateTextInput('name',handleChange,values)
  ),
  dob: () => (
      <input 
        type={'date'}
        name={'dob'}
        required
        min={"1-1-2001"}
        onChange={handleChange}
        value={values['dob']}
        />
    ),
  gender: () => (
        generateTextInput('gender',handleChange,values)
    ) 
}[k]())






const App = ({ data }) =>  {
  const { values , handleChange, handleSubmit } = formHandler(results)
  const results = () => console.log(values)


 
  
 return (
  <div key={data} style={wrapper}>
     <form style={formStyle} onSubmit={handleSubmit}>
        {Object.entries(data).map( ([k,v]) => 
          [k]
            .filter(getCompulsoryKeys)
            .map(k =>  (
               <div key={k} style={inputStyle}> 
                <label style={labelStyle} htmlFor={k}>{k}</label>
                  {generateInput(k, handleChange, values)}
              </div> 
            )
          )   
      )}
      <button type="submit" >Submit</button>
    </form>
  </div>
)
}

ReactDOM.render(
	<App data={json} />
, app)