<template>
  <div class="three-map-container">
    <button class="info-button" @click="openInfoModal">i</button>
    <div ref="threeContainer" class="three-container"></div>
    <PrimeDialog v-model:visible="showModal" modal :closable="true" :style="{ width: '100vw', height: '100vh' }">
      <div class="p-m-3" style="height: calc(100vh - 4rem); overflow-y: auto;">
        <component :is="currentComponent" />
      </div>
    </PrimeDialog>
  </div>
</template>
<script>
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import PrimeDialog from 'primevue/dialog';
import { createScene, createCamera, createRenderer, addLights, loadSkybox, createGround } from '@/utils/threeSetup';
import { initializeControls } from '@/utils/controls';
import { onObjectClick } from '@/utils/interactivity';

//Content for Modals
import inter1 from './3_inter1.vue';
import inter2 from './3_inter2.vue';
import paper1 from './3_Paper1.vue';
import paper2 from './3_Paper2.vue';
import ackno1 from './5_Acknowledgments1.vue';
import ackno2 from './5_Acknowledgements2.vue';
import proof1 from './3_proof1.vue';
import proof2 from './3_proof2.vue';
import proof3 from './3_proof3.vue';
import proof4 from './3_proof4.vue';
import proof5 from './3_proof5.vue';


export default {
  components: {
    PrimeDialog,
    inter1,
    inter2,
    paper1,
    paper2,
    ackno1,
    ackno2,
    proof1,
    proof2,
    proof4,
    proof3,
    proof5,


  },
  data() {
    return {
      showModal: false,
      selectedModel: null,
      currentComponent: null,
      models: [
        { id: 0, title: 'Stein', component: 'inter1', position: new THREE.Vector3(-23, 0, 17), rotation: new THREE.Euler(-Math.PI / 2, 0, 0), scale: new THREE.Vector3(0.03, 0.03, 0.03), type: 'stl', path: '/models/rock-3.stl' },
        { id: 0, title: 'Stein', component: 'inter2', position: new THREE.Vector3(-21, 0, 15.5), rotation: new THREE.Euler(-Math.PI / 2, 0, 0), scale: new THREE.Vector3(0.03, 0.03, 0.03), type: 'stl', path: '/models/tower2.stl' },
        { id: 0, title: 'Stein', component: 'paper1', position: new THREE.Vector3(-16, 0, 14), rotation: new THREE.Euler(-Math.PI / 2, 0, 0), scale: new THREE.Vector3(0.02, 0.02, 0.02), type: 'stl', path: '/models/rock-4.stl' },
        { id: 0, title: 'Stein', component: 'paper2', position: new THREE.Vector3(-11.5, 0, 12.5), rotation: new THREE.Euler(-Math.PI / 2, 0, 0), scale: new THREE.Vector3(0.1, 0.1, 0.1), type: 'stl', path: '/models/house1.stl' },
        { id: 0, title: 'Stein', component: 'ackno1', position: new THREE.Vector3(-1.5, 0, 12.5), rotation: new THREE.Euler(-Math.PI / 2, 0, 0), scale: new THREE.Vector3(0.03, 0.03, 0.03), type: 'stl', path: '/models/tower2.stl' },
        { id: 0, title: 'Stein', component: 'ackno2', position: new THREE.Vector3(-0.5, 0, 10.5), rotation: new THREE.Euler(-Math.PI / 2, 0, 0), scale: new THREE.Vector3(0.03, 0.03, 0.03), type: 'stl', path: '/models/rock-3.stl' },
        { id: 0, title: 'Stein', component: 'proof1', position: new THREE.Vector3(13.5, 0, 12.5), rotation: new THREE.Euler(-Math.PI / 2, 0, 0), scale: new THREE.Vector3(0.1, 0.1, 0.1), type: 'stl', path: '/models/house1.stl' },
        { id: 0, title: 'Stein', component: 'proof2', position: new THREE.Vector3(-0.5, 0, 10.5), rotation: new THREE.Euler(-Math.PI / 2, 0, 0), scale: new THREE.Vector3(0.03, 0.03, 0.03), type: 'stl', path: '/models/rock-3.stl' },
        { id: 0, title: 'Stein', component: 'proof3', position: new THREE.Vector3(-0.5, 0, 10.5), rotation: new THREE.Euler(-Math.PI / 2, 0, 0), scale: new THREE.Vector3(0.03, 0.03, 0.03), type: 'stl', path: '/models/rock-3.stl' },
        { id: 0, title: 'Stein', component: 'proof4', position: new THREE.Vector3(-0.5, 0, 10.5), rotation: new THREE.Euler(-Math.PI / 2, 0, 0), scale: new THREE.Vector3(0.03, 0.03, 0.03), type: 'stl', path: '/models/rock-3.stl' },
        { id: 0, title: 'Stein', component: 'proof5', position: new THREE.Vector3(-0.5, 0, 10.5), rotation: new THREE.Euler(-Math.PI / 2, 0, 0), scale: new THREE.Vector3(0.03, 0.03, 0.03), type: 'stl', path: '/models/rock-3.stl' },


      ],
      meshes: [],
      nonClickableObjects: [],
    };
  },
  async mounted() {
    await this.initThree();
    window.addEventListener('resize', this.onWindowResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    async initThree() {
      this.scene = createScene();
      this.camera = createCamera();
      this.renderer = createRenderer();
      this.$refs.threeContainer.appendChild(this.renderer.domElement);

      this.camera.position.set(0, 10, 20);
      this.camera.rotation.x = -Math.PI / 6;

      addLights(this.scene);
      const skybox = await loadSkybox(this.scene);
      const ground = createGround(this.scene);

      this.nonClickableObjects = [ground, skybox];

      this.models.forEach(model => {
        if (model.type === 'stl') {
          this.loadSTLModel(model.path, model.position.toArray(), model.rotation, model.scale, model);
        }
      });

      this.controls = initializeControls(this.camera, this.renderer);

      this.renderer.domElement.addEventListener('click', (event) => this.handleObjectClick(event));

      this.animate();
    },
    loadSTLModel(path, position, rotation, scale, modelData) {
      const loader = new STLLoader();
      loader.load(path, (geometry) => {
        const material = new THREE.MeshStandardMaterial({ color: 0x0055ff });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(...position);
        mesh.rotation.copy(rotation); // Apply rotation
        mesh.scale.copy(scale); // Apply scale
        mesh.userData = modelData; // Attach model data to mesh
        this.scene.add(mesh);
        this.meshes.push(mesh);
      });
    },
    handleObjectClick(event) {
      onObjectClick(event, this.camera, this.scene, this.meshes, this.nonClickableObjects, (object) => {
        console.log('Clicked object:', object.userData); // Debugging log
        this.selectedModel = object.userData;
        this.currentComponent = this.selectedModel.component;
        this.showModal = true;
      });
    },
    animate() {
      requestAnimationFrame(this.animate.bind(this));
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
  },
};
</script>

<style scoped>
.three-map-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.three-container {
  width: 100%;
  height: 100%;
}

.info-button {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 20px 30px;
  font-size: 30px;
  background-color: #0055ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;
}
</style>
