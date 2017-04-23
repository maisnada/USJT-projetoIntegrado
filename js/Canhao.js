

function Canhao(){

	this.animacao;

	this.projetil;
	
	this.angulo = 0;
	
	this.velocidadeInicialDisparo = 0;	
	
	this.renderizar = true;

	this.mouse;	

}
 
Canhao.prototype = {
	
	setProjetil:function(projetil){
		
		this.projetil = projetil;
	
	},
	
	setAnimacao:function(animacao){
		
		this.animacao = animacao;	
	},
	
	setMouse:function(mouse){
		
		this.mouse = mouse;
	
	},
	
	calcularAnguloDisparo:function(movimentoMouse){

		this.mouse.capturarPosicao(movimentoMouse);
	
		var tangente = 0;		
		var deslocamentoX = 0;
		var deslocamentoY = 0;		
			
		if(this.mouse.getPosicaoX() >= 20 && this.mouse.getPosicaoX() < 1000 && this.mouse.getPosicaoY() < 580 && this.mouse.getPosicaoY() > 10){
		
			deslocamentoX += this.mouse.getPosicaoX() - 20;
			
			deslocamentoY += 580 - this.mouse.getPosicaoY();
				
			tangente = deslocamentoY / deslocamentoX;

			this.angulo = Math.atan(tangente) * (180 / Math.PI);							
		}
		
	},
	
	setVelocidadeInicialDisparo:function(velocidade){
	
		this.velocidadeInicialDisparo = velocidade;
	},
	
	disparar:function(){
		
		this.projetil.realizarTrajetoria(this.angulo,this.velocidadeInicialDisparo);		
	},
	
	isRenderizar:function(){

		return this.renderizar;
	},	
	
	atualizar:function(){		
	
	},
	
	desenhar:function(context){
		
		context.font="16px Arial";
		context.fillStyle = 'white';
		context.fillText(this.angulo.toFixed(1) + "º",this.mouse.getPosicaoX() + 15,this.mouse.getPosicaoY() + 20);
						
		context.beginPath();
		context.rect(this.mouse.getPosicaoX() + 15, this.mouse.getPosicaoY() + 28,102,4);			
		context.lineWidth = 1;
		context.strokeStyle = 'white';
		context.stroke();
			
		context.beginPath();
		context.rect(this.mouse.getPosicaoX() + 15,this.mouse.getPosicaoY() + 28,this.velocidadeInicialDisparo,4);
		context.fillStyle = 'purple';
		context.fill();			
						
		context.drawImage(this.animacao,88,0,62,65,18,540,62,65);
			
		context.save();
				
			context.translate(0 ,565 + this.angulo - 60);
			
			context.rotate(-(this.angulo) * Math.PI / 180);
				
			context.drawImage(this.animacao,0,0,81,65, 0, 0,81,65);			
				
		context.restore();		
			
		context.drawImage(this.animacao,158,0,62,65, 5, 540,62,65);					
	
	}
		
}


