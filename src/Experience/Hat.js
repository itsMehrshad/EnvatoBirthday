import * as THREE from "three";

import Experience from "./Experience.js";

export default class Hat {
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

    this.model.group = this.resources.items.hatModel.scene.children[0];
    this.resources.items.hatModel.scene.children[0].scale.x = 0.0045;
    this.resources.items.hatModel.scene.children[0].scale.y = 0.0045;
    this.resources.items.hatModel.scene.children[0].scale.z = 0.0045;
    this.resources.items.hatModel.scene.children[0].position.x = -3.81;
    this.resources.items.hatModel.scene.children[0].position.y = 3.1;
    this.resources.items.hatModel.scene.children[0].position.z = 4.14;
    this.scene.add(this.model.group);

    this.model.group.traverse((_child) => {
      if (_child instanceof THREE.Mesh) {
        _child.material = new THREE.MeshBasicMaterial({
          map: this.world.room.hattexture,
        });
      }
    });
  }

  // Rotate the cake
  update() {
    // this.model.group.rotation.y = Math.sin(this.time.elapsed * 0.0003);
  }
}
