import * as THREE from "three";

import Experience from "./Experience.js";

export default class Cake {
  constructor() {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;
    this.scene = this.experience.scene;
    this.world = this.experience.world;
    this.time = this.experience.time;

    this.setModel();
  }

  setModel() {
    this.model = {};

    this.model.group = this.resources.items.cakeModel.scene.children[0];
    this.model.group.scale.x = 0.005;
    this.model.group.scale.y = 0.005;
    this.model.group.scale.z = 0.005;
    this.resources.items.cakeModel.scene.children[0].position.x = 0.1;
    this.resources.items.cakeModel.scene.children[0].position.y = 0.9;
    this.resources.items.cakeModel.scene.children[0].position.z = 0.9;
    this.scene.add(this.model.group);

    this.model.group.traverse((_child) => {
      if (_child instanceof THREE.Mesh) {
        _child.material = new THREE.MeshBasicMaterial({
          map: this.world.room.cakeTexture,
        });
      }
    });
  }

  // Rotate the cake
  update() {
    // this.model.group.rotation.y = Math.sin(this.time.elapsed * 0.0005) * 0.5;
  }
}
