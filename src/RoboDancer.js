var RoboDancer = function (top, left, timeBetweenSteps) {
Dancer.call(this,top, left, timeBetweenSteps)
var obj = {
		0 : "https://4.bp.blogspot.com/-rIZVAl1inBw/WEqOQxBn99I/AAAAAAAEuqU/gtsg1qxFIxg1k29VgavnArTdI0toUh85ACLcB/s1600/AW328916_08.gif",
		1 : "https://2.bp.blogspot.com/-ztv8BcdPQpI/WEqOPjy_CmI/AAAAAAAEup8/e35JaOBGUwst6W50I1MC5UIzkH0qT2hHwCLcB/s1600/AW328916_02.gif",
		2 : "https://4.bp.blogspot.com/-b7KdBjMsJaM/WEqOPXR1ubI/AAAAAAAEup0/_9SfB_-WEiYy-9NsTXasIZGsNOPm_CTKQCLcB/s1600/AW328916_00.gif",
		3 : "https://storage.googleapis.com/media.helloumi.com/channels/0_F2nokNs.gif",
		4 : "https://4.bp.blogspot.com/-S118tKNffY4/WKDv5yXLn4I/AAAAAAAF5as/1u8vpY8f8lkzKmHvhLUTPv04ZUzzotu9QCLcB/s1600/AW376285_19.gif"
	}
	this.$node = $('<div class="robo_dancer"><img class="robo" src = "'+ obj[Math.floor(Math.random() * 5)] +'"/></div>')
	this.setPosition(top, left)
}

RoboDancer.prototype = Object.create(Dancer.prototype)
RoboDancer.prototype.constructor = RoboDancer
