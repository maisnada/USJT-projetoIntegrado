
function Colisao(alvo,projetil){

	this.alvo = alvo;
	
	this.projetil = projetil;
	
	this.acertouPontoA = false;
	this.acertouPontoB = false;
	this.acertouPontoC = false;
	
}

Colisao.prototype = {

	isAcertou:function(){

		return this.acerto;
	},	
	
	detectar:function(){
		
		if(((this.projetil.getPosicaoX() + 58) > this.alvo.getPosicao()) && ((this.projetil.getPosicaoX() + 58) <= (this.alvo.getPosicao() + this.alvo.getAreaHorizontal())) && ((580 - this.projetil.getPosicaoY()) >= 490) && ((580 - this.projetil.getPosicaoY()) <= 520)){									
					
			this.acertouPontoA = true;			
		}						
					
		if(((this.projetil.getPosicaoX() + 24) > this.alvo.getPosicao()) && ((this.projetil.getPosicaoX() + 24) <= (this.alvo.getPosicao() + this.alvo.getAreaHorizontal())) && ((580 - this.projetil.getPosicaoY()) >= 490) && ((580 - this.projetil.getPosicaoY()) <= 520)){
						
			this.acertouPontoB = true;
		}							
						
		if(((this.projetil.getPosicaoX() + 40) > this.alvo.getPosicao()) && ((this.projetil.getPosicaoX() + 40) <= (this.alvo.getPosicao() + this.alvo.getAreaHorizontal())) && ((540 - this.projetil.getPosicaoY()) >= 490)){
						
			this.acertouPontoC = true;					
		}			
			
		if((this.acertouPontoA && this.acertouPontoB && this.acertouPontoC)){ 
						
			return true;			
		}
		
		return false;
		
	}		
}
