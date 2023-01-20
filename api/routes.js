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
	if (!queryType) return ctx.body = {success: false};

	if (queryType === 'id') {
		ctx.lrProperty = await new lrProperty({id: ctx.query.id}).fetch({withRelated: ['lrTransactions'], require: false});
	} else if (queryType === 'street') {
		ctx.lrProperty = await new lrProperty({street: ctx.query.street}).fetch({withRelated: ['lrTransactions'], require: false});
	} else if (queryType === 'postcode') {
		ctx.lrProperty = await new lrProperty({incode: ctx.query.postcode}).fetch({withRelated: ['lrTransactions'], require: false});
	}

	if(!ctx.lrProperty)
	{
		ctx.status = 404;
		return ctx.body = {error: true, msg: "No Properties found"};
	}

	return ctx.body = {success: true, lrProperty: ctx.lrProperty.toJSON()};
})


module.exports = (app) =>
{
	app
	.use(router.routes())
	.use(router.allowedMethods());
};
