const express = require('express');
const routes = express.Router();

const AcquisitionController = require('./controllers/AcquisitionController');
const CustomerController = require('./controllers/CustomerController');
const ProductController = require('./controllers/ProductController');
const ProviderController = require('./controllers/ProviderController');
// const SaleController = require('./controllers/SaleController'); 

// AcquisitionController

routes.get('/acquisitions', AcquisitionController.index);
routes.get('/acquisitions/:id', AcquisitionController.show);
routes.post('/acquisitions', AcquisitionController.store); 
routes.put('/acquisitions/:id', AcquisitionController.update);
routes.delete('/acquisitions/:id', AcquisitionController.destroy); 

// CustomerController

routes.get('/customers', CustomerController.index);
routes.get('/customers/:id', CustomerController.show);
routes.post('/customers', CustomerController.store); 
routes.put('/customers/:id', CustomerController.update);
routes.delete('/customers/:id', CustomerController.destroy);

// ProductController

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store); 
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

// ProviderController 

routes.get('/providers', ProviderController.index);
routes.get('/providers/:id', ProviderController.show);
routes.post('/providers', ProviderController.store); 
routes.put('/providers/:id', ProviderController.update);
routes.delete('/providers/:id', ProviderController.destroy);

// SaleController

// COMENTADO ATÉ PROGRAMAR 'Sales' E 'SalesController'

// routes.get('/sales', SaleController.index);
// routes.get('/sales/:id', SaleController.show);
// routes.post('/sales', SaleController.store); 
// routes.put('/sales/:id', SaleController.update);
// routes.delete('/sales/:id', SaleController.destroy);

module.exports = routes;