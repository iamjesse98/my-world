const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'my World', condition: false })
})

/* GET users listing. */
router.get(`/smile`, (req, res, next) => {
	res.send(`
		<body style = "background: deepskyblue; color: #fff;">
			<p style = "margin-left: 20vw;margin-top: 20vh;font: 25vh 'Lucida Grande', Helvetica, Arial, sans-serif;">;)<p>
		</body>
		`)
})

module.exports = router