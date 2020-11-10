window.addEventListener('DOMContentLoaded', function() {

    var canvas = document.getElementById("renderCanvas");

    var engine = new BABYLON.Engine(canvas, true);

    var createScene = function () {

        var Scene = new BABYLON.Scene(engine);


		// ##################
        // ##### CAMERA #####
		// ##################
        
    	var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 90, new BABYLON.Vector3(-16.2, 7, -12), Scene);
    	camera.lowerBetaLimit = 0.1;
    	camera.upperBetaLimit = (Math.PI / 2) * 0.9;
    	camera.lowerRadiusLimit = 30;
    	camera.upperRadiusLimit = 150;
    	camera.attachControl(canvas, true);


		// ############################
        // ##### LIGHTS & SHADOWS #####
		// ############################
		
		// TOP
    	var Directional_Light_Top = new BABYLON.DirectionalLight("Directional_Light_Top", new BABYLON.Vector3(1, -5, -2), Scene);
    	Directional_Light_Top.position = new BABYLON.Vector3(-16.2, 25, -10);
    	Directional_Light_Top.intensity = 1.2;
        var Shadow_Generator_Top = new BABYLON.ShadowGenerator(1024, Directional_Light_Top);
        Shadow_Generator_Top.usePoissonSampling = true;
		
		// LEFT
		var Directional_Light_Left = new BABYLON.DirectionalLight("Directional_Light_Left", new BABYLON.Vector3(-1, -1, -1), Scene);
		Directional_Light_Left.position = new BABYLON.Vector3(-16.2, 25, -10);
// 				Directional_Light_Left.diffuse = new BABYLON.Color3(1, 0, 0);
		Directional_Light_Left.intensity = 0.9;
        var Shadow_Generator_Left = new BABYLON.ShadowGenerator(1024, Directional_Light_Left);
        Shadow_Generator_Left.usePoissonSampling = true;
		
		// RIGHT
    	var Directional_Light_Right = new BABYLON.DirectionalLight("Directional_Light_Right", new BABYLON.Vector3(1, -1, -1), Scene);
    	Directional_Light_Right.position = new BABYLON.Vector3(-16.2, 25, -10);
    	Directional_Light_Right.intensity = 0.9;
// 	        	Directional_Light_Right.diffuse = new BABYLON.Color3(0, 0, 1);
        var Shadow_Generator_Right = new BABYLON.ShadowGenerator(1024, Directional_Light_Right);
        Shadow_Generator_Right.usePoissonSampling = true;

		// HEMISPHERIC LIGHT
        var Hemispheric_Light = new BABYLON.HemisphericLight("Hemispheric_Light", new BABYLON.Vector3(0, 1, 0), Scene);
        Hemispheric_Light.intensity = 0.3;

			
		// #####################
        // ##### FLAGSTONE #####
		// #####################

		var Flagstone = BABYLON.SceneLoader.LoadAssetContainer("babylon/gltf/", "Flagstone.gltf", Scene, function (container) {
	        var meshes = container.meshes;
	        var materials = container.materials;

	        for (var i = 0; i < meshes.length; i++){
	            meshes[i].receiveShadows=true; 
	            Shadow_Generator_Top.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Left.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Right.addShadowCaster(meshes[i], true);
	        }
	        
	        container.addAllToScene();
		});


		// ##########################
        // ##### PERSIAN CARPET #####
		// ##########################

		BABYLON.SceneLoader.LoadAssetContainer("babylon/gltf/", "Persian_Carpet.gltf", Scene, function (container) {
		    var meshes = container.meshes;
		    var materials = container.materials;

	        for (var i = 0; i < meshes.length; i++){
	            meshes[i].receiveShadows=true; 
	            Shadow_Generator_Top.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Left.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Right.addShadowCaster(meshes[i], true);
	        }
		    
		    container.addAllToScene();
		});


		// ###################
        // ##### CHIMNEY #####
		// ###################

		BABYLON.SceneLoader.LoadAssetContainer("babylon/gltf/", "Chimney.gltf", Scene, function (container) {
		    var meshes = container.meshes;
		    var materials = container.materials;

	        for (var i = 0; i < meshes.length; i++){
	            meshes[i].receiveShadows=true; 
	            Shadow_Generator_Top.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Left.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Right.addShadowCaster(meshes[i], true);
	        }
	        
		    container.addAllToScene();
		});


		// ###################
        // ##### CHECKER #####
		// ###################

		BABYLON.SceneLoader.LoadAssetContainer("babylon/gltf/", "Checker.gltf", Scene, function (container) {
	        var meshes = container.meshes;

	        for (var i = 0; i < meshes.length; i++){    
	            meshes[i].receiveShadows=true; 
	            Shadow_Generator_Top.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Left.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Right.addShadowCaster(meshes[i], true);
	        }
	        
	        container.addAllToScene();
		});


		// ######################
        // ##### 3D GLASSES #####
		// ######################

		BABYLON.SceneLoader.LoadAssetContainer("babylon/gltf/", "Glasses.gltf", Scene, function (container) {
			var meshes = container.meshes;

	        for (var i = 0; i < meshes.length; i++){    
	            meshes[i].receiveShadows=true; 
	            Shadow_Generator_Top.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Left.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Right.addShadowCaster(meshes[i], true);
	        }
		    
		    container.addAllToScene();
		});


		// #################
        // ##### CHIVA #####
		// #################

		BABYLON.SceneLoader.LoadAssetContainer("babylon/gltf/", "Chiva.gltf", Scene, function (container) {
			var meshes = container.meshes;

	        for (var i = 0; i < meshes.length; i++){
	            meshes[i].receiveShadows=true; 
	            Shadow_Generator_Top.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Left.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Right.addShadowCaster(meshes[i], true);
	        }
		    
		    container.addAllToScene();
		});


		// ####################
        // ##### SPEAKERS #####
		// ####################

		BABYLON.SceneLoader.LoadAssetContainer("babylon/gltf/", "Speaker_Left.gltf", Scene, function (container) {
		    var meshes = container.meshes;
		    var materials = container.materials;

	        for (var i = 0; i < meshes.length; i++){
	            meshes[i].receiveShadows=true; 
	            Shadow_Generator_Top.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Left.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Right.addShadowCaster(meshes[i], true);
	        }
		    
		    container.addAllToScene();
		});

		BABYLON.SceneLoader.LoadAssetContainer("babylon/gltf/", "Speaker_Right.gltf", Scene, function (container) {
		    var meshes = container.meshes;
		    var materials = container.materials;

	        for (var i = 0; i < meshes.length; i++){
	            meshes[i].receiveShadows=true; 
	            Shadow_Generator_Top.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Left.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Right.addShadowCaster(meshes[i], true);
	        }
		    
		    container.addAllToScene();
		});


		// #####################
        // ##### WALL LEFT #####
		// #####################

		BABYLON.SceneLoader.LoadAssetContainer("babylon/gltf/", "Wall_Left.gltf", Scene, function (container) {
		    var meshes = container.meshes;
		    var materials = container.materials;

	        for (var i = 0; i < meshes.length; i++){
	            meshes[i].receiveShadows=true; 
	            Shadow_Generator_Top.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Left.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Right.addShadowCaster(meshes[i], true);
	        }
		    
		    container.addAllToScene();
		});


		// ##################
        // ##### FRAMES #####
		// ##################

		BABYLON.SceneLoader.LoadAssetContainer("babylon/gltf/", "Amor_Amor.gltf", Scene, function (container) {
		    var meshes = container.meshes;
		    var materials = container.materials;

	        for (var i = 0; i < meshes.length; i++){
	            meshes[i].receiveShadows=true; 
	            Shadow_Generator_Top.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Left.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Right.addShadowCaster(meshes[i], true);
	        }
		    
		    container.addAllToScene();
		});


		// ###################
        // ##### TWITTER #####
		// ###################

		var Icon_Twitter_Meshes;
		var Icon_Twitter = BABYLON.SceneLoader.LoadAssetContainer("babylon/gltf/", "Icon_Twitter.gltf", Scene, function (container) {
		    var meshes = container.meshes;
		    Icon_Twitter_Meshes = meshes;
		    var materials = container.materials;

	        for (var i = 0; i < meshes.length; i++){
	            meshes[i].receiveShadows=true; 
	            Shadow_Generator_Top.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Left.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Right.addShadowCaster(meshes[i], true);
	        }

	        for (var i = 0; i < meshes.length; i++){    
	            meshes[i].actionManager = new BABYLON.ActionManager(Scene);
	            Shadow_Generator_Right.addShadowCaster(meshes[i], true);
	            meshes[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
	            	window.open("https://twitter.com/FedericoMoko");
	            	// https://doc.babylonjs.com/snippets/openurl
		    	}));
	        }
		    
		    container.addAllToScene();
		});


		// ##################
        // ##### MIRROR #####
		// ##################

		BABYLON.SceneLoader.LoadAssetContainer("babylon/gltf/", "Mirror_Frame.gltf", Scene, function (container) {
		    var meshes = container.meshes;
		    var materials = container.materials;

	        for (var i = 0; i < meshes.length; i++){    
	            meshes[i].receiveShadows=true; 
	            Shadow_Generator_Top.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Left.addShadowCaster(meshes[i], true);
	            Shadow_Generator_Right.addShadowCaster(meshes[i], true);
	        }
		    
		    container.addAllToScene();
		});




		var sphere = BABYLON.MeshBuilder.CreateSphere("Sphere", {}, Scene);
		sphere.position = new BABYLON.Vector3(-10, 10, -10);
		
		var redMaterial = new BABYLON.StandardMaterial("red", Scene);
	    redMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0);
		
		sphere.material = redMaterial;


		
							

		var Mirror = BABYLON.MeshBuilder.CreatePlane("Mirror", {width: 5.24, height: 8.51}, Scene);
		Mirror.setPivotMatrix(BABYLON.Matrix.Translation(9.3, 16.8, 0), false);
		Mirror.position = new BABYLON.Vector3(-0.1, -4.85, 0);
		Mirror.rotation.y = Math.PI / 2;

