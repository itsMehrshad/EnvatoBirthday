import * as THREE from "three";

import Experience from "./Experience.js";

export default class Frame {
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

    this.model.group = this.resources.items.FrameModel.scene.children[0];
    console.log(this.model.group);
    this.resources.items.FrameModel.scene.children[0].scale.x = 2;
    this.resources.items.FrameModel.scene.children[0].scale.y = 2;
    this.resources.items.FrameModel.scene.children[0].scale.z = 2;
    this.resources.items.FrameModel.scene.children[0].position.x = 0.8;
    this.resources.items.FrameModel.scene.children[0].position.y = 1;
    this.resources.items.FrameModel.scene.children[0].position.z = 2.1;
    this.resources.items.FrameModel.scene.children[0].rotation.z = 2;
    this.scene.add(this.model.group);

    this.model.group.traverse((_child) => {
      if (_child instanceof THREE.Mesh) {
        _child.material = new THREE.MeshBasicMaterial({
          map: this.world.room.frameTexture,
        });
      }
    });
  }

  // Rotate the cake
  update() {
    // this.model.group.rotation.y = Math.sin(this.time.elapsed * 0.0003);
  }
}
