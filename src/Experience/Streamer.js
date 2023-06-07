import * as THREE from "three";

import Experience from "./Experience.js";

export default class Streamer {
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

    this.model.group = this.resources.items.streamerModel.scene.children[0];
    // this.model.group.scale.x = 2;
    // this.model.group.scale.y = 2;
    // this.model.group.scale.z = 2;
    this.model.group.position.x = -3;
    this.model.group.position.y = 1.8;
    this.model.group.position.z = 0.5;
    this.scene.add(this.model.group);

    this.model.group.traverse((_child) => {
      if (_child instanceof THREE.Mesh) {
        _child.material = new THREE.MeshBasicMaterial({
          map: this.world.room.balloonTexture,
        });
      }
    });
  }

  // Rotate the Streamer
  update() {
    this.model.group.rotation.z = Math.cos(this.time.elapsed * 0.0005) * 0.8;
  }
}
