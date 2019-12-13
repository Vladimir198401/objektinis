
	class Masina {  //klasse
		
		constructor(masina) {  //parametrai
 
		 	// parametrai vadinami savibemis ir priskiriama this
			this.Automobilis = masina.Automobilis
			this.kuro_san_mieste = masina.kuro_san_mieste
			this.kuro_san_uzmiestij = masina.kuro_san_uzmiestij
			
		}
		
		present( san_proc_mieste ) {  			//metodai - taip vadinamos funkcijos priklausancios klasei
							// metodai dirba su savybemis per kreipini this. savybes bendros visems metodams 
			
			return ' - Automobilis: ' + this.Automobilis + ' - kuro_san_uzmiestij: ' + this.kuro_san_uzmiestij + ' - kuro_san_mieste: ' +  this.kuro_san_mieste +  ' - vidurkis:' + this.vidurkis( san_proc_mieste );    //return apraso ka turi grazint ir kaip veikt ir parodo front ende
		}
		
		vidurkis( san_proc_mieste) {
		
			return this.kuro_san_mieste * sanaudu_proc_mieste / 100 + ( this.kuro_san_uzmiestij * (100 - sanaudu_proc_mieste ) / 100 );
		}

	}	