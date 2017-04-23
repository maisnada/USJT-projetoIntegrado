function Jogo(areaCanvas,document){
	
	this.motor = new Motor(areaCanvas);
	
	this.document = document;
	
	this.imagens = new Array();
	
	this.audios = new Array();
	
	this.imagensCarregadas = 0;
	
	this.fases = new Array();
	
	this.partida;
	
}

Jogo.prototype = {
	
	carregarImagens:function(){
				
		this.imagens = {
			canhao:   	 	  		  		'img_canvas/canhao.png',			
			
			cenarioPrimeiraFase:      'img_canvas/cenarioFase1.jpg',			
			projetilPrimeiraFase:     'img_canvas/projetilFase1.png',			
			alvoPrimeiraFase:   	  'img_canvas/alvoFase1.png',			
			alvoPrimeiraFaseAlvejado: 'img_canvas/alvejadoFase1.png',
			alvoPrimeiraFaseEfeito:   'img_canvas/sangue.png',			
			introducaoPrimeiraFase:   'img_canvas/introFase1.jpg',
			encerramentoPrimeiraFase: 'img_canvas/encerraFase1.jpg',
			
			cenarioSegundaFase:       'img_canvas/cenarioFase2.jpg',
			projetilSegundaFase:      'img_canvas/projetilFase2.png',
			alvoSegundaFase:   	 	  'img_canvas/alvoFase2.png',
			alvoSegundaFaseAlvejado:  'img_canvas/alvejadoFase2.png',
			alvoSegundaFaseEfeito:    'img_canvas/sangue.png',			
			introducaoSegundaFase:    'img_canvas/introFase2.jpg',
			encerramentoSegundaFase:  'img_canvas/encerraFase2.jpg',
			
			cenarioTerceiraFase:      'img_canvas/cenarioFase3.jpg',
			projetilTerceiraFase:     'img_canvas/projetilFase3.png',
			alvoTerceiraFase:   	  'img_canvas/alvoFase3.png',
			alvoTerceiraFaseAlvejado: 'img_canvas/alvejadoFase3.png',
			alvoTerceiraFaseEfeito:   'img_canvas/agua.png',			
			introducaoTerceiraFase:   'img_canvas/introFase3.jpg',
			encerramentoTerceiraFase: 'img_canvas/encerraFase3.jpg',
			
			cenarioQuartaFase:        'img_canvas/cenarioFase4.jpg',
			projetilQuartaFase:       'img_canvas/projetilFase4.png',
			alvoQuartaFase:   	      'img_canvas/alvoFase4.png',
			alvoQuartaFaseAlvejado:   'img_canvas/alvejadoFase4.png',
			alvoQuartaFaseEfeito:     'img_canvas/sangue.png',			
			introducaoQuartaFase:     'img_canvas/introFase4.jpg',
			encerramentoQuartaFase:   'img_canvas/encerraFase4.jpg',
			
			cenarioQuintaFase:        'img_canvas/cenarioFase5.jpg',
			projetilQuintaFase:       'img_canvas/projetilFase5.png',
			alvoQuintaFase:   	 	  'img_canvas/alvoFase5.png',
			alvoQuintaFaseAlvejado:   'img_canvas/alvejadoFase5.png',
			alvoQuintaFaseEfeito:     'img_canvas/explosao.png',			
			introducaoQuintaFase:     'img_canvas/introFase5.jpg',
			encerramentoQuintaFase:   'img_canvas/encerraFase5.jpg',			
			
			cenarioSextaFase:         'img_canvas/cenarioFase6.jpg',
			projetilSextaFase:        'img_canvas/projetilFase6.png',
			alvoSextaFase:   	 	  'img_canvas/alvoFase6.png',
			alvoSextaFaseAlvejado:    'img_canvas/alvejadoFase6.png',
			alvoSextaFaseEfeito:      'img_canvas/explosao.png',			
			introducaoSextaFase:      'img_canvas/introFase6.jpg',
			encerramentoSextaFase:    'img_canvas/encerraFase6.jpg',
			
			encerramentoJogo:    'img_canvas/encerramentoJogo.jpg'			
			
		};		
			
		for(var indice in this.imagens){		
					
			var imagem = new Image();
					
			imagem.src = this.imagens[indice];
					
			imagem.onload = this.isImagemCarregada();
			
			this.imagens[indice] = imagem;
		}
	},
	
	isImagemCarregada:function(){		
				
		if(this.imagensCarregadas == (Object.keys(this.imagens).length - 1)){					
					
			console.log("imagens carregadas!");				
		}
				
		this.imagensCarregadas++;	
		
	},
	
	getImagens:function(){
		
		return this.imagens;
	},	
	
	carregarAudios:function(){
				
		this.audios = {
			canhao:   	 	  		  new Audio('audio/canhao.mp3')		
			
		};	
		
		console.log("audios carregados!");	
	
	},		
		
		//this.audio = new Audio('audio/canhao.mp3'); this.audio.play();
	
	definirFases:function(){
		
		primeiraFase = new Fase();
		primeiraFase.getIntroducao().setAnimacao(this.imagens["introducaoPrimeiraFase"]);		
		primeiraFase.getEncerramento().setAnimacao(this.imagens["encerramentoPrimeiraFase"]);		
		primeiraFase.setCenario(this.imagens["cenarioPrimeiraFase"]);
		
		primeiraFase.adicionarFraseProfessor("Atrasou, não vai dar pra;passar!");
		primeiraFase.adicionarFraseProfessor("É veja bem, nem ligo.");
		primeiraFase.adicionarFraseProfessor("Você pode jogar a mesma;fase novamente,;só me avise antes.");
		
		primeiraFase.getProjetil().setPersonagem(this.imagens["projetilPrimeiraFase"]);		
		primeiraFase.getAlvo().setAnimacao(this.imagens["alvoPrimeiraFase"]);				
		primeiraFase.getAlvo().setAnimacaoAlvejado(this.imagens["alvoPrimeiraFaseAlvejado"]);		
		primeiraFase.getAlvo().setEfeito(this.imagens["alvoPrimeiraFaseEfeito"]);		
		primeiraFase.getAlvo().setGrauDificuldade("facil");			
		
		this.fases.push(primeiraFase);
		
		
		segundaFase = new Fase();
		segundaFase.getIntroducao().setAnimacao(this.imagens["introducaoSegundaFase"]);		
		segundaFase.getEncerramento().setAnimacao(this.imagens["encerramentoSegundaFase"]);		
		segundaFase.setCenario(this.imagens["cenarioSegundaFase"]);
		
		segundaFase.adicionarFraseProfessor("E essa é a demonstração;decomo não passar;de nível!");
		segundaFase.adicionarFraseProfessor("Agora você vai cantar:;1,2,3 | 3,2,1 ...");
		segundaFase.adicionarFraseProfessor("Isso aumenta em 90%;suas chances de não;completar o jogo.");		
		
		segundaFase.getProjetil().setPersonagem(this.imagens["projetilSegundaFase"]);		
		segundaFase.getAlvo().setAnimacao(this.imagens["alvoSegundaFase"]);				
		segundaFase.getAlvo().setAnimacaoAlvejado(this.imagens["alvoSegundaFaseAlvejado"]);		
		segundaFase.getAlvo().setEfeito(this.imagens["alvoPrimeiraFaseEfeito"]);		
		segundaFase.getAlvo().setGrauDificuldade("facil");		
			
		this.fases.push(segundaFase);
		
		
		terceiraFase = new Fase();
		terceiraFase.getIntroducao().setAnimacao(this.imagens["introducaoTerceiraFase"]);		
		terceiraFase.getEncerramento().setAnimacao(this.imagens["encerramentoTerceiraFase"]);		
		terceiraFase.setCenario(this.imagens["cenarioTerceiraFase"]);
		
		terceiraFase.adicionarFraseProfessor("Agora imagina;o papai e a mamãe...");
		terceiraFase.adicionarFraseProfessor("Se você fosse;corintiano isso não;teria acontecido!");
		terceiraFase.adicionarFraseProfessor("Eu disse que esse;título do palmeiras;era invenção.");
		
		terceiraFase.getProjetil().setPersonagem(this.imagens["projetilTerceiraFase"]);		
		terceiraFase.getAlvo().setAnimacao(this.imagens["alvoTerceiraFase"]);				
		terceiraFase.getAlvo().setAnimacaoAlvejado(this.imagens["alvoTerceiraFaseAlvejado"]);		
		terceiraFase.getAlvo().setEfeito(this.imagens["alvoTerceiraFaseEfeito"]);		
		terceiraFase.getAlvo().setGrauDificuldade("medio");		
			
		this.fases.push(terceiraFase);		
		
		
		quartaFase = new Fase();
		quartaFase.getIntroducao().setAnimacao(this.imagens["introducaoQuartaFase"]);		
		quartaFase.getEncerramento().setAnimacao(this.imagens["encerramentoQuartaFase"]);		
		quartaFase.setCenario(this.imagens["cenarioQuartaFase"]);

		quartaFase.adicionarFraseProfessor("Existem 10 tipos;de pessoas as que;passam e as que não!");
		quartaFase.adicionarFraseProfessor("A afirmação: você perdeu.;É verdadeira ou falsa?");
		quartaFase.adicionarFraseProfessor("Colocando de forma;bem simples,;tente novamente!");	
		
		quartaFase.getProjetil().setPersonagem(this.imagens["projetilQuartaFase"]);		
		quartaFase.getAlvo().setAnimacao(this.imagens["alvoQuartaFase"]);				
		quartaFase.getAlvo().setAnimacaoAlvejado(this.imagens["alvoQuartaFaseAlvejado"]);		
		quartaFase.getAlvo().setEfeito(this.imagens["alvoPrimeiraFaseEfeito"]);		
		quartaFase.getAlvo().setGrauDificuldade("medio");		
			
		this.fases.push(quartaFase);
		
		
		quintaFase = new Fase();
		quintaFase.getIntroducao().setAnimacao(this.imagens["introducaoQuintaFase"]);		
		quintaFase.getEncerramento().setAnimacao(this.imagens["encerramentoQuintaFase"]);		
		quintaFase.setCenario(this.imagens["cenarioQuintaFase"]);

		quintaFase.adicionarFraseProfessor("Mais uma vez o;usuário é preguiçoso,;burro e azarado.");
		quintaFase.adicionarFraseProfessor("Isto não é vermelho;sangue é vermelho;granada.");
		quintaFase.adicionarFraseProfessor("Péssima UX em colega?!");	
		
		quintaFase.getProjetil().setPersonagem(this.imagens["projetilQuintaFase"]);		
		quintaFase.getAlvo().setAnimacao(this.imagens["alvoQuintaFase"]);				
		quintaFase.getAlvo().setAnimacaoAlvejado(this.imagens["alvoQuintaFaseAlvejado"]);		
		quintaFase.getAlvo().setEfeito(this.imagens["alvoQuintaFaseEfeito"]);		
		quintaFase.getAlvo().setGrauDificuldade("dificil");		 
				
		this.fases.push(quintaFase);
		
		
		sextaFase = new Fase();
		sextaFase.getIntroducao().setAnimacao(this.imagens["introducaoSextaFase"]);		
		sextaFase.getEncerramento().setAnimacao(this.imagens["encerramentoSextaFase"]);		
		sextaFase.setCenario(this.imagens["cenarioSextaFase"]);

		sextaFase.adicionarFraseProfessor("Você deveria ter;estudado mais!");
		sextaFase.adicionarFraseProfessor("Hellooo!?");
		sextaFase.adicionarFraseProfessor("Como assim,;você não sabe?");	
		
		sextaFase.getProjetil().setPersonagem(this.imagens["projetilSextaFase"]);		
		sextaFase.getAlvo().setAnimacao(this.imagens["alvoSextaFase"]);				
		sextaFase.getAlvo().setAnimacaoAlvejado(this.imagens["alvoSextaFaseAlvejado"]);		
		sextaFase.getAlvo().setEfeito(this.imagens["alvoSextaFaseEfeito"]);		
		sextaFase.getAlvo().setGrauDificuldade("dificil");		
				
		this.fases.push(sextaFase);
		
	},
	
	getPartida:function(){
		
		return this.partida;
	},
	
	iniciar:function(){
		
		console.log("iniciando jogo...");
		
		this.carregarImagens();
		
		this.carregarAudios();
		
		this.definirFases();
		
		this.motor.ligar();
			
		this.partida = new Partida(this.fases,this.motor,this.audios,this.document);
		
		this.partida.getCanhao().setAnimacao(this.imagens["canhao"]);
		
		this.partida.setEncerramentoPartida(this.imagens["encerramentoJogo"]);
		
	},	
}

