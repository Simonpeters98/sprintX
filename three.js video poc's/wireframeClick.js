//scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//sphere geometry
const geometry = new THREE.SphereGeometry(20,32,32)
const material = new THREE.MeshNormalMaterial({wireframe:true})
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

//cube geometry
const geometry1 = new THREE.BoxGeometry(20,20,20)
const material1 = new THREE.MeshNormalMaterial({wireframe:true})
const cube = new THREE.Mesh(geometry1, material1)
cube.position.x = -80
scene.add(cube)

//Adjust camera distance towards geometry
camera.position.z = 70

//orbit controls
controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.minDistance = 1
controls.maxDistance = 2000

//DomEvents setup
const domEvents = new THREEx.DomEvents(camera,renderer.domElements)
var sphereClicked = false
var cubeClicked = false

//Enable sphere wireframe onClick and disable with additional onClick.
domEvents.addEventListener(sphere, 'click', event =>{
  if (!sphereClicked){
    material.wireframe = false
    sphereClicked = true
  } else {
    material.wireframe = true
    sphereClicked = false
  }
})

//change sphere scale on mouseover hover
domEvents.addEventListener(sphere, 'mouseover', event =>{
  sphere.scale.set(2,2,2)
})

//return to default scale when mouseout
domEvents.addEventListener(sphere, 'mouseout', event =>{
  sphere.scale.set(1,1,1)
})

//change cube scale on mouseover hover
domEvents.addEventListener(cube, 'mouseover', event => {
    cube.scale.set(2,2,2)
})

//change cube scale back to default on mouseout hover
domEvents.addEventListener(cube, 'mouseout', event => {
  cube.scale.set(1,1,1)
})

//Enable sphere wireframe onClick and disable with additional onClick.
domEvents.addEventListener(cube, 'click', event =>{
  if (!cubeClicked){
    cube.material.wireframe = false
    cubeClicked = true
  } else {
    cube.material.wireframe = true
    cubeClicked = false
  }
})

//Animate scene
const animate = () => {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)

  sphere.rotation.x += 0.01
  cube.rotation.x += 0.01
}
animate()
