const Router = require('@koa/router');
const router = new Router();

const lrProperty = require('./models/lrProperty.js');

router.param('lrPropertyId', async (id, ctx, next) =>
{
	ctx.lrProperty = await new lrProperty({id: id}).fetch({withRelated: ['lrTransactions'], require: false});

	if(! ctx.lrProperty)
	{
		ctx.status = 404;
		return ctx.body = {error: true, msg: "LRProperty not found"};
	}

	return next();

})
.get('/', async (ctx, next) => 
{
	return ctx.body = "I'm alive!";
})
.get('/lrProperty/:lrPropertyId', async (ctx, next) => 
{
	return ctx.body = {success: true, lrProperty: ctx.lrProperty.toJSON()};
});


module.exports = (app) =>
{
	app
	.use(router.routes())
	.use(router.allowedMethods());
};
