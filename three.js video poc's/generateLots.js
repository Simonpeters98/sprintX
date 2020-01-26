var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("myCanvas"), antialias: true});
renderer.setClearColor(0xFFFFFF);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(70,window.innerWidth / window.innerHeight, 0.1, 3000);
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

var geometry1 = new THREE.BoxGeometry(100, 100, 100);

var geometry2 = new THREE.RingGeometry(20, 55, 32);

var geometry3 = new THREE.SphereGeometry(100,32,32);

var geometry4 = new THREE.ConeGeometry(50,200,8);

var geometry5 = new THREE.CylinderGeometry(35,35,200,64,1,false);


for (var i = 0; i < 100; i++) {
  var mesh = new THREE.Mesh( geometry1, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

  mesh.position.x = Math.random() * 2000 - 1000;
  mesh.position.y = Math.random() * 1200 - 600;
  mesh.position.z = Math.random() * 800 - 400;

  mesh.castShadow = true;
  mesh.receiveShadow = true;

  scene.add( mesh );

  objects.push( mesh );
}

for (var i = 0; i < 100; i++) {
  var mesh1 = new THREE.Mesh( geometry2, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

  mesh1.position.x = Math.random() * 2000 - 1000;
  mesh1.position.y = Math.random() * 1200 - 600;
  mesh1.position.z = Math.random() * 1600 - 800;

  mesh1.castShadow = true;
  mesh1.receiveShadow = true;

  scene.add( mesh1 );

  objects.push( mesh1 );
}

for (var i = 0; i < 100; i++) {
  var mesh2 = new THREE.Mesh( geometry3, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

  mesh2.position.x = Math.random() * 2000 - 1000;
  mesh2.position.y = Math.random() * 1200 - 600;
  mesh2.position.z = Math.random() * 1600 - 800;

  mesh2.castShadow = true;
  mesh2.receiveShadow = true;

  scene.add( mesh2 );

  objects.push( mesh2 );
}

for (var i = 0; i < 100; i++) {
  var mesh3 = new THREE.Mesh( geometry4, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

  mesh3.position.x = Math.random() * 2000 - 1000;
  mesh3.position.y = Math.random() * 1200 - 600;
  mesh3.position.z = Math.random() * 1600 - 800;

  mesh3.castShadow = true;
  mesh3.receiveShadow = true;

  scene.add( mesh3 );

  objects.push( mesh3 );
}

for (var i = 0; i < 100; i++) {
  var mesh4 = new THREE.Mesh( geometry5, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

  mesh4.position.x = Math.random() * 2000 - 1000;
  mesh4.position.y = Math.random() * 1200 - 600;
  mesh4.position.z = Math.random() * 1600 - 800;

  mesh4.castShadow = true;
  mesh4.receiveShadow = true;

  scene.add( mesh4 );

  objects.push( mesh4 );
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





  controls.update()
  renderer.render(scene,camera);
  requestAnimationFrame(render);
}

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
