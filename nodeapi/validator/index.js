// exports.createPostValidator=(req, res, next) => {
//     //title
//     req.check('title', "write a title").notEmpty();
//     req.check('title', "title must be between 4 and 150 characters").isLength({
//         min: 4,
//         max:150
//     });

//     //body
//     req.check('body', "write a body").notEmpty();
//     req.check('body', "body must be between 4 and 2000 characters").isLength({
//         min: 4,
//         max:2000
//     });

//     //check errors
//     const errors = req.validationErrors();
//     //if error show the first one as they happend 
//     if (errors) {
//         const firstError = errors.map((error) => error.msg)[0]
//         return res.status(400).json({error: firstError})
//     }
//     //proceed to next middleware
//     next();
// }


// exports.userSignupValidator = (req, res, next) =>{
//     //name is not empty and between 4-18 characters
//     req.check('name', "Name is reuired").notEmpty().isLength({ min: 4, max: 18});
//     //email is not null valid and normalized
//     req.check('email', "Email must be between 3 to 32 characters")
//     .matches(/.+\@.+\..+/)
//     .withMessage("Email must contain @")
//     .isLength({ min: 3, max: 32});

//     //check password
//     req.check('password', "Password is reuired").notEmpty();
//     req.check('password').isLength({min: 6})
//     .withMessage("Password must contain at least 6 characters")
//     .matches(/\d/).withMessage("Password must contain a number");

//     //check errors
//     const errors = req.validationErrors();
//     //if error show the first one as they happend 
//     if (errors) {
//         const firstError = errors.map((error) => error.msg)[0]
//         return res.status(400).json({error: firstError})
//     }
//     //proceed to next middleware
//     next();
// }
