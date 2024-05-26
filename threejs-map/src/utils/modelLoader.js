import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function loadGLTFModel(scene, path, position = [0, 0, 0], scale = [1, 1, 1]) {
  const loader = new GLTFLoader();
  loader.load(path, (gltf) => {
    const model = gltf.scene;
    model.position.set(...position);
    model.scale.set(...scale);
    scene.add(model);
  });
}
