/****************************** global init ********************/
const port = 3000
const express = require('express')
const app = express()



/****************************** view engine *******************/
app.set('view engine', 'ejs')
app.set('views', './views')



/****************************** middleware ********************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



/***************************** ruoter init ********************/
app.use('/', express.static('./public'))

app.get('/about', (req, res, next) => {
  const title = 'About Me'
	const file = 'about'
	const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis possimus, laboriosam maiores earum quos aperiam totam impedit vitae numquam minus optio doloribus nam sapiente vero praesentium dignissimos exercitationem maxime.'
  res.render('pf/about', {title, file, content})
})

app.get('/pf', (req, res, next) => {
  const title = 'Portfolio'
	const file = 'pf'
	const lists = [
		{title : 'PF_01', src: 'f1.jpg'},
		{title : 'PF_02', src: 'f2.jpg'},
		{title : 'PF_03', src: 'f3.jpg'},
	]
  res.render('pf/pf', {title, file, lists})
})

app.get('/team', (req, res, next) => {
  const title = 'Team Information'
	const subTitle = '팀원을 소개합니다.'
	const file = 'team'
	const lists = [
		{title : 'CEO', src: 'team1.jpg'},
		{title : 'CTO', src: 'team2.jpg'},
		{title : 'Engineer', src: 'team3.jpg'},
		{title : 'Designer', src: 'team4.jpg'},
	]
  res.render('pf/team', {title, subTitle, file, lists})
})



/**************************** sever function ******************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })


