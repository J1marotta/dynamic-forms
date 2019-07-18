import react from 'react'
import * as R from 'ramda'

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
      name: () => [true]
      ,dob: () =>  [true]
      ,gender: () => [true]
    }[key]),
    R.F
  )




const App = data =>
      Object.entries(data).map( ([data,value]) =>
       Object.entries(value).map( ([k,v]) => 
        [k]
          .filter(getCompulsoryKeys)
          .map(k => (
           <div key={k}> 
            <label htmlFor={k} >
            {k}
            </label>
            <input type={'text'}
              name={k}
              value={v[k]}
              />
           </div> 
          ).shift()
      )   
  )
)


ReactDOM.render(
	<App data={json} />
, app)