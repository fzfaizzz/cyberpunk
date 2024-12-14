import * as THREE from "three";

// Scene, Camera, and Renderer Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Cube Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Renderer Setup
const canvas = document.querySelector('canvas');
if (canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01; // Rotate cube around X-axis
    cube.rotation.y += 0.01; // Rotate cube around Y-axis
    renderer.render(scene, camera);
  }
  animate();

  // Handle Window Resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight; // Update camera aspect ratio
    camera.updateProjectionMatrix(); // Apply updated projection matrix
    renderer.setSize(window.innerWidth, window.innerHeight); // Adjust renderer size
  });
} else {
  console.error("Canvas element with ID 'draw' not found!");
}
