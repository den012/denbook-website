import {GLTFLoader} from "./modules/GLTFLoader.js";

import { EffectComposer } from 'https://cdn.jsdelivr.net/npm/three@0.122/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://cdn.jsdelivr.net/npm/three@0.122/examples/jsm/postprocessing/RenderPass.js';


//scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    .01,
    1000
);

var canvasRef = document.getElementById("object1");
//renderer
var renderer = new THREE.WebGL1Renderer({
    canvas: canvasRef,
    alpha: true
});

renderer.setClearColor( 0x000000, 0 ); // the default
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//controls
var controls = new THREE.OrbitControls(camera,renderer.domElement);
controls.enableZoom = false;
controls.update();

var loader = new GLTFLoader();

var object;
let mixer;
loader.load("3d-object/scene.gltf" , function(gltf){
    object = gltf.scene;
    scene.add(gltf.scene);
});


//light 
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1);
scene.add( directionalLight );

const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0xffffff, 1);
scene.add(hemiLight);

/*const light = new THREE.SpotLight(0xffa95c,10);
light.position.set(-50,50,50);
light.castShadow = false;
scene.add( light );*/


camera.position.set(0,0,5);

const clock = new THREE.Clock();

function animate(){
    requestAnimationFrame(animate);

    //scene.rotateX(0.007);
    scene.rotateY(0.01);

    renderer.render(scene, camera);

    /*light.position.set( 
        camera.position.x,
        camera.position.y,
        camera.position.z,
      );*/

}

animate();