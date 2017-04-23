
function Transicao(){	
	
	this.animacao;
	this.tempo = 300;
	
	this.texto;
	
	this.renderizar = true;
	
}

Transicao.prototype = {
	
	setAnimacao:function(animacao){

		this.animacao = animacao;
	},

	setTempo:function(tempo){

		this.tempo = tempo;
	},
	
	setTexto:function(texto){

		this.texto = texto;
	},
	
	isRenderizar:function(){

		return this.renderizar;
	},
	
	setRenderizar:function(renderizar){

		this.renderizar = renderizar;
	},
	
	atualizar:function(){
		
		this.tempo--;		
		
		if(this.tempo < 0){
			
			this.tempo = 300;
			
			this.renderizar = false;
		}
	},
	
	desenhar:function(context){
		
		if(this.animacao){
		
			context.drawImage(this.animacao, 0, 0, 1120, 606);			
			
			context.font="38px Arial Black";
			context.fillStyle = 'black';
				
			if(this.texto){			
				
				var linha = this.texto.split(";");		
				
				context.fillText(linha[0] ,540,250);
				
				if(linha[1]){
					
					context.fillText(linha[1] ,540,310);
				}
				
				if(linha[2]){
					
					context.fillText(linha[2] ,540,370);
				}
							
			}

		}else{
			
			var linha = this.texto.split(";");

			context.font="36px Arial Black";
			
			context.fillStyle = 'white';
				
			context.fillText(linha[0] ,100,250);
				
			if(linha[1]){
				
				context.fillText(linha[1] ,100,310);
			}
				
			if(linha[2]){
				
				context.fillText(linha[2] ,100,360);
			}
			
		}	
		
					
		
	}
	
		
}
