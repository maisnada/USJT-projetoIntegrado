
function Mouse(canvas){

	this.canvas = canvas;
	this.posicaoX = 0;
	this.posicaoY = 0;
}

Mouse.prototype = {
	
	capturarPosicao:function(movimentoMouse){
		
		var areaVisivel = this.canvas.getBoundingClientRect();	
		
		this.posicaoX = movimentoMouse.clientX - areaVisivel.left;
		this.posicaoY = movimentoMouse.clientY - areaVisivel.top;
		
		//depuração
		//console.log("mouse posição x: " + this.posicaoX);
		//console.log("mouse posição y: " + this.posicaoY);
		
	},
	
	getPosicaoX:function(){
		
		return this.posicaoX;
	},
	
	getPosicaoY:function(){
		
		return this.posicaoY;
	}
}



