import * as THREE from "three";

import Experience from "./Experience.js";

export default class Screen {
  constructor(_mesh, _sourcePath) {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;
    this.scene = this.experience.scene;
    this.world = this.experience.world;

    this.mesh = _mesh;
    this.sourcePath = _sourcePath;

    this.setModel();
  }

  setModel() {
    this.model = {};

    // Element

    this.model.element = document.createElement("video");
    this.model.element.muted = false;
    this.model.element.loop = false;
    this.model.element.controls = true;
    this.model.element.playsInline = true;
    this.model.element.autoplay = true;
    this.model.element.src = "/assets/MehrshadSpeaking.mp4";
    // console.log(this.sourcePath);
    this.model.element.play();

    // Texture
    this.model.texture = new THREE.VideoTexture(this.model.element);
    this.model.texture.encoding = THREE.sRGBEncoding;

    // Material
    this.model.material = new THREE.MeshBasicMaterial({
      map: this.model.texture,
    });

    // Mesh
    this.model.mesh = this.mesh;
    this.model.mesh.material = this.model.material;
    let sceneAdd = this.scene;
    setTimeout(() => {
      sceneAdd.remove(this.model.mesh);
    }, 55000);
    sceneAdd.add(this.model.mesh);
  }

  update() {
    // this.model.group.rotation.y = Math.sin(this.time.elapsed * 0.0005) * 0.5;
  }
}
