
const core = require('./core/core');
require('./controllers/jobs-listings');
require('./controllers/applications');
require('./controllers/account');
require('./controllers/storefront');
const port = process.env.PORT || 4000

// start server from core import
core.app.listen(port, () => { console.log('server started on port 4000') })

