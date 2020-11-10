# THREEJS


## 1. **Scene**

---

The scene object is a container that is used to store and keep track of all the objects we want to render and all the lights we want to use. Without a `THREE.Scene` object, `Three.js` isn't able to render anything.`THREE.Scene` contains all the objects, lights, and other objects necessary for rendering.

It can also be called a scene graph. A scene graph consists of a set of nodes in a tree structure. Each object you can add to the scene in Three.js, and even `THREE.Scene` itself, extends from a base object named `THREE.Object3D`. A `THREE.Object3D` object can also have its own children, which you can use to create a tree of objects that Three.js will interpret and render.

### Methods

- `THREE.Scene.Add`: This adds an object to the scene
- `THREE.Scene.Remove`: This removes an object from the scene
- `THREE.Scene.children`: This gets a list of all the children in the scene
- `THREE.Scene.getObjectByName`: This gets a specific object, by name, from the scene
- `THREE.Scene.traverse()`: This will be called for each child of the scene.

### Functions and Attributes of the `THREE.Scene`

| Function/Property                  | Description                                                                                                                                                                                                                                                                                                           |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add(object)`                      | This is used to add an object to the scene. You can also use this function to create groups of objects.                                                                                                                                                                                                               |
| `children`                         | This returns a list of all the objects that have been added to the scene, including the camera and lights.                                                                                                                                                                                                            |
| `getObjectByName(name, recursive)` | When you create an object, you can give it a distinct name. The scene object has a function that you can use to directly return an object with a specific name. If you set the recursive argument to true, Three.js will also search through the complete tree of objects to find the object with the specified name. |
| `remove(object)`                   | If you have a reference to an object in the scene, you can also remove it from the scene using this function.                                                                                                                                                                                                         |
| `traverse(function)`               | The children property returns a list of all the children in the scene. With the traverse function, we can also access these children. With traverse, all the children are passed into the supplied function one by one.                                                                                               |
| `overrideMaterial`                 | With this property, you can force all the objects in the scene to use the same material.                                                                                                                                                                                                                              |

## 2. **Renderer**

---

The renderer object is responsible for calculating what the scene object will look like in the browser based on what the camera is looking at.

> If you look through the source code and the documentation of Three.js (which you can find at http://threejs.org/), you'll notice that there are different renderers available besides the WebGL-based one. There is a canvas-based renderer, a CSS-based renderer, and even an SVG-based one.Even though they work and can render simple scenes, I wouldn't recommend using them. They're not actively developed anymore, very CPU-intensive, and lack features such as good material support and shadows.

## 3. **Plane**

---

A two dimensional surface that extends infinitely in 3d space, represented in Hessian normal form by a unit length normal vector and a constant.

Before we add plane to the scene, we need to put it in the correct position; we do this by first rotating it 90 degrees around the x axis, and next, set its position in the scene using the position property.

## 4. **Objects**

---

These are the main objects that are rendered from the perspective of the camera, they include cubes, spheres, and point clouds.

### Type of object: Mesh

Meshes are the most common kind of visible object used in 3D computer graphics, and are used to display all kinds of 3D objects

#### How to Create a Mesh

> To create a mesh, we need a geometry and one or more materials

```javascript
let vertices = [
  new THREE.Vector3(1, 3, 1),
  new THREE.Vector3(1, 3, -1),
  new THREE.Vector3(1, -1, 1),
  new THREE.Vector3(1, -1, -1),
  new THREE.Vector3(-1, 3, -1),
  new THREE.Vector3(-1, 3, 1),
  new THREE.Vector3(-1, -1, -1),
  new THREE.Vector3(-1, -1, 1),
];

