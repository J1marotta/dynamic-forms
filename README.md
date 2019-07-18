## Dynamic Forms. 

#### Controlled vs Uncontrolled Components in react. 


--- 
Practice making a dynamic form based on a JSON input, 

Rules: 
  name
      text based
      should enforce the need for a first and last name (separated by a space)
  date of birth
      date based
      required, should be older than 18
  gender
      options based (male/female)
      optional
  contact number
      text based
      optional
      allow for multiple values (e.g. mobile, home, etc)
  require guardian consent
      checkbox
      optional
  guardian details (name, contact)
    text based
    required/applicable if consent checkbox is ticked


Acceptable output
```
    {
        name: "John Foo",
        dob: "1990-01-01",
        gender: 1,
        contact: [{
            type: "mobile",
            value: "0400123123"
        },{
            type: "home",
            value: "610000000"
        }],
        guardian: {
            name: "Jane Foo",
            contact: "0400123123"
        }
    }
```