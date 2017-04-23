
function Partida(fases,motor,audios,document){
	
	this.fases = fases;
	
	this.motor = motor;	
	
	this.audios = audios;
	
	this.document = document;
	
	this.canhao = new Canhao();
	
	this.faseAtual = 0;

	this.tentativas = 0;
	
	this.totalArremessos = 0;
	
	this.renderizouIntroducao = false;
	
	this.renderizouEncerramento = false;
	
	this.renderizar = true;
	
	this.colisao;

	this.encerramentoPartida = new Transicao();	
	
}

Partida.prototype = {
	
	getFaseAtual:function(){
	
		return this.fases[this.faseAtual];		
	},
		
	getCanhao:function(){
		
		return this.canhao;	
	},
	
	dispararCanhao:function(){
			
		if(this.getFaseAtual().getProjetil().isInerte() && this.renderizouIntroducao && !this.getFaseAtual().getAlvo().isAlvejado() && !this.renderizouEncerramento){	
		
		   this.audios["canhao"].play();
			
			this.totalArremessos++;
			
			 this.document.getElementById("quantidadeArremessos").innerHTML = this.totalArremessos;
			 
			 this.document.getElementsByClassName("tentativa")[this.tentativas].style = "-webkit-filter: grayscale(100%);";
			
			this.tentativas++;

			this.canhao.disparar();
		
			this.motor.novoSprite(this.getFaseAtual().getProjetil());		
		}		
	},
	
	isRenderizar:function(){

		return this.renderizar;
	},
	
	setEncerramentoPartida:function(encerramentoPartida){

		this.encerramentoPartida = encerramentoPartida;
	},
	
	iniciar:function(){
	
	if(this.faseAtual < 6){
	
		var vidas = this.document.getElementsByClassName("tentativa");
		
		for(var i = 0; i < vidas.length; i++){
		
			this.document.getElementsByClassName("tentativa")[i].style = "-webkit-filter: grayscale(0%);";
		
		}
		
		this.renderizouIntroducao = false;
		
		this.renderizouEncerramento = false;
		
		console.log("iniciar ok");
		
		this.document.getElementsByClassName("fase")[this.faseAtual].style = "-webkit-filter: grayscale(0%);";
		
		this.colisao = new Colisao(this.getFaseAtual().getAlvo(),this.getFaseAtual().getProjetil());
		
		this.canhao.setProjetil(this.getFaseAtual().getProjetil());
		
		this.motor.limpar();
		
		this.motor.novoSprite(this);
		this.motor.novoSprite(this.canhao);				
		this.motor.novoSprite(this.getFaseAtual().getAlvo());
		this.motor.novoSprite(this.getFaseAtual().getIntroducao());	

	}else{

		this.motor.limpar();
		
		this.motor.novoSprite(this.encerramentoPartida);
	}	
	
	
	},
	
	reiniciar:function(){
		
		if(this.tentativas == 3 && this.getFaseAtual().getProjetil().isInerte() && !this.getFaseAtual().getAlvo().isAlvejado()){		
		 
			this.getFaseAtual().getEncerramento().setTexto(this.getFaseAtual().proximaFraseProfessor());
			
			this.renderizouEncerramento = true;
		
			this.motor.novoSprite(this.getFaseAtual().getEncerramento());
			
			this.tentativas = 0;
		
		}else if(!this.getFaseAtual().getEncerramento().isRenderizar()){
						
			this.getFaseAtual().getEncerramento().setRenderizar(true);
			
			this.renderizouEncerramento = false;
			
			return true;						
		}		

		return false;
				
	},	
	
	analisarColisao:function(){
		
		if(!this.getFaseAtual().getProjetil().isInerte()){
						
			if(this.colisao.detectar()){

				//console.log("acertou o alvo");
				
				this.tentativas = 0;

				this.getFaseAtual().getAlvo().atingido();				
			}			
		
		}else if(!this.getFaseAtual().getAlvo().isRenderizar() && this.getFaseAtual().getAlvo().isAlvejado()){				
				
			return true;			
		}
		
		return false;		
	},

	atualizar:function(){
		
		if(this.analisarColisao()){
		
			this.document.getElementsByClassName("fase")[this.faseAtual].style = "-webkit-filter: grayscale(100%);";
						
			this.faseAtual++;
			
			if(this.faseAtual < 6){
			
				this.document.getElementsByClassName("fase")[this.faseAtual].style = "-webkit-filter: grayscale(0%);";
			
			}
			
			this.iniciar();			
		}	
		
		if(this.reiniciar()){			
			
			this.iniciar();		
		}	
		
		if(!this.getFaseAtual().getIntroducao().isRenderizar()){
						
			this.renderizouIntroducao = true;
			
		}		
		
	},
	
	desenhar:function(context){		
	
		context.drawImage(this.getFaseAtual().getCenario(), 0, 0, 1120, 606);		
	}

	
	
}

