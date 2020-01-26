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
//
var light1 = new THREE.PointLight(0xFFFFFF, 0.3);
scene.add(light1);

//cubes
var geometry = new THREE.BoxGeometry(150, 200, 150);
var material = new THREE.MeshLambertMaterial({color: 0x5290FF   });
var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(500,0,-200);

// var geometry1 = new THREE.CubeGeometry(100,100,100);
// var material1 = new THREE.MeshLambertMaterial({color: 0xABE7FF});
// var mesh1 = new THREE.Mesh(geometry1, material1);
// mesh1.position.set(500,200,-200);
//
// var geometry2 = new THREE.CubeGeometry(100,100,100);
// var material2 = new THREE.MeshLambertMaterial({color: 0xFF9A00});
// var mesh2 = new THREE.Mesh(geometry2, material2);
// mesh2.position.set(500,-200,-200);
//
// var geometry3 = new THREE.CubeGeometry(100,100,100);
// var material3 = new THREE.MeshLambertMaterial({color: 0xF7FE00});
// var mesh3 = new THREE.Mesh(geometry3, material3);
// mesh3.position.set(-500,-200,-200);
//
// //sphere
var geometry4 = new THREE.SphereGeometry(100,32,32);
var material4 = new THREE.MeshLambertMaterial({color: 0xFE0000});
var mesh1 = new THREE.Mesh(geometry4, material4);
mesh1.position.set(-500,0,-200);
//
// //cone
var geometry5 = new THREE.ConeGeometry(50,200,8);
var material5 = new THREE.MeshLambertMaterial({color: 0x2CFE00 });
var mesh2 = new THREE.Mesh(geometry5, material5);
mesh2.position.set(250,0,-200);
//
// //ring
var geometry = new THREE.RingGeometry(40, 110, 32);
var material = new THREE.MeshLambertMaterial({color: 0xF4FF00});
var mesh3 = new THREE.Mesh(geometry, material);
mesh3.position.set(0,0,-200);
//
// //Cylinders
var geometry7 = new THREE.CylinderGeometry(35,35,200,64,1,false);
var material7 = new THREE.MeshLambertMaterial({color: 0xFF9BD1});
var mesh4 = new THREE.Mesh(geometry7, material7);
mesh4.position.set(-250,0,-200);
//
// var geometry8 = new THREE.CylinderGeometry(35,35,150,64,1,false);
// var material8 = new THREE.MeshLambertMaterial({color: 0x0029FE});
// var mesh8 = new THREE.Mesh(geometry8, material8);
// mesh8.position.set(250,0,-200);
//
// //plane
// var geometry9 = new THREE.PlaneGeometry(2000,2000);
// var material9 = new THREE.MeshLambertMaterial({color: 0x0029FE});
// var mesh9 = new THREE.Mesh(geometry9, material9);
// mesh9.rotation.set(-Math.PI/2, Math.PI/2000, Math.PI);
// mesh9.position.set(0,-500,0);

scene.add(mesh, mesh1, mesh2, mesh3, mesh4);


var domEvents = new THREEx.DomEvents(camera,renderer.domElement)
var sphereClicked
var planeClicked


domEvents.addEventListener(mesh1, 'click', event =>{
  if (!sphereClicked){
    mesh1.material.wireframe = false
    sphereClicked = true
  } else {
    mesh1.material.wireframe = true
    sphereClicked = false
  }
})
//
// //change cylinder scale on mouseover hover
domEvents.addEventListener(mesh4, 'mouseover', event => {
    mesh4.scale.set(1.5,1.5,1.5)
})
//change cylinder scale back to default on mouseout hover
domEvents.addEventListener(mesh4, 'mouseout', event => {
  mesh4.scale.set(1,1,1)
})
//
// //change cylinder scale on mouseover hover
// domEvents.addEventListener(mesh8, 'mouseover', event => {
//     mesh8.scale.set(1.5,1.5,1.5)
// })
// //change cylinder scale back to default on mouseout hover
// domEvents.addEventListener(mesh8, 'mouseout', event => {
//   mesh8.scale.set(1,1,1)
// })
//
// //change color of plane and revert to default color
domEvents.addEventListener(mesh3, 'click', event =>{
  if (!planeClicked){
    mesh3.material.color.setHex(0xFFAD00 );
    planeClicked = true
  } else {
    mesh3.material.color.setHex(0xF4FF00);
    planeClicked = false
  }
})
//
//change cube lt rotation speed on mouseover
domEvents.addEventListener(mesh2, 'mouseover', event => {
    mesh2.rotation.y += 0.2;
    mesh2.rotation.x += 0.2;


})

domEvents.addEventListener(mesh, 'dblclick', event => {
scene.remove(mesh)


})

domEvents.addEventListener(mesh1, 'dblclick', event => {
scene.remove(mesh1)


})

domEvents.addEventListener(mesh2, 'dblclick', event => {
scene.remove(mesh2)


})

domEvents.addEventListener(mesh3, 'dblclick', event => {
scene.remove(mesh3)


})

domEvents.addEventListener(mesh4, 'dblclick', event => {
scene.remove(mesh4)


})
//
// //change cube rt rotation speed on mouseover
// domEvents.addEventListener(mesh1, 'mouseover', event => {
//     mesh1.rotation.x += 0.1;
// })
//
// //change cube rb rotation speed on mouseover
// domEvents.addEventListener(mesh2, 'mouseover', event => {
//     mesh2.rotation.x += 0.1;
// })
//
// //change cube lb rotation speed on mouseover
// domEvents.addEventListener(mesh3, 'mouseover', event => {
//     mesh3.rotation.x += 0.1;
// })

requestAnimationFrame(render);
function render(){
  //
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;

  mesh1.rotation.x += 0.01;
  mesh1.rotation.y += 0.01;
  //
  mesh2.rotation.x += 0.01;
  mesh2.rotation.y += 0.01;
  //
  mesh3.rotation.x += 0.01;
  mesh3.rotation.y += 0.01;
  //
  mesh4.rotation.x += 0.01;
  mesh4.rotation.y += 0.01;
  //
  // mesh5.rotation.x += 0.01;
  // mesh5.rotation.y += 0.01;
  //
  // mesh6.rotation.x += 0.0;
  // mesh6.rotation.y += 0.05;
  //
  // mesh7.rotation.x += 0.01;
  // mesh7.rotation.y += 0.0;
  // mesh7.rotation.z += 0.01;
  //
  //
  // mesh8.rotation.x += 0.01;
  // mesh8.rotation.y += 0.0;
  // mesh8.rotation.z += -0.01;

  controls.update()
  renderer.render(scene,camera);
  requestAnimationFrame(render);
}

renderer.render(scene, camera);
//document.body.appendChild(renderer.domElement);
