class SceneGame extends Phaser.Scene{
	constructor(){
		super("playGame");
	}
	preload(){
        this.load.dragonbone("mecha_1002_101d_show", "resource/mecha_1002_101d_show/mecha_1002_101d_show_tex.png", "resource/mecha_1002_101d_show/mecha_1002_101d_show_tex.json", "resource/mecha_1002_101d_show/mecha_1002_101d_show_ske.dbbin", null, null, { responseType: "arraybuffer" });
	}

	create(){
		this.add.text(20, 20, "Эксперименты с Dragonbones:)", {font: "25px Arial", fill: "yellow"});
		
        this.dragon = this.add.armature("mecha_1002_101d", "mecha_1002_101d_show");
        this.dragon.animation.play("idle");
        this.dragon.x = 400;
        this.dragon.y = 500;
	}
}