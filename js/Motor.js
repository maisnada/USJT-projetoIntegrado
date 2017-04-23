
function Motor(canvas){
	
	this.canvas = canvas;
	
	this.context = this.canvas.getContext('2d');

	this.sprites = [];
	
	this.ligado = false;
}

Motor.prototype = {

	novoSprite: function(sprite){		
		
		this.sprites.push(sprite);
		
	},
	
	ligar: function(){
		
		this.ligado = true;
		
		this.proximoFrame();
	
	},	
		
	desligar: function(){
		
		this.ligado = false;
	},
	
	limpar: function(){
		
		this.sprites.splice(0,this.sprites.length);
		
	},
	
	proximoFrame: function(){
		
		if (this.ligado){
		
			for (var i in this.sprites){
			
				this.sprites[i].atualizar();
							
				if(!this.sprites[i].isRenderizar()){									
					
					if (i > -1){
						
						this.sprites.splice(i, 1);
					}
				}			
				
			}

			for (var i in this.sprites){
				
				if(this.sprites[i].isRenderizar()){							
					
					this.sprites[i].desenhar(this.context);				
				}			
			}
		
			var animacao = this;
				
				requestAnimationFrame(function(){
				
				animacao.proximoFrame();
			});
		
		}else{
			
			return false;
		}
	}	
}

