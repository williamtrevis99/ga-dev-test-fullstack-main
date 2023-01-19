const Router = require('@koa/router');
const router = new Router();

const lrProperty = require('./models/lrProperty.js');



/**
 * Retrieves entries with matching lrPropertyId
 * 
 * Returns 404 if not found.
 */
router.param('lrPropertyId', async (id, ctx, next) =>
{
	ctx.lrProperty = await new lrProperty({id: id}).fetch({withRelated: ['lrTransactions'], require: false});

	if(!ctx.lrProperty)
	{
		ctx.status = 404;
		return ctx.body = {error: true, msg: "LRProperty not found"};
	}
	return next();

})


/**
 * Route that queries for entry with matching property Id
 */
.get('/lrProperty/:lrPropertyId', async (ctx, next) => 
{	
	return ctx.body = {success: true, lrProperty: ctx.lrProperty.toJSON()};
})


/**
 * Retrieves entries with matching lrPropertyId
 * 
 * Returns 404 if not found.
 */
router.param('lrPropertyLocation', async (location, ctx, next) =>
{	
	ctx.lrProperty = await new lrProperty({street: location}).fetch({withRelated: ['lrTransactions'], require: false});

	if(!ctx.lrProperty) {
		ctx.lrProperty = await new lrProperty({outcode: location}).fetch({withRelated: ['lrTransactions'], require: false});
	}

	if(!ctx.lrProperty)
	{
		ctx.status = 404;
		return ctx.body = {error: true, msg: "LRProperty not found"};
	}
	return next();

})


/**
 * Route that queries for entry with matching property Id
 */
.get('/lrProperty/location/:lrPropertyLocation', async (ctx, next) => 
{	
	return ctx.body = {success: true, lrProperty: ctx.lrProperty.toJSON()};
})


module.exports = (app) =>
{
	app
	.use(router.routes())
	.use(router.allowedMethods());
};
