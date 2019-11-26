var BananaDancer = function (top, left, timeBetweenSteps) {
	// body...

	Dancer.call(this,top, left, timeBetweenSteps)
	var obj = {
		0 : "https://thumbs.gfycat.com/SafeSimilarIrishwaterspaniel-size_restricted.gif",
		1 : "https://thumbs.gfycat.com/SelfishZanyBluetickcoonhound-size_restricted.gif",
		2 : "https://i.pinimg.com/originals/4e/4c/7c/4e4c7c0bdee2c07b56a459ebf9d14fa8.gif",
		3 : "https://thumbs.gfycat.com/DenseEllipticalGalapagosdove-size_restricted.gif",
		4 : "https://pic.chinesefontdesign.com/uploads/2017/04/chinesefontdesign.com_2017-04-25_19-06-43.gif"
	}
	this.$node = $('<div class="banana_dancer"><img class="banana" src = "'+ obj[Math.floor(Math.random() * 5)] +'"/></div>')
	console.log(obj[Math.floor(Math.random() * 5)])
	this.setPosition(top, left)
}

BananaDancer.prototype = Object.create(Dancer.prototype)
BananaDancer.prototype.constructor = BananaDancer

// BananaDancer.prototype.oldStep = BananaDancer.prototype.step

// BananaDancer.prototype.step = function(){
// 	this.oldStep()
// 	//this.$node.toggle();
// }