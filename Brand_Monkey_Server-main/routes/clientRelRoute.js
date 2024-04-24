const express = require("express");
const router = express.Router();

const employeeController = require('../controllers/employee');
const adminController = require('../controllers/admin');
const superAdminController = require('../controllers/superAdmin');
const taskController = require('../controllers/taskController');

const { fileMulter } = require('../multer/multerFile');
const { imageMulter } = require('../multer/multerImg');
const { isSuperAdmin, isAdmin } = require("../middleware/is_auth");

router.post('/csvClients',fileMulter, adminController.uploadClientBulk);
router.post('/addClient',isSuperAdmin,imageMulter, superAdminController.addClient); //completed
router.post('/submitTicket', adminController.assignTicket);
router.post('/acknowledgeTicket', adminController.acknowlegdeTicketResolve);
router.post('/addmom/:id', adminController.createMomEntry);

router.put('/addservicefield',isSuperAdmin, superAdminController.addFieldsToClients); //completed
router.put('/editservicefield',isSuperAdmin, superAdminController.editFieldsInClients); //completed
router.put('/deleteservicefield',isSuperAdmin, superAdminController.deleteFieldsFromClients); //completed
router.put("/editClient/:id",isSuperAdmin,imageMulter, superAdminController.editClient); //completed
router.put("/editEmployee/:id",isSuperAdmin,imageMulter, superAdminController.editEmployee); //completed
router.put("/clientAllocation/:id",isSuperAdmin, superAdminController.storeClientDistributionData); //completed
router.put('/clienttype/:id',isSuperAdmin, superAdminController.updateClientType); //completed
router.put('/addReview', adminController.addEmployeeReview);

router.get('/getClientCSV', adminController.downloadCsvClients);
router.get('/getEmployeesCSV', adminController.downloadCsvEmployees);
router.get('/getEmployeesSheet/:id', taskController.downloadSingleEmployeeSheet);
router.get('/getAllEmployeesSheet', taskController.downloadAllEmployeeData);
router.get('/getAllEmployeesHit', taskController.downloadAllEmployeeHit);

router.get('/getClients', isAdmin, employeeController.getClient); //completeld authorized
router.get('/getmom/:id', adminController.getMomEntriesByClientId);
router.get('/getOneClient/:id', employeeController.getOneClient);
router.get('/getTicket', employeeController.getTicket);
router.get('/employeeReviews/:id', adminController.getEmployeeReviews);
router.get('/employeeReviewsShow/:id', adminController.getEmployeeReviewsArray);
router.get('/getOneClientOrEmployeeTickets', adminController.getTicketsForClient);
router.get('/getEmployeeTickets/:id', employeeController.getEmployeeTicket);
router.get('/getResolvedEmployeeTickets', adminController.getResolvedEmployeeTickets);
router.get('/getOneTicket/:id', employeeController.getOneTicket);
router.get('/getDashboardAdmin', adminController.getDashBoardAdmin);
router.get('/getDashboardEmployee/:id', employeeController.getDashBoardEmployee);

router.delete('/acknowlegdeTicketResolve/:id', employeeController.dissolveTicket);
router.delete('/deleteEmployee/:id', isSuperAdmin, superAdminController.deleteEmployeeData); //completed
router.delete('/deleteClient/:id', isSuperAdmin, superAdminController.deleteClientData); //completed
router.delete('/deleteReviews/:id', adminController.deleteReviewData);
router.delete('/deleteClientAllot/:id', isSuperAdmin,superAdminController.deleteClientAllot); //completed
router.delete('/deleteMOM/:id', adminController.deleteMOM);

module.exports = router;