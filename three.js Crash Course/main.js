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
    
    const geometry = new THREE.BoxGeometry(2, 2, 2); //lengte, breedte, hoogte van cube
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff }); //Kleur van de mesh

    //const texture = new THREE.TextureLoader().load('texture/Column.jpg');
    //const material = new THREE.MeshBasicMaterial({ map: texture });

    cube = new THREE.Mesh(geometry, material); //instantiering van de cube met variabelen geometry en material als parameters
    scene.add(cube);
    
    camera.position.z = 5 // Verandert de camera afstand tot het object 
}



function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01; //snelheid rotatie x as
    cube.rotation.y += 0.01; //snelheid rotatie y as
    

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
