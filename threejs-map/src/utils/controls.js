import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function initializeControls(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Enable damping (inertia)
  controls.dampingFactor = 0.25; // Damping factor
  controls.screenSpacePanning = false; // Pan orthogonal to world-space direction
  return controls;
}
