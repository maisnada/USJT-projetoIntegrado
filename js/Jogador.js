
function Jogador(){
	
	this.nickName = "";
}

Jogador.prototype = {
	
	setNickName:function(nickName) {
		
		this.nickName = nickName;		
	},
	
	getNickName:function(){
		
		return this.nickName;		
	}	
}
