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

### Feelings: at the 2 hour mark.

---

Definitely felt the pressure of the 2 hours Limit, my first time using hooks (currently at work using an earlier version of React). it was an interesting Challenge

#### Controlled vs Uncontrolled components

I originally had the idea of a pure html5 form, with mapping and validation and was going to focus on uncontrolled, but I realised that probably wasn't the spirit of the challenge.
So I started migrating towards controlled, I set a timer for the one hour mark, and didn't reset it for the 2 hour mark, before I knew it, 2.5 hours in and a broken form.

I'd like to come back to this Sunday Night and see if I can improve my progress.

I like to work in a codepen so you can see the form

[here](https://flems.io/#0=N4IgtglgJlA2CmIBcBWATAOhQGhAYwHsA7AZwIWX3NgEMAHE+KEXEvAJ2uQG0AGbXgF1cAMwgISPUERphESEBgAWAFzCwWVIivjbKAHigQAbgAJoAXgA6IenRsA+fQHojxhyAC+2abPmKAK0lcQm1dFUpQkhVTYFMAV0YAZRUaHWwExgBRERF4PBjPUwtTACV4GgKrIgAjDEYVABF4GviAcwAKFXZ4+ABKauqomMT4ADECdjAACRoiOHh2YtMOiCIIFQgaWBS0+Ay8bdgayoBrPuKHWOrTU2HTbmNt3pIMhoA1Z-gSQWXR3Z0q3Wm22AP6gyIt3uSjmCyS8RqkBiJXgl2ukNu5hEK36pngGDo7HgxnCzRENHisBUHQGGKhRxOeFOHSesBetNunghUOI0VMMPmCAAwgK2qiSh04ql2GKVEhYqYZHIMqzeqZPJ4LhYrsAbpiPl8SCzDWjJRhzarvhluEr4IJ5Zb1X0Oeq9bc3aYiSp4uxIbq6ZiBQsRXMxdgPbcgwh4YiNuGA7dLa8PUVqlyiNVnM5FbI1m1TNF4rkC-EmSRqnU8CQjXqAOSqdS1jIAAz1ImIKgAtOTILAAJ7y6bwWAkzaHPWtoi0yvVjq1moEKB9pumSe3Og0GB5+W8ADcerANBlax3+6IzdpQ15MSrJGW1X965oYvlNWbpgjpiMJDotAHpjadhoDPTFMUA6BOx0MBfz2TtCDZMBSHlABGER2BA0D+XgCA2lUFDeF4ABSDDQIAd2gFQlHwoiSMxAgSXYERYAIUj5SUaAoF0Winy3Ig2nlNBeDoAAPbjTEZU5AIIeJ5k7CBDxfD8E0xWA1gqdhO0AzcIHCLoCE9HDVFMFQCDoDIAGJeBQZCAE4AGYAHYLIIgAWKAHJoZzeAADgc+yvJqEQHLQCyaG8lpkLQPpaObDA8FoasPRuDJ2ymV810w78YP-cCoDE8ioEo+UADZeGMUixKUbDcLlUxkII4jPwCRJNhEPtO0YWARHlPBwkWMTOFIzT6AEoTRI9WL4poRKMwxDJSPYOxFnlcSMtArK-3lXKxNyyD4Gg2gdDg8h4kQkgULQuq0LEhd2E49gBJEgtyGgcTaCZMSN14-i6rGmK4oS8sAz1DJaBqYd0s-dttE7Ujqrw0wUBQPdPy+ow+JQkSxJ0YSu26OYSFSsAevoDZtggAAveB-qmmbQJB8wiDoeJarfVHN3Rn76qxz9D2PIgSp55TbvuztFqMRJ5RQRqMUmwG9QZkgESRSHlLR7dfqFzDTD5toT1MYqtcwkXFjF7TJcRmXbjl6a7zTCFuQd2b7iCYhlkfHM5HlGwACkCCUSEJgIGx41uKACBqb2QFsmzeE7XhkPj5CQ71MV5mWurQ7uDtKlq7gPQ90CVD7Oh4CjsAI-EeAU+Uy0o94FyCMiuzm5sFMs9uQvMWL0uo6UAg5Br7W64-EBivqgjJ94NuA3TW5hFT+IjyMOZ5S725bSjn25lRIOh8w0JUgKevG4TtAW-PmfQPTdMnfuWUhQH5nYDIdg+wAaXgPs7xKPVSgwbClFFgdA9KcL+lwPSSk-JvFYWorjdF6J+bA4dI6wLRMZHo1dlLYDTvdeUNI0QIKwdfbgYC+yCD6B3MoGAxh6kvM7a82ciAMRUAAcV0PdZYRBTrgyWNqJStwoEBmQitbgtZDwIFrIIBmaAkBiLyBI+AUi9SeBtDwxYvwAA+miHgUL1HFYghxqRiIIEA9gUiXT1HYiIakLoFYYivKQGIadFh7AACrwFxgASSZizZYHRbQZCjPAEMfF9imCTClSEcCBGmH0GsZmMQPS0xIAAOT8BYYAt4MAJJZnPbuJd4CZNrDjFQtZ8kbwycAW0FTPTwAAI7xAgESKAHpiChLFJk4JHT4C1MtJkkQRBjRsm+DaPwFD8nOAcPY++uhXE6B8Yk-xpxsDdNFPsJMMSVgexgQQ-hICEwuMWjoDx3jfHUlrLaFcazQzhMiaYYSaJhIukoXqFB+CYkHO1vE85n4oSA3SXITJ2TckqFqUXQpxSoB7HKX8z2RTgC1hQbC5StwiSNOaUwOF7T1ldNhMKdZ4LMT9OAEmMRyLBBEtuFMuhWdcEZz2VcL52sAJzOOfAU5KhFksznPS8xqz8UhPWdge5oQWHsPTksF5SlVGnEEDSehji+RHPccOblyIVjcLALwoJgqekqhNHAm4zKfmJOSQCqpILzm1J7gikpw4UWgVtJkrVvCMC2tqTi25eLBRCtuX0r4mTPxktrIfXOyjUUYDEFSYBjz+HCXdYU4oFgSiusWIm0upgXSYQwIeOgHQ41XATZabNmJJnTKnE7JVMQACCdA6D+LiNC1ITp0Ee3uESJWVIf4RJNPwqI5B8TMU6JsvU9w4hJlMLq31+r+SCpjEidUfxGATCmLMX17AOiuyIBkTtlIVAkA5HqL0PpIQmrcKYMhmTm00CKCkwFCLskbjFJ4CtmF9BEzuBaoFWTqxRsmGAIoxAF0bB9XCZWGxX1wuAAAeRqAEfIKgMBkKNDevoub6AdEvWiOFtxSHSNRTm6NOhN0PyfpSV+H8v6Htw5iDD+bTjoOZSy75F6r3AFOHe79j6-0LSWuwV9sSWPfLBsOL9tsH3Ar-aJ2ARQGywFXZkzjDgOOeBcDJt9wmWPABVQs85HQVlzpncK3tIzD1UpZS4NwVxaO3GdLZrNDmDFECMR0ODCGCgAO0EBb4HQ0MOduFG8QJGsMdFISKih6DGMppKKGnOBRayOcIyx+joXuBhoKBkNN7AfgxIC8J7LJBUvZZw8lrT5XbiGBMJer+Lr1HsAwJaLjEnLW8cWvWxYgn8sVZY-oGT4nqySd-UVmTcm1AKcmHV7V6aPUqeyxm3p6maDg1gJpnr62WVxF0xytV+nsvTuDCZzZS7usbcxFZkwNmysVdLTd2zt3XTKX0K0FQJlIT3ta0VpWsYwXGUhTYb7SIbCmAcAAGQIPmDYLgXtvbW3E5wRNNMXfcHQ+2s1yi50aDBgAshgIkkqDlWBUPoOtDab2ZO3UUGlO7TB2D6JoQg0Eq7sEoCcFbmhOqIYgLySgvAkBxzQMhFySBipeB8CAW0lA4rVgZx2cIlAvDCBAKpIgpxJByN8HISgRJc6aB9BoBQqgVAMCQFmGSdBJIGLAM4HXBRnCnSgDbionnOIkmYnQOQ2gMBBE0LaygbAgJ0AiN4TX-hbddnDmAPX7ADcgCNybs3TNLeM6d7nTskf7dgEd+H9PA8MCu+HKZT3SGfe4D9woAPEAg9i9D9r2Q0Lo+x-j+dRPFu2hW5t-XmgAABXgGA0DFQwMhVwEBoid6zzQXNaxvfBBAOXkAlfq8h4l34VnMvcD68oM3039uk-t5TzUas3fkIYEH3ZZwh+iul7n4U-3HAq-B8pUAA)

Couldn't sleep so I worked a bit more, and am much more comfortable with this version. Still no Validation, and I'd love to make it look nicer too.

Overall I found this an excellent challenge, I got stuck on Synthetic events for a bit, and getting my head around React Hooks.

I found mostly I think in JavaScript rather than in React, and always tried to do things in pure objects or functions.
