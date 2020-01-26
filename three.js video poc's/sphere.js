var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("myCanvas"), antialias: true});
renderer.setClearColor(0xFFFFFF);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(35,window.innerWidth / window.innerHeight, 0.1, 3000);


// var light = new THREE.AmbientLight(0xFFFFFF, 0.5);
// scene.add(light);
//
// var light1 = new THREE.PointLight(0xFFFFFF, 0.3);
// scene.add(light1);


//sphere
var geometry1 = new THREE.SphereGeometry(100,32,32);
var material1 = new THREE.MeshNormalMaterial({wireframe:true});
var mesh1 = new THREE.Mesh(geometry1, material1);
mesh1.position.set(0,0,-200);
scene.add(mesh1);

var domEvents = new THREEx.DomEvents(camera,renderer.domElement)

domEvents.addEventListener(mesh1 ,'click', event => {
 material.wireframe = false
})


camera.position.z = 1000



controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.minDistance = 1
controls.maxDistance = 2000




requestAnimationFrame(render);
function render(){


  mesh1.rotation.x += 0.02;
  mesh1.rotation.y += 0.02;



  controls.update()
  renderer.render(scene,camera);
  requestAnimationFrame(render);
}

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
