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


Feelings: 2hours 
-------------
Definitely felt the pressure of the 2 hours Limit, my first time using hooks (currently at work using an earlier version of React). it was an interesting Challenge 

#### Controlled vs Uncontrolled components 
I originally had the idea of a pure html5 form, with mapping and validation and was going to focus on uncontrolled, but I realised that probably wasn't the spirit of the challenge. 
So I started migrating towards controlled, I set a timer for the one hour mark, and didn't reset it for the 2 hour mark, before I knew it, 2.5 hours in and a broken form.

I'd like to come back to this Sunday Night and see if I can improve my progress.  



I like to work in a codepen so you can see the form 


[here](https://flems.io/#0=N4IgtglgJlA2CmIBcB2ATAOjQZgDQgDMIEBnZAbVADsBDMRJEDACwBcxYR8BjAeytbwByEAB4oEAG4ACaAF4AOiBoAHFUoB8ogPQTJGkAF9c1OgyYArMj36DhjPlRKtpwaQFcS8AMqsag3A8vAFECAnhuF0NpOWkAJXgaSIUqFMdnIPgAMV4AJzAACRoqOHhcmOkACggqCFYIGlhff3hA7kbYACMkgGsAShiNVxTpaXSXcklG93gSQK9WADVp2YBdCs8fP0Fq2vrG5sE+lJGx-gzmYtLvd07IF1j4QeGqUdGIAir4AfgMFVz4JIhKwACLwAg0dywViVY6vN7tWBdXqVKawGYkOGjQwneHjaSXEoIADChIA5k9YpU3H5chTWEhXNJaPRAmiZtJDIYBnIhsBTqMFst0bNUSsSM9qRhpezZoFyCz4KtGbLOX0sZyBdItQDWO5cq9+fC3gSriTya0taNCddbvdcFbpLK5o6heKHcbOdqqDjUlR8bAaJ14E1WABPBAVU5Gk1gGh0moAFV4KkZAHIAIwABhUAA806dAioaDAamT09m8wX4YEAO7QVjMdMAVhz+dOvtx+JqKncrF8Ecp3tGMbecYTVGTqekmbb1dGRZLEio5ZnlfbNek9agjfTaCzc47XfOLgIeTAA8jsWjWokJBUgbD6bJuWg8+kgRf0ET8DAD5axK8OiYBOBWBC5O+dYNk2M77oefrYqcaQnluuSqCoZRRvCo6jHe-5PjOX5QJB0jjmSNR7vBC7SMWpYrhWVEftIRE-n+gaCAAggCNAkGBEGFtIFiePUBBhgAkoIYC8TO76dn6+JWPwFSjoqjJKAAUrwzCvDkvBKB6uG8J0akgBmACcZlZgAtFmGY2Rm+mnBSJRlIyGYGWcAhJAy0jkFqOFvOGGEmWARnEPAjmeqMsomVmAAsB4ZjgSXYEoWrGP5jpBfAJnMLw9CRSa0UrCZABs2YHpVWZpZ6vqjKsHlku48YSMUjIBaMqnaiA6nFE8umFUVjh+JEsUJbZyU4DVJq+nJx5OC49KAX+UIkHkYYANLwGGErXvCcQYPAdTMGUlRaj022DFq1KOl1sLPKwuQzI6uBQEZjL3byoyPc9UUfs5UCuVUPJDD9EW1eQF1hqsfQeaMB1ZKccLzRkjhArkrAAOJCID5SxFQ7hgMGeNDKcN2ehmH0g75aZxggaarAJaBU885BpuEdPwAzR7wgqhPE6ssJwhgjjtDCaa8I2ZRpsLJDMB8MIakh8LIQtzFCGULQ-rmrBiVQvYPFUiqBDa5rFBSbLutIBCvNTjqiD2fbDkV31hhhcjAGmgg62mdUu8yZge4qfsuwCACO7gQACUCOqM-Ckub8Ae6b8AJyu8Ah0VsoezbYoiiQCpmDDmcmtoGjK-izma4IesGxUlQ9LgKdpxbzrU+TnVmCzX1nVFVdoYI2u6-rfaVGmippibZqpxalv54EubPLmGqw6cb3GcDkr247Lix9I2Ue2mUAtL7e+Kof6+n39ozh5H0d75AVAe0odl2XBDlGHv8cWsn08txne9s7AGdGzS+qwS5vDLlqVe8IAZA0+kMXu-t1ZUGrvAIetdR5pjgRBJuf9Z7OjaPwdGWMcaYQ1KMAYKRDCQ0FuqXEDD5IoQ4moeubhj5+DVM8F4ox8QAhIFCVgu0nTimeOkICvxYC8DJHnDEGp8RuGdExZus9TREh8HaOoXpYibByPkIo6jciVEUlQQI-DBGYhGKcXU+pXhIOkOIKQ0goYew4TQaIzhBwe1rGhNQZRDDlyiqIM8+RpCeIQDnc8l4M7SH4DcO4dRf7qPifcAJe9gAAHlOgWAiKwQ6AhXyijcX0DAcYVCVCqJDXAkgYbPD3qMWh9S3gYCINCU6S18q9lgGtXIm1tqWOvkVUpqgG7cPscgoqjiZAuOAD0Dx4YInAB3tEgJzsJmTMDMGWAYSFlJ2AJskMKyCTsFgHoj2cyNCzMMDoA5sBAnrOQcAfuLRMEwkbmo0o-855yIgcgnQehSaDJNBQ-2AxRiOj6BA0QnQ+ysCUgfJQAiEmsCUNIDQKS6g6BhawOFVB7lvB0CEsA+L-lSHxXCOSCRvIggyQAWQwACFyRiTisFECwlQ0g3EexMdEKBpjpDoT6FwEAfA-zhVyCIboWzhVeAQJECA5wRAoCQPuIwJgQCKhECLEg1gRW2GBCIIwDUQCwBqD0MgSBKAarMCIbikRhX6k4IwNgrAVC8W0Nodw+sehkhFvlbQdrWCerAFAANiRIgYEBkCKRKh6ACAwFYYV2URAkG4K+FQrA1WmHoLa8NrArJvTAA63ITqQAurdUgD1XqVA+r9WAMN3kC3+sJqGwNTawCRsBCGFMca8mJvwMmxgqb02ZuMNm8waEQ00GLaW8t7rPXet9aKgNdBj4AAEsxYFKhgDMugIDOBXVO0pNQE26sHSAYdEAM1GsMEAA)



Couldn't sleep so I worked a bit more, and am much more comfortable with this version. Still no Validation, and I'd love to make it look nicer too. 