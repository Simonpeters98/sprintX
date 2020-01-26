var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("myCanvas"), antialias: true});
renderer.setClearColor(0xFFFFFF);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(35,window.innerWidth / window.innerHeight, 0.1, 3000);
var scene = new THREE.Scene();
camera.position.z = 1000

controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.minDistance = 1
controls.maxDistance = 2000

var light = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(light);

var light1 = new THREE.PointLight(0xFFFFFF, 0.3);
scene.add(light1);

var objects = [];
objects.forEach(myFunction);

function rotate(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}

//cubes
var geometry = new THREE.BoxBufferGeometry(50,50,50);


for (var i = 0; i < 100; i++) {
  var mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

  mesh.position.x = Math.random() * 1000 - 500;
  mesh.position.y = Math.random() * 600 - 300;
  mesh.position.z = Math.random() * 800 - 400;

  mesh.castShadow = true;
  mesh.receiveShadow = true;

  scene.add( mesh );

  objects.push( mesh );
}


var domEvents = new THREEx.DomEvents(camera,renderer.domElement)

domEvents.addEventListener(mesh, 'mouseover', event => {
    mesh.scale.set(1.5,1.5,1.5)
})
//change cylinder scale back to default on mouseout hover
domEvents.addEventListener(mesh, 'mouseout', event => {
  mesh.scale.set(1,1,1)
})


scene.add(mesh);


var domEvents = new THREEx.DomEvents(camera,renderer.domElement)
var sphereClicked
var planeClicked




requestAnimationFrame(render);
function render(){

mesh.rotation.x += 0.02



  controls.update()
  renderer.render(scene,camera);
  requestAnimationFrame(render);
}

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
