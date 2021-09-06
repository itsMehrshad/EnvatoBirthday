import * as THREE from "three";
import Experience from "./Experience.js";
import GoogleLeds from "./GoogleLeds.js";
import LoupedeckButtons from "./LoupedeckButtons.js";
import CoffeeSteam from "./CoffeeSteam.js";
import TopChair from "./TopChair.js";
import Cake from "./Cake.js";
import Hat from "./Hat.js";
import Streamer from "./Streamer.js";
import ElgatoLight from "./ElgatoLight.js";
import BouncingLogo from "./BouncingLogo.js";
import Screen from "./Screen.js";
import Screen2 from "./Screen2.js";
import Screen3 from "./Screen3.js";

export default class World {
  constructor(_options) {
    this.experience = new Experience();
    this.config = this.experience.config;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resources.on("groupEnd", (_group) => {
      if (_group.name === "base") {
        // this.setDummy()
        this.setRoom();
        this.setGoogleLeds();
        this.setLoupedeckButtons();
        this.setCoffeeSteam();
        this.setTopChair();
        this.setCake();
        this.setHat();
        this.setStreamer();
        this.setElgatoLight();
        this.setBouncingLogo();
        this.setScreens();
      }
    });
  }

  setRoom() {
    this.room = {};

    this.room.model = this.resources.items.roomModel.scene;

    this.room.texture = this.resources.items.bakedTexture;
    this.room.hattexture = this.resources.items.hatTexture;
    this.room.balloonTexture = this.resources.items.balloonTexture;
    this.room.cakeTexture = this.resources.items.cakeTexture;
    this.room.texture.encoding = THREE.sRGBEncoding;
    this.room.texture.flipY = false;

    this.room.material = new THREE.MeshBasicMaterial({
      map: this.room.texture,
    });

    this.room.model.traverse((_child) => {
      if (_child instanceof THREE.Mesh) {
        _child.material = this.room.material;
      }
    });

    this.scene.add(this.room.model);
  }

  setGoogleLeds() {
    this.googleLeds = new GoogleLeds();
  }

  setLoupedeckButtons() {
    this.loupedeckButtons = new LoupedeckButtons();
  }

  setCoffeeSteam() {
    this.coffeeSteam = new CoffeeSteam();
  }

  setTopChair() {
    this.topChair = new TopChair();
  }
  setCake() {
    this.Cake = new Cake();
  }
  setHat() {
    this.Hat = new Hat();
  }
  setStreamer() {
    this.Streamer = new Streamer();
  }

  setElgatoLight() {
    this.elgatoLight = new ElgatoLight();
  }

  setBouncingLogo() {
    this.bouncingLogo = new BouncingLogo();
  }

  setScreens() {
    this.pcScreen = new Screen3(
      this.resources.items.pcScreenModel.scene.children[0],
      "/assets/videoPortfolio.mp4"
    );
    this.macScreen = new Screen2(
      this.resources.items.macScreenModel.scene.children[0],
      "/assets/videoPortfolio.mp4"
    );
    this.tvScreen = new Screen(
      this.resources.items.tvScreenModel.scene.children[0],
      "/assets/MehrshadSpeaking.mp4"
    );

    this.tvScreen.model.mesh.position.x = 4.3;
    this.tvScreen.model.mesh.position.y = 2.6;
    this.tvScreen.model.mesh.position.z = 1.85;
    this.tvScreen.model.mesh.scale.x = 1.65;
    this.tvScreen.model.mesh.scale.y = 1.76;
    this.tvScreen.model.mesh.scale.z = 1.7;
    this.tvScreen.model.mesh.rotation.y = 0.005;
    console.log(this.tvScreen.model.mesh.scale);
  }

  resize() {}

  update() {
    if (this.googleLeds) this.googleLeds.update();

    if (this.loupedeckButtons) this.loupedeckButtons.update();

    if (this.coffeeSteam) this.coffeeSteam.update();

    if (this.topChair) this.topChair.update();

    if (this.Cake) this.Cake.update();

    if (this.Hat) this.Hat.update();

    if (this.Streamer) this.Streamer.update();

    if (this.bouncingLogo) this.bouncingLogo.update();
  }

  destroy() {}
}
