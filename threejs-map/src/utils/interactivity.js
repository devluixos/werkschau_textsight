import * as THREE from 'three';

export function onObjectClick(event, camera, scene, clickableObjects, nonClickableObjects, onClickCallback) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);

  // Filter out non-clickable objects
  const filteredIntersects = intersects.filter(intersect => 
    clickableObjects.includes(intersect.object) && !nonClickableObjects.includes(intersect.object)
  );

  if (filteredIntersects.length > 0) {
    const intersectedObject = filteredIntersects[0].object;
    onClickCallback(intersectedObject);
  }
}