let faces = [
  new THREE.Face3(0, 2, 1),
  new THREE.Face3(2, 3, 1),
  new THREE.Face3(4, 6, 5),
  new THREE.Face3(6, 7, 5),
  new THREE.Face3(4, 5, 1),
  new THREE.Face3(5, 0, 1),
  new THREE.Face3(7, 6, 2),
  new THREE.Face3(6, 3, 2),
  new THREE.Face3(5, 7, 0),
  new THREE.Face3(7, 2, 0),
  new THREE.Face3(1, 3, 4),
  new THREE.Face3(3, 6, 4),
];

let geometry = new THREE.Geometry();
geometry.vertices = vertices;
geometry.faces = faces;
geom.computeFaceNormals();

let materials = [
  new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true }),
  new THREE.MeshLambertMaterial({
    opacity: 0.6,
    transparent: true,
    color: 0x44ff44,
  }),
];

let mesh = THREE.SceneUtils.createMultiMaterialObject(geometry, materials);
mesh.castShadow = true;
mesh.children.forEach(function (e) {
  e.castShadow = true;
});

scene.add(mesh);
```

#### Functions and attributes for meshes

| Function/Property    | Description                                                                                                                                                                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| position             | This determines the position of this object relative to the position of its parent. Most often, the parent of an object is a` THREE.Scene` object or a `THREE.Object3D` object.                                                           |
| rotation             | With this property, you can set the rotation of an object around any of its axes. Three.js also provides specific functions for rotations around an axis:  `rotateX()`, `rotateY()`, and `rotateZ()`.                                     |
| scale                | This property allows you to scale the object around its x, y, and z axes.                                                                                                                                                                 |
| `translateX(amount)` | This property moves the object a specified amount along the x axis.                                                                                                                                                                       |
| `translateY(amount)` | This property moves the object a specified amount along the y axis.                                                                                                                                                                       |
| `translateZ(amount)` | This property moves the object a specified amount over the z axis. For the translate functions, you could also use the translateOnAxis(axis, distance) function, which allows you to translate the mesh a distance along a specific axis. |
| visible              | If you set this property to false, THREE.Mesh won't be rendered by Three.js.                                                                                                                                                              |

## 5. Camera

---

### Different cameras for different uses

There are two different camera types in Three.js: the `orthographic` camera and the `perspective` camera.

#### **`Perspective`**:

This is the most natural view. The farther away the cubes are from the camera, the smaller they are rendered.

```js
let camera = new PerspectiveCamera(
  50, //fov
  window.innerWidth / window.innerHeight, //aspect
  0.1, //near
  1000 //far
);
```

- #### **_Aruguments of `THREE.PerspectiveCamera` camera_**

| Argument | Description                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fov      | Field Of View (FOV) is the part of the scene that can be seen from the position of the camera. Humans, for instance, have an almost 180-degree FOV, while some birds might even have a complete 360-degree FOV. <br/><br/> But since a normal computer screen doesn't completely fill our vision, a smaller value is often chosen. Generally, for games, a FOV between 60 and 90 degrees is chosen.<br/><br/> `Good default: 50` |
| aspect   | This is the aspect ratio between the horizontal and vertical sizes of the area where we're rendering the output. In our case, since we use the entire window, we just use that ratio. The aspect ratio determines the difference between the horizontal FOV and the vertical FOV.<br/><br/> `Good default: window.innerWidth / window.innerHeight `                                                                              |
| near     | The near property defines from how close to the camera Three.js should render the scene. Normally, we set this to a very small value to directly render everything from the position of the camera.<br/><br/>`Good default: 0.1`                                                                                                                                                                                                 |
| far      | The far property defines how far the camera can see from the position of the camera. If we set this too low, a part of our scene might not be rendered, and if we set it too high, in some cases, it might affect the rendering performance.<br/><br/> `Good default: 1000 `                                                                                                                                                     |
| zoom     | The zoom property allows you to zoom in and out of the scene. When you use a number lower than 1, you zoom out of the scene, and if you use a number higher than 1, you zoom in. Note that if you specify a negative value, the scene will be rendered upside down. <br/><br/> `Good default value: 1`                                                                                                                           |

> The fov property of the camera determines the horizontal FOV. Based on the aspect property, the vertical FOV is determined. The near property is used to determine the position of the near plane, and the far property determines the position of the far plane. The area between the near plane and the far plane will be rendered.

#### **`Orthographic`**:

With the orthographic camera, all the cubes are rendered the same size; the distance between an object and the camera doesn't matter. This is often used in 2D games, such as SimCity 4 and old versions of Civilization:

```javascript
let camera = new OrthographicCamera(
  window.innerWidth / -16, //left
  window.innerWidth / 16, // right
  window.innerHeight / 16, //top,
  window.innerHeight / -16, // bottom
  -200, //near
  500 //far
);
```

- #### **_Aruguments of `orthographic` camera_**

| Argument | Description                                                                                                                                                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| left     | This is described in the Three.js documentation as Camera frustum left plane. You should see this as the left-hand border of what will be rendered. If you set this value to -100, you won't see any objects that are farther to the left-hand side.                             |
| right    | The right property works in a way similar to the left property, but this time, to the other side of the screen. Anything farther to the right won't be rendered.                                                                                                                 |
| top      | This is the top position to be rendered.                                                                                                                                                                                                                                         |
| bottom   | This is the bottom position to be rendered.                                                                                                                                                                                                                                      |
| near     | From this point, based on the position of the camera, the scene will be rendered.                                                                                                                                                                                                |
| far      | To this point, based on the position of the camera, the scene will be rendered.                                                                                                                                                                                                  |
| zoom     | This allows you to zoom in and out of the scene. When you use a number lower than 1, you'll zoom out of the scene; if you use a number higher than 1, you'll zoom in. Note that if you specify a negative value, the scene will be rendered upside down. The default value is 1. |

### Looking at specific points

Normally, the camera is pointed to the center of the scene: position (0,0,0). We can, however, easily change what the camera is looking at, as follows:

```js
camera.lookAt(new THREE.Vector3(x, y, z));
```

When you use the lookAt function, you point the camera at a specific position. You can also use this to make the camera follow an object around the scene. Since every THREE.Mesh object has a position that is a `THREE.Vector3` object, you can use the lookAt function to point to a specific mesh in the scene. All you need to do is this: `camera.lookAt(mesh.position)`.

## 6. Axis

---

This is for drawing the **x : red** , **y: green** and **z : blue** axis.

```javascript
// show axes in the screen
let axes = new THREE.AxesHelper(20);
scene.add(axes);
```

## 7. Fog

---

The `fog` property lets you add a fog effect to the complete scene; the farther an object is from the camera, the more it will be hidden from sight. The preceding two properties can be used to tune how the mist appears. The 10 value sets the near property, and the 100 value sets the far property. With these properties, you can determine where the mist starts and how fast it gets denser. With the THREE.Fog object, the fog increases linearly.

```js
scene.fog = new THREE.Fog("green", 10, 100);
```

There is also a different way to set the mist for the scene; for this, use the following definition:

```js
scene.fog = new THREE.FogExp2("green", 0.01);
```

This time, we don't specify near and far, but just the color (green) and the mist's density (0.01)

## 8. Geometry

---

Geometry defines the shape of the objects we draw in Three.js. **_A geometry in Three.js, and in most other 3D libraries, is basically a collection of points in a 3D space, also called vertices_** (where a single point is called a vertex), and a number of faces connecting those points together. Take, for example, a cube:

- A cube has eight corners. Each of these corners can be defined as an x, y, and z coordinate. So each cube has eight points in a 3D space.
- A cube has six sides, with a vertex at each corner. In Three.js, a face always consists of three vertices that make a triangle. So, in the case of a cube, each side consists of two triangles to make the complete side.

Three.js comes with a large set of geometries out of the box that you can use in your 3D scene. Just add a material, create a mesh, and you're pretty much done.

## 10. Colors: `THREE.Color`

In Three.js, when you need to provide a color (for example, for materials, lights, and so on.) you can pass in a `THREE.Color` object, or Three.js will create one from a passed-in string value, as we've seen for THREE.AmbientLight. Three.js is very flexible when parsing the input for the `THREE.Color` constructor. You can create a `THREE.Color` object in the following ways:

- Empty constructor: `new THREE.Color()` will create a white color object.
- Hex value: `new THREE.Color(0xababab)` will parse the passed-in hex value and create a color from that. This is the preferred way of creating colors.
- Hex string: new `THREE.Color("#ababab")` will create a color based on the passed-in CSS color string.
- RGB string: `new THREE.Color("rgb(255, 0, 0)")` or new` THREE.Color("rgb(100%, 0%, 0%)"` .
- Color name: You can use named colors as well—new `THREE.Color( 'skyblue' )`.
- HSL string: If you like working in the HSL domain, instead of the RGB domain, you can pass in the HSL values—new `THREE.Color("hsl(0, 100%, 50%)")`.
- Separate RGB values: And you can specify the individual RGB components on a scale from 0 to 1.

### Functions to set and get information about color:

| Name                      | Description                                                                                                                                                                                                                                                    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| set(value)                | Set the value of this color to the supplied hex value. This hex value may be a string, a number, or an existing THREE.Color instance.                                                                                                                          |
| setHex(value)             | Set the value of this color to the supplied numeric hex value.                                                                                                                                                                                                 |
| setRGB(r,g,b)             | Set the value of this color based on the supplied RGB values. The values range from 0 to 1.                                                                                                                                                                    |
| setHSL(h,s,l)             | Set the value of this color on the supplied HSL values. The values range from 0 to 1.                                                                                                                                                                          |
| setStyle(style)           | Set the value of this color based on the CSS way of specifying colors. For instance, you could use "rgb(255,0,0)", "#ff0000", "#f00", or even "red".                                                                                                           |
| copy(color)               | Copy the color values from the THREE.Color instance provided to this color.                                                                                                                                                                                    |
| copyGammaToLinear(color)  | Set the color of this object based on the THREE.Color instance supplied. The color is first converted from the gamma color space to the linear color space. The gamma color space also uses RGB values, but uses an exponential scale instead of a linear one. |
| copyLinearToGamma(color)  | Set the color of this object based on the THREE.Color instance supplied. The color is first converted from the linear color space to the gamma color space.                                                                                                    |
| convertGammaToLinear()    | This converts the current color from the gamma color space to the linear color space.                                                                                                                                                                          |
| convertLinearToGamma()    | This converts the current color from the linear color space to the gamma color space.                                                                                                                                                                          |
| getHex()                  | Return the value from this color object as a number: 435241 .                                                                                                                                                                                                  |
| getHexString()            | Return the value from this color object as a hex string: "0c0c0c" .                                                                                                                                                                                            |
| getStyle()                | Return the value from this color object as a CSS-based value: "rgb(112,0,0)".                                                                                                                                                                                  |
| getHSL(optionalTarget)    | Return the value from this color object as a HSL value. If you provide the optionalTarget object, Three.js will set the h, s, and l properties on that object.                                                                                                 |
| offsetHSL(h, s, l)        | Add the h, s, and l values provided to the h, s, and l values of the current color.                                                                                                                                                                            |
| add(color)                | This adds the r, g, and b values of the color supplied to the current color.                                                                                                                                                                                   |
| addColors(color1, color2) | Add color1 and color2, and set the value of the current color to the result.                                                                                                                                                                                   |

---

---

## **Requirements for creating a threejs project**

1. Adding a scene

   ```javascript
   // create a scene, that will hold all our elements such as objects, cameras and lights
   let scene = new THREE.Scene();
   ```

2. Add a camera

   This determines what is rendered on the screen.

   ```javascript
   // create a camera, which defines where we're looking at.
   let camera = new THREE.PerspectiveCamera(
     45,
     window.innerWidth / window.innerHeight,
     0.1,
     1000
   );
   ```

3. Add a renderer

   Uses the camera and the information from the scene to draw the output on the screen.

   ```javascript
   // create a render and configure it with shadows
   let renderer = new THREE.WebGLRenderer();
   renderer.setClearColor(new THREE.Color(0x000000));
   renderer.setSize(window.innerWidth, window.innerHeight);
   ```

4. Add a light source

   These have an effect on how materials are shown and are used when creating shadow effects

   ```javascript
   // add spotlight for the shadows
   let spotLight = new THREE.SpotLight(0xffffff); // this is a type of light
   spotLight.position.set(-40, 40, -15);
   spotLight.castShadow = true;
   spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
   spotLight.shadow.camera.far = 130;
   spotLight.shadow.camera.near = 40;
   // shadow.mapSize, shadow.camera.far, and shadow.camera.near, these properties define how sharp and detailed our rendered shadow will appear

   // If you want a more detailled shadow you can increase the
   // mapSize used to draw the shadows.
   // spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
   scene.add(spotLight);
    ---
   //For ambientLight
   let ambienLight = new THREE.AmbientLight(0x353535);
   scene.add(ambienLight);

   // add spotlight for the shadows
   let spotLight = new THREE.SpotLight(0xffffff);
   spotLight.position.set(-10, 20, -5);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

5. Add a plane

   ```javascript
   // create the ground plane
   let planeGeometry = new THREE.PlaneGeometry(60, 20);
   let planeMaterial = new THREE.MeshBasicMaterial({
     color: 0xaaaaaa,
   });
   let plane = new THREE.Mesh(planeGeometry, planeMaterial);

   // rotate and position the plane
   plane.rotation.x = -0.5 * Math.PI;
   plane.position.set(15, 0, 0);

   // add the plane to the scene
   scene.add(plane);
   ```

## **NOTES**

1.  > `THREE.MeshBasicMaterial)` doesn't do anything with the light sources in the scene
2.  > `MeshPhysicalMaterial` and `MeshStandardMaterial` (and the `deprecated MeshPhongMaterial`) are the materials _Three.js_ provides that take light sources into account when rendered.
3.  > `THREE.Scene` serves as the container for the lights and the objects. `THREE.Scene` itself doesn't have that many options and functions.
4.  > A name is very useful for debugging purposes but can also be used to directly access an object from your scene. If you use the `THREE.Scene.getObjectByName(name)` function, you can directly retrieve a specific object and,
    >
    > ```js
    > let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    > cube.castShadow = true;
    > cube.name = "cube-" + scene.children.length;
    > ```
5.  > When you use `overrideMaterial`, all the objects in the scene will use the material that is set to the `overrideMaterial` property and ignore the material that is set on the object itself including the color too.
6.  > We can set an object's position property in three different ways
    >
    > - We can set each coordinate directly:
    >
    > ```javascript
    > cube.position.x = 10;
    > cube.position.y = 3;
    > cube.position.z = 1;
    > ```
    >
    > - However, we can also set all of them at once, as follows:
    >
    > ```javascript
    > cube.position.set(10, 3, 1);
    > ```
    >
    > - There is also a third option; the position property is `THREE.Vector3` object. That means we can also do the following to set this object:
    >
    > ```js
    > cube.postion = new THREE.Vector3(10, 3, 1);
    > ```
7.  > Adding zooming effect
    >
    > ```javascript
    > let zoomControl = new TrackballControls(camera, renderer.domElement);
    > let clock = new Clock();
    >
    > let zoom = () => {
    >   zoomControl.update(clock.getDelta());
    >   renderer.render(scene, camera);
    >   requestAnimationFrame(zoom);
    > };
    > zoom();
    > ```
