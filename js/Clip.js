
function Clip(context){
	
	this.context = context;	
	
	this.tempo = 0;	
	
	this.recorteX = 0;
	this.recorteY = 0;
	
	this.recorte = 0;
	
	this.posicao = 0;
	
	this.animacao;
	
	this.renderizar = true;
	
	
}

Clip.prototype = {
	
	
	setAnimacao:function(animacao){
		
		this.animacao = animacao;	
	},
	
	setPosicao:function(posicao){
		
		this.posicao = posicao;	
	},
	
	setRecorteX:function(recorteX){
		
		this.recorteX = recorteX;
		this.recorte = recorteX;
	},
	
	setRecorteY:function(recorteY){
		
		this.recorteY = recorteY;	
	},
	
	
	isRenderizar:function(){

		return this.renderizar;
	},
	
	setRenderizar:function(renderizar){

		this.renderizar = renderizar;
	},

	atualizar:function(){
		
		if(this.recorte < this.animacao.width){
		
			this.tempo += 1;
			
			if(this.tempo > 100){
				
				this.recorte += this.recorteX;
				
				this.tempo = 0;	
				
			}
		
		}else{
			
			this.recorte = this.recorteX;
			
			this.tempo = 0;	
			
			this.renderizar = false;
			
		}
		
		
		
	},
	
	desenhar:function(){
		
		
		
		this.context.drawImage(this.animacao,this.recorte,0,this.recorteX,this.recorteY, 400, 480,this.recorteX,this.recorteY);
		
		
			
			
		
	}
	
		
}
