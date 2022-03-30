import app from './server'

import './lib/database'

app.listen(app.get('PORT'), () => console.log(`Server deployed on port ${app.get('PORT')}`))