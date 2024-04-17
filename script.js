function showMenu() {
    document.getElementById("mobile-menu").style.display = "block";
    document.querySelector(".togg").style.display = "none";
    document.querySelector(".hid").style.display = "block";
}
function NoTshowMenu() {
    document.getElementById("mobile-menu").style.display = "none";
    document.querySelector(".togg").style.display = "block";
    document.querySelector(".hid").style.display = "none";
}

window.onload = function() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('renderCanvas') });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const loader = new THREE.OBJLoader();
  loader.load('./3d/drone.obj', function(object) {
    object.position.set(0, 0, -200); // Positionne l'objet dans la scène
    scene.add(object);
  });

  // Lumière ambiante pour la scène
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Lumière directionnelle pour éclairer l'objet
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);

  // Gestion de l'interaction utilisateur avec la caméra
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();
};


