var config = {
	width: 1280,
	height: 720,
	backgroundColor: 0x000000,
	scene: [SceneMenu, SceneGame, SceneGameOutside, SceneSettings, SceneSnakeGame],
	plugins: {
        global:[
        	{
        		key: "DragonBonesPlugin",
        		plugin: dragonBones.phaser.plugin.DragonBonesPlugin,
        		start: true
        	}
        ],
        scene: [
            {
                key: "DragonBones",
                plugin: dragonBones.phaser.plugin.DragonBonesScenePlugin,
                mapping: "dragonbone"
            }    // setup DB scene plugin
        ]
    }
}

var game = new Phaser.Game(config);