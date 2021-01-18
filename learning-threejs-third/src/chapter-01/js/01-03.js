function init() {
  // create a scene, that will hold all our elements such as objects, cameras and lights.
  let scene = new THREE.Scene();

  // create a camera, which defines where we're looking at.
  let camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // create a render and configure it with shadows
  let renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0x000000));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

  createTree(scene);
  createHouse(scene);
  createGroundPlane(scene);
  createBoundingWall(scene);

  // create a cube
  let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  let cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0000,
  });
  let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.castShadow = true;

  // position the cube
  cube.position.x = -4;
  cube.position.y = 2;
  cube.position.z = 0;

  // add the cube to the scene

  let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  let sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x7777ff,
  });
  let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  // position the sphere
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;
  sphere.castShadow = true;

  // create the ground plane
  let planeGeometry = new THREE.PlaneGeometry(60, 20);
  let planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xaaaaaa,
  });
  let plane = new THREE.Mesh(planeGeometry, planeMaterial);

  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(15, 0, 0);
  plane.receiveShadow = true;

  // add the objects
  scene.add(cube);
  scene.add(sphere);
  scene.add(plane);

  // position and point the camera to the center of the scene
  camera.position.x = -30;
  camera.position.y = 40;
  camera.position.z = 30;
  camera.lookAt(scene.position);

  // add spotlight for the shadows
  let spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(-40, 40, -15);
  spotLight.castShadow = true;
  spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
  spotLight.shadow.camera.far = 130;
  spotLight.shadow.camera.near = 40;

  // If you want a more detailled shadow you can increase the
  // mapSize used to draw the shadows.
  // spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
  scene.add(spotLight);

  let ambienLight = new THREE.AmbientLight(0x353535);
  scene.add(ambienLight);

  // add the output of the renderer to the html element
  document.getElementById("webgl-output").appendChild(renderer.domElement);

  // call the render function
  renderer.render(scene, camera);
}

function createBoundingWall(scene) {
  let wallLeft = new THREE.CubeGeometry(70, 2, 2);
  let wallRight = new THREE.CubeGeometry(70, 2, 2);
  let wallTop = new THREE.CubeGeometry(2, 2, 50);
  let wallBottom = new THREE.CubeGeometry(2, 2, 50);

  let wallMaterial = new THREE.MeshLambertMaterial({
    color: 0xa0522d,
  });

  let wallLeftMesh = new THREE.Mesh(wallLeft, wallMaterial);
  let wallRightMesh = new THREE.Mesh(wallRight, wallMaterial);
  let wallTopMesh = new THREE.Mesh(wallTop, wallMaterial);
  let wallBottomMesh = new THREE.Mesh(wallBottom, wallMaterial);

  wallLeftMesh.position.set(15, 1, -25);
  wallRightMesh.position.set(15, 1, 25);
  wallTopMesh.position.set(-19, 1, 0);
  wallBottomMesh.position.set(49, 1, 0);

  scene.add(wallLeftMesh);
  scene.add(wallRightMesh);
  scene.add(wallBottomMesh);
  scene.add(wallTopMesh);
}

function createGroundPlane(scene) {
  // create the ground plane
  let planeGeometry = new THREE.PlaneGeometry(70, 50);
  let planeMaterial = new THREE.MeshLambertMaterial({
    color: 'green',
  });
  let plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;

  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;

  scene.add(plane);
}

function createHouse(scene) {
  let roof = new THREE.ConeGeometry(5, 4);
  let base = new THREE.CylinderGeometry(5, 5, 6);

  // create the mesh
  let roofMesh = new THREE.Mesh(
    roof,
    new THREE.MeshLambertMaterial({
      color: 0x8b7213,
    })
  );
  let baseMesh = new THREE.Mesh(
    base,
    new THREE.MeshLambertMaterial({
      color: 0xffe4c4,
    })
  );

  roofMesh.position.set(25, 8, 0);
  baseMesh.position.set(25, 3, 0);

  roofMesh.receiveShadow = true;
  baseMesh.receiveShadow = true;
  roofMesh.castShadow = true;
  baseMesh.castShadow = true;

  scene.add(roofMesh);
  scene.add(baseMesh);
}

/**
 * Add the tree to the scene
 * @param scene The scene to add the tree to
 */
function createTree(scene) {
  let trunk = new THREE.CubeGeometry(1, 8, 1);
  let leaves = new THREE.SphereGeometry(4);

  // create the mesh
  let trunkMesh = new THREE.Mesh(
    trunk,
    new THREE.MeshLambertMaterial({
      color: 0x8b4513,
    })
  );
  let leavesMesh = new THREE.Mesh(
    leaves,
    new THREE.MeshLambertMaterial({
      color: 0x00ff00,
    })
  );

  // position the trunk. Set y to half of height of trunk
  trunkMesh.position.set(-10, 4, 0);
  leavesMesh.position.set(-10, 12, 0);

  trunkMesh.castShadow = true;
  trunkMesh.receiveShadow = true;
  leavesMesh.castShadow = true;
  leavesMesh.receiveShadow = true;

  scene.add(trunkMesh);
  scene.add(leavesMesh);
}
