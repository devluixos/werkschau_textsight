<template>
  <div class="three-map-container">
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
import Abstract from './1_Abstract.vue';
import Intro1 from './2_IntroProblemspace.vue';	
import Intro2 from './2_IntroResearch.vue';
import Intro3 from './2_Stakeholders.vue';

export default {
  components: {
    PrimeDialog,
    Abstract,
    Intro1,
    Intro2,
    Intro3,
  },
  data() {
    return {
      showModal: false,
      selectedModel: null,
      currentComponent: null,
      models: [
        { id: 1, title: 'Model 1', component: 'Abstract', position: new THREE.Vector3(0, 1, 0), type: 'stl', path: '/models/Boston_Rowhouse_Detailed.stl' },
        { id: 2, title: 'Model 2', component: 'Intro1', position: new THREE.Vector3(2, 1, 0), type: 'stl', path: '/models/Boston_Rowhouse_Detailed.stl' },
        { id: 3, title: 'Model 3', component: 'Intro2', position: new THREE.Vector3(4, 1, 0), type: 'stl', path: '/models/Boston_Rowhouse_Detailed.stl' },
        { id: 4, title: 'Model 4', component: 'Intro3', position: new THREE.Vector3(6, 1, 0), type: 'stl', path: '/models/Boston_Rowhouse_Detailed.stl' },
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
          this.loadSTLModel(model.path, model.position.toArray(), [0.01, 0.01, 0.01], model);
        }
      });

      this.controls = initializeControls(this.camera, this.renderer);

      this.renderer.domElement.addEventListener('click', (event) => this.handleObjectClick(event));

      this.animate();
    },
    loadSTLModel(path, position, scale, modelData) {
      const loader = new STLLoader();
      loader.load(path, (geometry) => {
        const material = new THREE.MeshStandardMaterial({ color: 0x0055ff });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(...position);
        mesh.scale.set(...scale);
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
</style>
