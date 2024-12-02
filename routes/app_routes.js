module.exports = (app) => {


    const BookApp = require("../controllers/book_controller.js");
    const UserApp = require("../controllers/user_controller.js");
    const ReturnApp = require("../controllers/return_controller.js");
    const BorrowApp = require("../controllers/borrow_controller.js");



    app.post("/registeruser", UserApp.registerUser);
    app.post("/createbook", BookApp.createBook);
    app.post("/borrowbook", BorrowApp.createBorrowRecord)
    app.post("/returnbook", ReturnApp.createReturnRecord)

    app.post("/updatebook/:username", UserApp.updateBook)

    app.post("/authenticateuser", UserApp.authenticateUser)


    // app.post("/insertbooks", BookApp.insertBooks);
    // app.post("/insertborrowrecord", BorrowApp.insertBorrowRecord);
    // app.post("/insertreturnrecord", ReturnApp.insertReturnRecord);
    // app.post("/insertusers", UserApp.insertUsers);

    app.get('/findbooks', BookApp.findAll);
    app.get("/findborrows", BorrowApp.findAll);
    app.get("/findreturns", ReturnApp.findAll);
    app.get('/findusers', UserApp.findAll);
    // const ServiceApp = require("../controllers/service_controller.js");

    // const MemberApp = require("../controllers/member_controller.js");

    // const RequestApp = require("../controllers/request_controller.js");
   
    // app.get("/services", ServiceApp.findAll);
     
    // app.get("/service/:type", ServiceApp.findByType);

    // app.post("/createservice", ServiceApp.createService);

    // app.post("/member", MemberApp.register);

    // app.get("/showmembers", MemberApp.findAll);

    // app.put("/updatepassword", MemberApp.updatePassword);

    // app.delete("/cancelmember", MemberApp.cancelMember);

    // app.get("/showrequests", RequestApp.findAll);

    // app.delete("/deleterequest", RequestApp.cancelRequest);


    // app.post("/addrequest", RequestApp.createRequest);

    // app.put("/updaterequest", RequestApp.updateRequest);

    // app.post("/service/:type/form", ServiceApp.createRequestByServiceType);

    // app.post("/service/:type/calculate", ServiceApp.calculateEmi);

    app.all('*', (req, res, next) => {
         const err = new Error(`Can't find ${req.originalUrl} on this server`);
         err.status = 'fail',
         err.statusCode = 404;
         next(err);
    })

    app.use((err, req, res, next) => {
        err.statusCode = err.statusCode || 500;
        err.status = err.status || "error";
        res.status(err.statusCode).json({
            status: err.status,
            statusCode:err.statusCode,
            message:err.message
        })
    })

};





