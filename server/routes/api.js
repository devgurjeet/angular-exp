const express  = require('express');
const router   = express.Router();

var Categories    = require('../models/Categories');
var DailyExpenses = require('../models/DailyExpenses');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/*Get all the Categories */
router.get('/categories', (req, res) => {
  	Categories.find(function(err, categories) {
	    if (err){
	    	res.send(err);	
	    }else{
	    	res.json(categories);	
	    } 	    
	});
});

/* Add new Category. */
router.post('/categories', (req, res) => {
  	var categories = new Categories();

  	categories.name        = req.body.name;
	categories.description = req.body.description;

	categories.save( function(err) {
		if(err) res.send(err);

		res.json({message: "Category Created!"});
	});
});


/*Get Single the Category */
router.get('/categories/:category_id', (req, res) => {
  	Categories.findById(req.params.category_id, function(err, User) {
		if (err) {
		    res.send(err);
		} else {
			res.json(User);
		}
	});
});

/*delete category */
router.delete('/categories/:category_id', (req, res) => {

	console.log(req.params.category_id)

  	Categories.remove({
        _id: req.params.category_id
    }, function(err, categories) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
	});
});

/*========================= Daily Expense Section ============================*/
/*Get all the Daily Expenses */
router.get('/expenses', (req, res) => {
  	DailyExpenses.find(function(err, dailyExpenses) {
	    if (err){
	    	res.send(err);	
	    }else{
	    	res.json(dailyExpenses);	
	    } 	    
	});		
});

/* Add new daily Expense. */
router.post('/expenses', (req, res) => {
  	var dailyExpenses = new DailyExpenses();

  	dailyExpenses.title       = req.body.title;
	dailyExpenses.amount      = req.body.amount;
	dailyExpenses.date        = req.body.date;
	dailyExpenses.description = req.body.description;
	dailyExpenses.category 	  = req.body.category;

	dailyExpenses.save( function(err) {
		if(err) res.send(err);

		res.json({message: "Expense added!"});
	});
});

/*Get Single the Category */
router.get('/expenses/:expense_id', (req, res) => {
  	DailyExpenses.findById(req.params.expense_id, function(err, User) {
		if (err) {
		    res.send(err);
		} else {
			res.json(User);
		}
	});
});

/*delete category */
router.delete('/expenses/:expense_id', (req, res) => {

	DailyExpenses.remove({
        _id: req.params.expense_id
    }, function(err, expenses) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
	});
});


/*============================================================================*/

module.exports = router;