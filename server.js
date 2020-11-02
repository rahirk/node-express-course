const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(8000,function(){
	console.log("server is running")
})

const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]
app.get('/users', function(req,res){
	res.json({
		succes: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})

})

app.get('/users/:id', function(req,res){
	console.log(req.params.id)
	res.json({
		succes: true,
		message: 'successfully got users. Nice!',
		users: req.params.id
	})

})

app.post('/login', function(req,res){
	const username=req.body.username;
	const password=req.body.password;

	const mockUsername="billyTheKid";
	const mockPassword="superSecret";

	if(username==mockUsername && password==mockPassword){
		res.json({
			success:true,
			message:'password and username match!',
			tocken:'encrypted token goes here'
		})
	} else {
		res.json({
			success:false,
			message:'password and username do not match'
		})
	}
})


