import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import gsap from "gsap";
import Nav from "./Nav";


function Hero() {
  useEffect(() => {
    // Scene, Camera, and Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 4;

    const canvas = document.querySelector("#heroCanvas");
    if (canvas) {
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.5; // Increased exposure for more contrast
      renderer.outputEncoding = THREE.sRGBEncoding;

      // Setup post-processing
      const composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);

      // Add blue-tinted RGB shift with increased values
      const rgbShiftPass = new ShaderPass(RGBShiftShader);
      rgbShiftPass.uniforms["amount"].value = 0.006; // Increased shift amount
      rgbShiftPass.uniforms["angle"].value = Math.PI * 0.5;
      composer.addPass(rgbShiftPass);

      // Add second RGB shift for stronger blue effect
      const blueShiftPass = new ShaderPass(RGBShiftShader);
      blueShiftPass.uniforms["amount"].value = 0.002; // Increased shift amount
      blueShiftPass.uniforms["angle"].value = Math.PI * 0.25;
      composer.addPass(blueShiftPass);

      // Load HDRI environment map
      const rgbeLoader = new RGBELoader();
      let model;
      rgbeLoader.load(
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/goegap_road_1k.hdr",
        (texture) => {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          scene.environment = texture;
          // scene.background = texture;
          // Load GLTF Model after environment is set
          const loader = new GLTFLoader();
          loader.load(
            "./DamagedHelmet.gltf",
            (gltf) => {
              model = gltf.scene;

              // Enhance material properties for more saturation and contrast
              model.traverse((child) => {
                if (child.isMesh && child.material) {
                  child.material.metalness = 0.9; // Increased metalness
                  child.material.roughness = 0.3; // Decreased roughness for more shine
                  child.material.envMapIntensity = 1.5; // Increased environment map intensity
                }
              });

              scene.add(model);

              // Center and scale the model
              const box = new THREE.Box3().setFromObject(model);
              const center = box.getCenter(new THREE.Vector3());
              model.position.x = -center.x;
              model.position.y = -center.y;
              model.position.z = -center.z;

              // Add enhanced lighting
              const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Increased ambient light
              scene.add(ambientLight);
              const directionalLight = new THREE.DirectionalLight(
                0xffffff,
                1.5
              ); // Increased directional light
              directionalLight.position.set(2, 2, 2);
              scene.add(directionalLight);
            },
            undefined,
            (error) => {
              console.error("An error occurred loading the model:", error);
            }
          );
        },
        
      );

      // Animation Loop
      const animate = () => {
        requestAnimationFrame(animate);
        composer.render();
      };
      animate();

      // Mouse move event handler
      window.addEventListener("mousemove", (e) => {
        if (model) {
          const rotationX =
            (e.clientX / window.innerWidth - 0.5) * (Math.PI * 0.12);
          const rotationY =
            (e.clientY / window.innerHeight - 0.5) * (Math.PI * 0.12);
          gsap.to(model.rotation, {
            x: rotationY,
            y: rotationX,
            duration: 0.8,
            ease: "power2.out",
          });
        }
      });

      // Handle Window Resize
      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
      });
    } else {
      console.error("Canvas element with ID 'heroCanvas' not found!");
    }
  }, []);

  return (
    <div className="text-white h-screen relative font-['Helvetica_Now_Display'] w-full">
      <Nav/>
      <div className="w-full bg-none  overflow-hidden">
        <img
          className=" absolute filter saturate-150 contrast-125 mix-blend-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="https://preview.redd.it/3d-rendered-the-cyberpunk-logo-using-blender-v0-khopj82wqee91.png?width=640&crop=smart&auto=webp&s=8c31445d1ee6f6993331b7d7d11bad170086631c"
          alt=""
        />
        <div className="md:w-[22rem] md:h-[22rem]  w-[60%] h-[60%]  bg-blue-600 blur-3xl rounded-full absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <canvas id="heroCanvas"></canvas>
      </div>
    </div>
  );
}

export default Hero;
