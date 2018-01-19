_documentReady($=>{

    $irithel = {
    	heroName:"Irithel",
    	deskripsi:"My Tiger Has Been With Me, Many Years ! Don't be lazy Leo, run!",
    	skill:"STRAFE, FORCE OF THE QUEEN, & HEAVY BOW",
    	image:"img/irithel.jpeg"
    };

    __({
		el:"irithel",
		html:{
		  single:{
		    heroName:$irithel.heroName,
		    deskripsi:$irithel.deskripsi,
		    skill:$irithel.skill,
		    image:$irithel.image
		  }
		}
	});
    // =========================================================
    $roger = {
    	heroName:"Roger",
    	deskripsi:"A gun is not my only weapon! I'm not alone in this fight!",
    	skill:"FULL BORE, HUNTER’S STEPS, & WOLF TRANSFORMATION ",
    	image:"img/roger.jpeg"
    };

	__({
		el:"roger",
		html:{
		  single:{
		    heroName:$roger.heroName,
		    deskripsi:$roger.deskripsi,
		    skill:$roger.skill,
		    image:$roger.image
		  }
		}
	});
	// =========================================================
	 $fanny = {
    	heroName:"Fanny",
    	deskripsi:"Sir,What's your command? War is not a game",
    	skill:"TORNADO STRIKE, STEEL CABLE, & CUT THROAT ",
    	image:"img/fanny.jpg"
    };

	__({
		el:"fanny",
		html:{
		  single:{
		    heroName:$fanny.heroName,
		    deskripsi:$fanny.deskripsi,
		    skill:$fanny.skill,
		    image:$fanny.image
		  }
		}
	});
	// =========================================================
	 $argus = {
    	heroName:"Argus",
    	deskripsi:"All shall perish by my sword...Ahhh, Power is eternity ",
    	skill:"DEMONIC GRIP, METEORIC SWORD, & ETERNAL EVIL",
    	image:"img/argus.jpeg"
    };

	__({
		el:"argus",
		html:{
		  single:{
		    heroName:$argus.heroName,
		    deskripsi:$argus.deskripsi,
		    skill:$argus.skill,
		    image:$argus.image
		  }
		}
	});
	// =========================================================
	
	 __({
		el:"btn_scroll",
		event:{
			when:"click",
			callback:function(){
				_scrollTo({
				  x:234000000,
				  y:234000000
				});
			}
		}
	});
});