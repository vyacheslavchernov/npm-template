var css = require("./../style.css");
import { Scene, Color, PerspectiveCamera, BoxBufferGeometry, MeshBasicMaterial, Mesh, WebGLRenderer } from 'three';

var container = document.querySelector('#container');


var scene = new Scene();
scene.background = new Color('skyblue');

var fov = 35; // AKA Field of View
var aspect = container.clientWidth / container.clientHeight;
var near = 0.1; // the near clipping plane
var far = 100; // the far clipping plane

var camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 10);

var geometry = new BoxBufferGeometry(2, 2, 2);
var material = new MeshBasicMaterial();
var mesh = new Mesh(geometry, material);
scene.add(mesh);

var renderer = new WebGLRenderer();

renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);
renderer.render(scene, camera);