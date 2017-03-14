const express  = require('express');
const router   = express.Router();
var Categories = require('../models/Categories');

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

module.exports = router;