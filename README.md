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

[here](https://flems.io/#0=N4IgtglgJlA2CmIBcB2ATAOjQZgDQgDMIEBnZAbVADsBDMRJEDACwBcxYR8BjAeytbwByEAB4oEAG4ACaAF4AOiBoAHFUoB8ogPQTJGkAF9c1OgyYArMj36DhjPlRKtpwaQFcS8AMqsag3A8vAFECAnhuF0NpOWkAJXgaSIUqFMdnaQJeACcwAAkaKjh4bJjpbhpYWAAjJIBrGI1XFOly-gzySUr3eBJAr1YANW7egF0yzx8-QQAKYEMAShSWtqcXZkLi73dqyBdY+EbmqlbWiAJpGfgF6XgMFWz4SSFWABF4Ahp3WFYZpZPThUqrVuHU-itDCt0utNggAMIbKgAc0OByOwBWrQGw1gPRIMy6uN6RzmGDJhLxgXIdz82RRrAwtHooyQtwwtPpGAph0W-1akIBrUx0kerHc2ROGMFp0RxQRhRRuGFrVlCG2uwgrCV0ta3L6yuk2JG+ulAtO0hSAuh0lgNGq8FgvgAnggyispeawDQ6RAqAAVXgqVkAcgAjAAGFQAD2DK0CKhoMF9SJDEejsYBgQA7tBWMwQwBWSMxiHLVJUa2+lTuVjO12xd3Cr0+-2B1PFjOteOJiTI9vpuPSHNQPMhtDhjul8vWrK5Ouoi0Aj2nCQkFS2p0hpHZaCd6SBbfQP3wMDr-zwOG8XFgJypgjZPfZ3P56TB8eT8v8lZpdouLPZVQVBKN0l2FVcz03V9DygR9pGbJFfTHD8u2kBMkz7V80xLTNpGg49T1tQQAEFHhoEg7wfQcLE8VhzidABJQQwHI189wFMtrSsfgymXJl4FZJQACleGYE4ADFeF4JRtVaKBeGqASQFDABOZTwwAWnDUNNNDaSVhRIoSlZUMZNWPxIlZchhWXc1WCdIDFLAeTiHgPSdWkblFPDAAWCdQxwfzsCUYVjGsg07Ici0QGYXh6Dc81dRGRSADYIwndLw2C00VlGUykXcb0JEKVkbNOPjFMEwpDgkqSuANRxzNYLzfK0gKcCy80BXY8sfzWXD4FYS9T2+EgcidABpeAnRIEDWjiDB4E1ZgShmYU6imxphTmA1ysuG45CaVhsh6A1cDkhS9qOaQjpO9zcAMqAjMug7ruO1zTXIdanVGBZTLmjAxJWPlF2tAySnPY8o1YeiqGrfZLj4wJVQvRFFT1faNANUQqxrRcEtOCL4DkYBg0EKHgzNfHpD44m+Mp-HHgAR3cCBHigA1Wn4eVkSJ4Bke5lF6YS7lib1cg+NGIXzW0TGAV6jIwYAwQYbhsoZjqXB+dR+BcHRkleLMVk-hJZVFYh+AoZVmsZmDPjg012EUYVHX0aB0zzqNjHLixnGXA5677N54MoHPCn-ZpknzrD9zWiZlm2f9yAqGJpRtO099dKMf2ue14mtedqXThF4AxeD+Tg0l-2ZeFX79KER7sk9k2Y-6qhwcESHodh63gwekp7fznndeNYHWhuS1PtGP5-jLWfp1-aQiLUNW3BDvxpEWK7l2tNw9X3aRB8VA-HfVPYN7KWd8kd7IZkeEhvlYEhgetO+H5m2JjZe9IrzuWBeCRAkI8554zxqKcUJxVoAnEFIaQX1iZrxoNEZwLpeb-kAiUQwssEqiEvoaOyCBiaX3nNEfgp9NR5xPjsPYmD-bAAAPLVAsBEBkLwdy9BmAghYGAvQqBmJcT6usfpHH9q0SeIjTgYCID8Fa9IhrVlgKNbIE0ppP3Ea0bhqh1ZXUgVTXR0CZBwOAHUJB+Dea+2IU0NR2DbT2lgHglBxMbEOmIQfdgsAJLZGJsYjQRjDA6CcbALBujgnADNsrbuvwNbHyKPCbWgR0aFz0boKQliW7mlHlTG4Qp3ILELqIaoNZWDcUJooEA98NSsCUNIDQZDWA6AKawIpVAgmtB0JfIJOg9Cy3+N1BISQ3h0IALIYEeIZG+yw6lLxUNIBBxMuJUGiNXKggRAILC4CAPgp4XLZBELUWx6yvAIEiBAdoIhwxIA0qGbyykkDJSMCYEAfERAYG4CQawGzbAvBEEYXKIBYC+jqGQJAlBHlmBEKRSI6zxScEYGwVgKhyLaG0O4WGdQkQvNitoCFrBkVgCgFixIkQMCPWeH-FQ9ABAYCsOswmIgSDcB3CoVg9zTD0HBYS1g6k5JgChdkGF0VGkIqQEilFKg0UYrAAS-pXLMXuDxVKyIMqwDEqeA6QMFKGTUvwLSxg9LGXMuMKy8wAE8U0F5fyuFQqRWovRZsrFdAQ4AAFwxYGShgUMyTnD2tNdw30VL3k6rKQyiATKfmGCAA)

