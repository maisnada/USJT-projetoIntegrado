
function Projetil(){	
		
	this.personagem;	
	
	this.gravidade = 10;
	this.velocidadeInicialHorizontal = 0;
	this.velocidadeInicialVertical = 0;
	this.alcance = 0;
	this.alturaMaxima = 0;
	this.tempoSubida = 0;		
	this.tempoTotal = 0;
	
	this.posicaoX = 0;
	this.posicaoY = 0;
	this.tempoInstantaneo = 0;
	
	this.ajustarTrajetoria = true;
	
	this.inerte = true;
		
	this.renderizar = true;
	
}

Projetil.prototype = {
	
	setPersonagem:function(personagem) {
		
		this.personagem	= personagem;	
	},
	
	isRenderizar:function(){

		return this.renderizar;
	},	
	
	realizarTrajetoria:function(angulo,velocidadeInicial){	
		
		var radianos = angulo * (Math.PI / 180);	
		
		this.velocidadeInicialHorizontal = velocidadeInicial * Math.cos(radianos);
		
		this.velocidadeInicialVertical = velocidadeInicial * Math.sin(radianos);		
		
		this.tempoSubida = this.velocidadeInicialVertical / this.gravidade;
		
		this.tempoTotal = 2 * this.tempoSubida;		
		
		this.alcance = this.velocidadeInicialHorizontal * this.tempoTotal;
		
		this.alturaMaxima = Math.pow(velocidadeInicial,2) * Math.pow(Math.sin(radianos),2) / (2 * this.gravidade);
		
		this.renderizar = true;
		
		this.inerte = false;		
	},	
	
	isInerte:function(){

		return this.inerte;
	},
	
	getPosicaoX:function(){

		return this.posicaoX;
	},
	
	getPosicaoY:function(){

		return this.posicaoY;
	},	

	atualizar:function(){
		
		if((this.tempoInstantaneo < this.tempoTotal)){			
		
			this.tempoInstantaneo += 0.1;
			
			var coeficienteA = 0;
			var coeficienteB = 0;
			var variavelLivre = 0;			
			
			coeficienteA = - (this.gravidade / 2);
					
			coeficienteB = this.velocidadeInicialVertical;
				
			this.posicaoX = this.velocidadeInicialHorizontal * this.tempoInstantaneo;
				
			this.posicaoY = coeficienteA * Math.pow(this.tempoInstantaneo,2) + (coeficienteB * this.tempoInstantaneo) + variavelLivre;
					
		}else{
			
			this.renderizar = false;
			
			this.inerte = true;
			
			this.ajustarTrajetoria = true;
			
			this.velocidadeInicialHorizontal = 0;
			this.velocidadeInicialVertical = 0;
			this.tempoSubida = 0;
			this.tempoTotal = 0;
			this.alcance = 0;
			this.alturaMaxima = 0;
		
			this.tempoInstantaneo = 0;		
			this.posicaoX = 0;	
			this.posicaoY = 0;			
		}	
	},
	
	desenhar:function(context){				
						
		context.save();			
			
			if(((580 - this.posicaoY) <= 580)){
			
				if(this.ajustarTrajetoria){							
								
					this.ajustarTrajetoria = false;

					context.translate((this.posicaoX + 20) - 60, (580 - this.posicaoY));					
						
					context.rotate(10 * (180 / Math.PI));						
						
					context.drawImage(this.personagem, 0 ,0, 60, 82);
					
					//depuração
					//context.rect(0, 0, 60, 82);					
					//context.stroke();
				
				}else{
										
					context.translate((this.posicaoX + 70) , (565 - this.posicaoY));

					context.rotate(10 * (180 / Math.PI) + (this.tempoInstantaneo / 10));					
						
					context.drawImage(this.personagem, 0 ,0, 60, 82);
						
					//depuração	
					//context.rect(0, 0, 60, 82);					
					//context.stroke();					
				}			
			
			}else if(!this.ajustarTrajetoria){
										
				context.translate((this.posicaoX + 70) , (565 - this.posicaoY));

				context.rotate(10 * (180 / Math.PI) + (this.tempoInstantaneo / 10));					
					
				context.drawImage(this.personagem, 0 ,0, 60, 82);
					
				//depuração	
				//context.rect(0, 0, 60, 82);					
				//context.stroke();					
			}
					
		context.restore();				
			
			
			/*
			//ponto A	
			context.beginPath();		
			context.fillStyle = 'red';		
			context.arc((this.posicaoX + 58), (580 - this.posicaoY)  , 3, 0.0 * Math.PI, 2.0 * Math.PI, false);		 
			context.fill();
					
			//ponto B
			context.beginPath();		
			context.fillStyle = 'purple';		
			context.arc((this.posicaoX + 24), (580 - this.posicaoY)  , 3, 0.0 * Math.PI, 2.0 * Math.PI, false);		 
			context.fill();
					
			//ponto C
			context.beginPath();		
			context.fillStyle = 'Brown';		
			context.arc((this.posicaoX + 40), (540 - this.posicaoY)  , 3, 0.0 * Math.PI, 2.0 * Math.PI, false);		 
			context.fill();			
			*/
	
			
	
	}
}


