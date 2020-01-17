let scene, camera, renderer, cube;

function init(){
     scene = new THREE.Scene();

     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

     renderer = new THREE.WebGLRenderer({antialias: true});

    renderer.setSize(window.innerWidth, window.innerHeight); //bepaald de aspect ratio

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.CylinderGeometry(2,2,5,64,1,false); //lengte, breedte, hoogte van cube
    const material = new THREE.MeshBasicMaterial({ color: 0x5BFFB1 }); //Kleur van de mesh

    //const texture = new THREE.TextureLoader().load('texture/Column.jpg');
    //const material = new THREE.MeshBasicMaterial({ map: texture });

    cube = new THREE.Mesh(geometry, material); //instantiering van de cube met variabelen geometry en material als parameters
    scene.add(cube);

    var light = new THREE.PointLight(0xFF3200, 100.0, 600);
    scene.add(light);

    camera.position.z = 10 // Verandert de camera afstand tot het object

    //lights
    //var light = new THREE.AmbientLight(0xFF3200, 0.5);
    //scene.add(light);


}



function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01; //snelheid rotatie x as
    cube.rotation.y += 0.01; //snelheid rotatie y as
    cube.rotation.z += 0.01;


    renderer.render(scene, camera);
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
