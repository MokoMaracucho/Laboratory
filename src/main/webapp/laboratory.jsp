<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
	<head>
		<title>MOKO Laboratory</title>
		<meta charset="UTF-8">
		<link href="<c:url value="style.css" />" rel="stylesheet">
		
    	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    	<script src="https://code.jquery.com/pep/0.4.1/pep.js"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
		<script src="https://preview.babylonjs.com/babylon.js"></script>
    	<script src="https://preview.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
    	
    	<script src="scripts/lights.js"></script>
	</head>
	
	<body>
		<canvas id="renderCanvas"></canvas>
	
		<script>

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

				var Flagstone = BABYLON.SceneLoader.LoadAssetContainer("include/babylon/gltf/", "Flagstone.gltf", Scene, function (container) {
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
				BABYLON.SceneLoader.LoadAssetContainer("include/babylon/gltf/", "Icon_Twitter.gltf", Scene, function (container) {
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
				    		alert('player clicked');
				    	}));
			        }
				    
				    container.addAllToScene();
				});
				

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
    

		</script>
	</body>
</html>