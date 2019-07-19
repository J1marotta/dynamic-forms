import { useState } from "react";
import * as R from "ramda";

const { useState, useEffect } = React;
b.setDebug(true);

const useFormHandler = (initialState, callback) => {
  const [values, setValues] = useState(initialState);

  const handleSubmit = e => {
    if (e) e.preventDefault();
    callback(values);
  };

  const handleChange = ({ target: { name, value } }) => {
    setValues(values => ({ ...values, [name]: value }));
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};

// naming stuff sucks
b.css(
  "html",
  `
  font-family: Helvetica
  `
);
b.css(
  "body",
  `
  padding: 0;
  margin: 0;
`
);

const css = {
  page: b` 
      display: grid;
      grid-template-columns: 1fr;
      height: 100%;
      width: 100%;
      overflow: hidden;
      padding: 20px;
      background-image: 
        linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
    `.class,

  form: b`
      display: grid;
      width: 60vw;
      height: 100%;
      justify-self: center;
      row-gap: 20px;
    `.class,

  wrapper: b`
      display: grid;
      grid-template-columns: 1fr 1fr;
      border: 2px solid black;
      padding: 10px;
    `.class,

  label: b`
      font-weight: 550;
      padding: 1px;
      text-transform: capitalize;
    `.class,

  input: b`
      padding: 10px;
      margin: 6px;
      border-radius: 5%;
  `.class,

  submit: b`
      padding: 10px;
      margin: 6px;
      border-radius: 5%;
  `.class
};

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
};

const getCompulsoryKeys = R.either(
  key =>
    ({
      name: () => true,
      dob: () => true,
      gender: () => true
    }[key]),
  R.F
);

const convertGender = number =>
  ((
    {
      1: ["male"],
      2: ["female"]
    }[number] || []
  )
    .concat(["other"])
    .shift());

const generateTextInput = (name, handleChange, values, fn) => (
  <input
    className={css.input}
    type={"text"}
    name={name}
    required
    onChange={handleChange}
    value={fn(values[name])}
  />
);

const generateInput = (k, handleChange, values) =>
  ({
    name: () => generateTextInput("name", handleChange, values, x => x),
    dob: () => (
      <input
        className={css.input}
        type={"date"}
        name={"dob"}
        required
        onChange={handleChange}
        value={values["dob"]}
      />
    ),
    gender: () =>
      generateTextInput("gender", handleChange, values, convertGender)
  }[k]());

const generateTelInput = (number, handleChange, values) => (
  <input
    className={css.input}
    type={"tel"}
    name={number.type}
    onChange={handleChange}
    value={values["contact"]
      .filter(x => x.type === number.type)
      .map(x => x.value)}
  />
);

const App = ({ data }) => {
  const results = values => console.log(values);
  const { values, handleChange, handleSubmit } = useFormHandler(json, results);

  return (
    <div key={data} className={css.page}>
      <form className={css.form} onSubmit={handleSubmit}>
        {Object.keys(data)
          .map(k =>
            [k].filter(getCompulsoryKeys).map(k => (
              <div key={k} className={css.wrapper}>
                <label className={css.label} htmlFor={k}>
                  {k}
                </label>
                {generateInput(k, handleChange, values)}
              </div>
            ))
          )
          .concat(
            Object.entries(data)
              .filter(([k, v]) => k === "contact")
              .map(([contact, numbers]) =>
                numbers.map(number => (
                  <div key={number.value} className={css.wrapper}>
                    <label className={css.label} htmlFor={number.type}>
                      {number.type}
                    </label>
                    {generateTelInput(number, handleChange, values)}
                  </div>
                ))
              )
          )}
        <button className={css.submit} type="submit">
          Log it
        </button>
      </form>
    </div>
  );
};

ReactDOM.render(<App data={json} />, app);
