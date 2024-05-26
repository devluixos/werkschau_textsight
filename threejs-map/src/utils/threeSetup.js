import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import skyboxGLB from '@/assets/skybox_4k.glb';

export function createScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff); // Set background to white
  return scene;
}

export function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000
  );
  camera.position.z = 5;
  return camera;
}

export function createRenderer() {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  return renderer;
}

export function addLights(scene) {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 10, 7.5);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
}

export function loadSkybox(scene) {
  const loader = new GLTFLoader();
  return new Promise((resolve) => {
    loader.load(skyboxGLB, (gltf) => {
      const skybox = gltf.scene;
      scene.add(skybox);
      resolve(skybox); // Resolve with the skybox object
    });
  });
}

export function createGround(scene) {
  const textureLoader = new THREE.TextureLoader();
  const groundTexture = textureLoader.load(require('@/assets/GroundGrassGreen002_COL_2K.jpg')); // Replace with your texture path
  groundTexture.wrapS = THREE.RepeatWrapping;
  groundTexture.wrapT = THREE.RepeatWrapping;
  groundTexture.repeat.set(10, 10);

  const planeGeometry = new THREE.PlaneGeometry(100, 100);
  const planeMaterial = new THREE.MeshStandardMaterial({ map: groundTexture });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -Math.PI / 2; // Rotate the plane to lie flat
  plane.receiveShadow = true; // Enable shadow receiving on the plane
  scene.add(plane);

  return plane; // Return the plane object
}

export function loadGLTFModel(scene, path, position = [0, 0, 0], scale = [1, 1, 1]) {
  const loader = new GLTFLoader();
  loader.load(path, (gltf) => {
    const model = gltf.scene;
    model.position.set(...position);
    model.scale.set(...scale);
    scene.add(model);
  });
}

export function loadSTLModel(scene, path, position = [0, 0, 0], scale = [1, 1, 1]) {
  const loader = new STLLoader();
  loader.load(path, (geometry) => {
    const material = new THREE.MeshStandardMaterial({ color: 0x606060 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    mesh.scale.set(...scale);
    scene.add(mesh);
  });
}

export function loadOBJModel(scene, path, position = [0, 0, 0], scale = [1, 1, 1]) {
  const loader = new OBJLoader();
  loader.load(path, (obj) => {
    obj.position.set(...position);
    obj.scale.set(...scale);
    scene.add(obj);
  });
}