// 		var Mirror_Material = new BABYLON.StandardMaterial("Mirror_Material", Scene);
// 		var probe = new BABYLON.ReflectionProbe("main", 512, Scene);

		//Ensure working with new values for glass by computing and obtaining its worldMatrix
		Mirror.computeWorldMatrix(true);
		var glass_worldMatrix = Mirror.getWorldMatrix();
	
		//Obtain normals for plane and assign one of them as the normal
		var glass_vertexData = Mirror.getVerticesData("normal");
		var glassNormal = new BABYLON.Vector3(glass_vertexData[0], glass_vertexData[1], glass_vertexData[2]);	
		//Use worldMatrix to transform normal into its current value
		glassNormal = new BABYLON.Vector3.TransformNormal(glassNormal, glass_worldMatrix)
	
		//Create reflecting surface for mirror surface
		var reflector = new BABYLON.Plane.FromPositionAndNormal(Mirror.position, glassNormal.scale(-1));
	
		//Create the mirror material
		var mirrorMaterial = new BABYLON.StandardMaterial("mirror", Scene);
		mirrorMaterial.reflectionTexture = new BABYLON.MirrorTexture("mirror", 1024, Scene, true);
		mirrorMaterial.reflectionTexture.mirrorPlane = reflector;
		mirrorMaterial.reflectionTexture.renderList = [sphere];
		mirrorMaterial.reflectionTexture.level = 1;
	
		Mirror.material = mirrorMaterial;
			

        return Scene;
    };

	var Scene = createScene();

	engine.runRenderLoop(function() {
	    Scene.render();
	});

	window.addEventListener('resize', function() {
	    engine.resize();
    });
});