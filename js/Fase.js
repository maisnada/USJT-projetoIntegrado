
function Fase(){	
	
	this.introducao = new Transicao();
	this.encerramento = new Transicao();
	this.concluida = new Transicao();
	
	this.alvo = new Alvo();
	
	this.projetil = new Projetil();
	
	this.cenario;
	
	this.frasesProfessor = [];
	
	this.fraseAtualProfessor = 0;
	
	this.renderizar = true;
	
	
}

Fase.prototype = {
	
	getIntroducao:function(){

		return this.introducao;
	},
	
	getEncerramento:function(){

		return this.encerramento;
	},
	
	getConcluida:function(){

		return this.concluida;
	},	
	
	getProjetil:function(){

		return this.projetil;
	},			

	getAlvo:function(){
		
		return this.alvo;	
	},

	setCenario:function(cenario){
		
		this.cenario = cenario;	
	},

	getCenario:function(){
		
		return this.cenario;	
	},
	
	adicionarFraseProfessor:function(frase){
		
		this.frasesProfessor.push(frase);	
	},	
	
	proximaFraseProfessor:function(){
		
		this.fraseAtualProfessor++;
		
		if(this.fraseAtualProfessor > 2){
			
			this.fraseAtualProfessor = 0;
		}
		
		return this.frasesProfessor[this.fraseAtualProfessor];		
	}		
}
