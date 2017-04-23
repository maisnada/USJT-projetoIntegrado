
function Alvo(){	
	
	this.animacao;
	this.animacaoAlvejado;
	
	this.grauDificuldade;
	
	this.posicao = 200;	
	this.areaHorizontal = 120;
	
	this.efeito;
	
	this.tempoEfeito = 0;
	
	this.direcao = "direita";
	
	this.alvejado = false;
	
	this.renderizar = true;

	
}

Alvo.prototype = {
	
	setAnimacao:function(animacao){
		
		this.animacao = animacao;	
	},
	
	setAnimacaoAlvejado:function(animacaoAlvejado){
		
		this.animacaoAlvejado = animacaoAlvejado;	
	},	
	
	setEfeito:function(efeito){
		
		this.efeito = efeito;	
	},	
			
	getPosicao:function(){
		
		return this.posicao;
	
	},
	
	getAreaHorizontal:function(){
		
		return this.areaHorizontal;
	
	},
	
	setGrauDificuldade:function(grauDificuldade){
				
		switch(grauDificuldade){
			
			case "facil":						
						this.grauDificuldade = 1;
				
						break;
			
			case "medio":
						this.grauDificuldade = 2;
				
						break;
			
			case "dificil":
						this.grauDificuldade = 3;				
				
						break;		
		}			
	},

	atingido:function(){

		this.alvejado = true;
	},
	
	isAlvejado:function(alvejado){

		return this.alvejado;
	},	
	
	isRenderizar:function(){

		return this.renderizar;
	},
	
	atualizar:function(){
		
		if(!this.alvejado){
			
			if(this.direcao == "direita"){				
				
				this.posicao += this.grauDificuldade;
				
				if(this.posicao > 945){
						
					this.direcao = "esquerda";
				}
				
			}else{				
				
				this.posicao -= this.grauDificuldade;
				
				if(this.posicao == 200){
						
					this.direcao = "direita";
				}
			}			
		
		}else{
			
			this.posicao += 2;
			
			this.tempoEfeito += 2;
			
			if(this.posicao > 1100){
				
				this.renderizar = false;
			}			
		}	
	},	
	
	desenhar:function(context){
		
		var milisec = new Date().getMilliseconds();		
						
		if(!this.isAlvejado()){					
						
			if(this.direcao == "direita"){
				
				if((milisec % 2) == 0 ){
					
					context.drawImage(this.animacao,0,0,150,94, this.posicao + 15, 490,150,94);
					
				}else{
					
					context.drawImage(this.animacao,300,0,150,94, this.posicao + 15, 490,150,94);					
				}

			}else{
				
				if((milisec % 2) == 0 ){					
					
					context.drawImage(this.animacao,450,0,150,94, this.posicao -44, 490,150,94);
					
				}else{
					
					context.drawImage(this.animacao,600,0,150,94, this.posicao -44, 490,150,94);					
				}			
			}
			
			/*depuração
			context.beginPath();	
			context.strokeStyle = 'blue';
			context.lineWidth = 1;
			context.rect(this.posicao, 490, this.areaHorizontal, 20);				
			context.stroke();*/	
		
		}else{		
						
			if(this.tempoEfeito <= 20){ 
					
				context.drawImage(this.efeito, this.posicao, 452, 150, 128);
			
			}else{			
		
				context.drawImage(this.animacaoAlvejado, this.posicao, 458, 150, 122);			
			}			
		}	
	}		
}
