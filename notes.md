html5 input validation

pattern for telephone number: `pattern="^\d{3}-?\d{3}-?\d{4}$"`

this is a _major_ source of incompatibility between browsers.

in general, chrome supports html5's `required` field and validation codes,
but safari doesn't even support required without a shim.

I'm opting for 3rd party libraries, 'Input Masking' and [jQuery Validation](https://jqueryvalidation.org/).
