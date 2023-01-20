const Router = require('@koa/router');
const router = new Router();

const lrProperty = require('./models/lrProperty.js');


/**
 * Route that returns transactions filtered 
 * by ID, POSTCODE, or STREET of House.
 */

router.get('/lrProperty/transactions', async (ctx, next) => 
{		
	let queryType;

	if ('id' in ctx.query) queryType = 'id'
	if ('postcode' in ctx.query) queryType = 'postcode'
	if ('street' in ctx.query) queryType = 'street'

	// if no query params included
	if (!queryType) return ctx.body = {error: true, msg: "No Query Params provided"};

	if (queryType === 'id') {
		ctx.lrProperty = await lrProperty
		.where({id: ctx.query.id})
		.fetchAll({withRelated: ['lrTransactions'], require: false});

	} else if (queryType === 'street') {
		ctx.lrProperty = await lrProperty
		.where({street: ctx.query.street})
		.fetchAll({withRelated: ['lrTransactions'], require: false})

	} else if (queryType === 'postcode') {

		let splitArrary = ctx.query.postcode.split(' ')

		if (splitArrary.length !== 2) {
			return ctx.body = {error: true, msg: "Invalid Postcode", lrProperty: []};
		}

		ctx.lrProperty = await lrProperty
		.where({outcode: splitArrary[0]})
		.where({incode: splitArrary[1]})
		.fetchAll({withRelated: ['lrTransactions'], require: false})
	}

	// if no properties returned
	if(ctx.lrProperty.length === 0)
	{
		ctx.status = 404;
		return ctx.body = {error: true, msg: "No Properties found", lrProperty: []};
	}

	return ctx.body = {error: false, lrProperty: ctx.lrProperty.toJSON()};
})


module.exports = (app) =>
{
	app
	.use(router.routes())
	.use(router.allowedMethods());
};
