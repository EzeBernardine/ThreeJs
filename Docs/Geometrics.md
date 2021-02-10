# Geometry

Geometry defines the shape of the objects we draw in Three.js. **_A geometry in Three.js, and in most other 3D libraries, is basically a collection of points in a 3D space, also called vertices_** (where a single point is called a vertex), and a number of faces connecting those points together. Take, for example, a cube:

- A cube has eight corners. Each of these corners can be defined as an x, y, and z coordinate. So each cube has eight points in a 3D space.
- A cube has six sides, with a vertex at each corner. In Three.js, a face always consists of three vertices that make a triangle. So, in the case of a cube, each side consists of two triangles to make the complete side.

Three.js comes with a large set of geometries out of the box that you can use in your 3D scene. Just add a material, create a mesh, and you're pretty much done.

> ## Two main options Three.js provides for representing geometries: a
>
> # 1. `THREE.BufferGeometry` and a
>
> # 2. `THREE.Geometry`

**_You don't need to think about the differences between these two different types of geometries_**. If you want to use a `THREE.Geometry`, you can use the geometries shown at the beginning of this chapter. If you want to use the ` THREE.BufferGeometry` variant, you just add the word Buffer to the name of the geometry, for example, THREE.PlaneGeometry becomes THREE.PlaneBufferGeometry. Everything else stays the same.

Sometimes, you might need to convert between a `THREE.Geometry`-based shape and a `THREE.BufferGeometry`-based shape. For instance, some of the loaders provided by Three.js load a model into a `THREE.BufferGeometry`. If you want to change some part of the loaded model, it is often easier to convert it into a `THREE.Geometry` and work with the vertices and faces properties instead of working with the big attributes array from a `THREE.BufferGeometry`. To do this, the `THREE.Geometry` provides the fromBufferGeometry function, which takes a `THREE.BufferGeometry` and uses that to set the properties of the `THREE.Geometry`. Vice versa, the `THREE.BufferGeometry` has the fromGeometry function to set the attributes property based on the information from a `THREE.Geometry`. For example, to convert from a `THREE.BufferGeometry` to a `THREE.Geometry`, you can use the following code:

```javascript
var normalGeometry = new THREE.Geometry();
normalGeometry.fromBufferGeometry(bufferGeometry);
```

And vice versa, from a normal `THREE.Geomtry` to a `THREE.BufferGeometry`:

```javascript
var bufferGeometry = new `THREE.BufferGeometry`();
bufferGeometry.fromGeometry(normalGeometry);
```

# The basic geometries provided by Three.js

# A. 2D geometries includes

### 1. `THREE.PlaneGeometry`

- A PlaneGeometry object can be used to create a very simple 2D rectangle

```javascript
let materiel = new MeshBasicMaterial({ color: "grey" });

let planeGeo = new PlaneGeometry(5, 5, 100, 2000);
// let circleGoe = new PlaneGeometry(width, height, widthSegments, heightSegments);
let planeGeometry = new Mesh(planeGeo, materiel);
planeGeometry.position.set(0, 5, 0);
planeGeometry.castShadow = true;
planeGeometry.rotateX(45);
```

### 2. `THREE.CircleGeometry`

#### Properties

| Property    | Mandatory | Description                                                                                                                                                                                                                                                                                                     |
| ----------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| radius      | No        | The radius of a circle defines its size. The radius is the distance from the center of the circle to its side. The default value is 50.                                                                                                                                                                         |
| segments    | No        | This property defines the number of faces that are used to create the circle. The minimum number is 3, and if not specified, this number defaults to 8. A higher value means a smoother circle.                                                                                                                 |
| thetaStart  | No        | This property defines the position from which to start drawing the circle. This value can range from 0 to `2 \* PI`, and the default value is 0.                                                                                                                                                                |
| thetaLength | No        | This property defines to what extent the circle is completed. This defaults to `2 \* PI` (a full circle) when not specified. For instance, if you specify `0.5 \* PI` for this value, you'll get a quarter circle. Use this property together with the `thetaStart` property to define the shape of the circle. |

```javascript
let materiel = new MeshBasicMaterial({ color: "grey" });

let circleGoe = new CircleGeometry(5, 7, 0, Math.PI);
// This creates a circle with a radius of 5 that is split into 7 segments. The circle starts at a default of 0, and is only drawn halfway since we specify the thetaLength as Math.PI, which is half a circle.

let circleGoemetry = new Mesh(circleGoe, materiel);
circleGoemetry.position.set(10, 5, 10);
```

### 3. `THREE.RingGeometry`

`RingGeometry(innerRadius : Float, outerRadius : Float, thetaSegments : Integer, phiSegments : Integer, thetaStart : Float, thetaLength : Float)`

- innerRadius — Default is 0.5.
- outerRadius — Default is 1.
- thetaSegments — Number of segments. A higher number means the ring will be more round. - Minimum is 3. Default is 8.
- phiSegments — Minimum is 1. Default is 8.
- thetaStart — Starting angle. Default is 0.
- thetaLength — Central angle. Default is `Math.PI` \* 2.

### Properties

| Property      | Mandatory | Description                                                                                                                                                                                                                                                                                        |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| innerRadius   | No        | The inner radius of a circle defines the size of the center hole. If this property is set to 0no hole will be shown. The default value is 0.                                                                                                                                                       |
| outerRadius   | No        | The outer radius of a circle defines its size. The radius is the distance from the center of the circle to its side. The default value is 50.                                                                                                                                                      |
| thetaSegments | No        | This is the number of diagonal segments that will be used to create the circle. A higher value means a smoother ring. The default value is 8.                                                                                                                                                      |
| phiSegments   | No        | This is the number of segments required to be used along the length of the ring. The default value is 8. This doesn't really affect the smoothness of the circle but increases the number of faces.                                                                                                |
| thetaStart    | No        | This defines the position from which to start drawing the circle. This value can range from 0 to `2 \* PI`, and the default value is 0.                                                                                                                                                            |
| thetaLength   | No        | This defines the extent to which the circle is completed. This defaults to 2 _ PI(a full circle) when not specified. For instance, if you specify 0.5 _ PI for this value, you'll get a quarter circle. Use this property together with the thetaStart property to define the shape of the circle. |

```javascript
let materiel = new MeshBasicMaterial({ color: "grey" });
let ringGeo = new RingGeometry(4, 5);
let ringGeometry = new Mesh(ringGeo, materiel);
```

### 4. `THREE.ShapeGeometry`

#### Parameters you can pass into THREE.ShapeGeometry:

| Property | Mandatory | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| shapes   | Yes       | These are one or more THREE.Shape objects that are used to create THREE.Geometry. You can either pass in a single THREE.Shape object or an array of THREE.Shape objects.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| options  | No        | You can also pass in some options that are applied to all the shapes passed in with the shapes argument. An explanation of these options is given here:<br /> <br /> **curveSegments**: This property determines how smooth the curves created from the shape are. The default value is 12.<br /> <br /> **material**: This is the materialIndex property that is used for the faces that are created for the specified shapes. When you use THREE.MeshFaceMaterial together with this geometry, the materialIndex property determines which of the materials passed in is used for the faces of the shapes passed in. <br /> <br /> **UVGenerator**: When you use a texture with your material, the UV mapping determines what part of a texture is used for a specific face. With the UVGenerator property, you can pass in your own object, which will create the UV settings for the faces that are created for the shapes passed in. More information on UV settings can be found in Chapter 10, Loading and Working with Textures. If none are specified, THREE.ExtrudeGeometry.WorldUVGenerator is used. |

#### List of drawing functions you can use to create THREE.Shape.

| Name                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| moveTo(x,y)                                                              | Move the drawing position to the x and y coordinates that are specified.                                                                                                                                                                                                                                                                                                                                                                |
| lineTo(x,y)                                                              | Draw a line from the current position (for example, set by the moveTo function) to the x and y coordinates that have been provided.                                                                                                                                                                                                                                                                                                     |
| quadraticCurveTo(aCPx, aCPy, x, y)                                       | There are two different ways of specifying curves. You can use the quadraticCurveTo function, or you can use the bezierCurveTo function (see the following table row). The difference between these two functions is how you specify the curvature of the curve. For a cubic curve (used by the bezierCurveTo function), you specify two additional points to define the curve. The starting point is the current position of the path. |
| bezierCurveTo(aCPx1, aCPy1, aCPx2, aCPy2, x, y)                          | This draws a curve based on the arguments supplied. For an explanation, see the previous table entry. The curve is drawn based on the two coordinates that define the curve (aCPx1, aCPy1, aCPx2, and aCPy2) and the end coordinate (x and y). The start point is the current position of the path.                                                                                                                                     |
| splineThru(pts)                                                          | This function draws a fluid line through the set of coordinates provided (pts). This argument should be an array of THREE.Vector2 objects. The starting point is the current position of the path.                                                                                                                                                                                                                                      |
| arc(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise)                 | This draws a circle (or part of a circle). The circle starts from the current position of the path. Here, aX and aY are used as offsets from the current position. Note that aRadius sets the size of the circle and aStartAngle and aEndAngle define how large a part of the circle is drawn. The Boolean property aClockwise determines whether the circle is drawn clockwise or counterclockwise.                                    |
| absArc(aX, aY, aRadius, aStartAngle, aEndAngle, AClockwise)              | See the description of arc. The position is absolute instead of relative to the current position.                                                                                                                                                                                                                                                                                                                                       |
| ellipse(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise)    | See the description of arc. As an addition, with the ellipse function, we can separately set the x radius and the y radius.                                                                                                                                                                                                                                                                                                             |
| absEllipse(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise) | See the description of ellipse. The position is absolute instead of relative to the current position.                                                                                                                                                                                                                                                                                                                                   |
| fromPoints(vectors)                                                      | If you pass in an array of THREE.Vector2 (or THREE.Vector3) objects into this function, Three.js will create a path using straight lines from the supplied vectors.                                                                                                                                                                                                                                                                     |
| holes                                                                    | The holes property contains an array of THREE.Shape objects. Each of the objects in this array is rendered as a hole. A good example of this is the example we saw at the beginning of this section. In that code fragment, we added three THREE.Shape objects to this array: one for the left eye, one for the right eye, and one for the mouth of our main THREE.Shape object.                                                        |

# B. 3D geometries includes

## `THREE.BoxGeometry`

- It is a very simple 3D geometry
- It allows you to create a box by specifying its width, height, and depth.

```javascript
let material = new MeshLambertMaterial({ color: "green" });

let boxGeo = new BoxGeometry(5, 7, 9);
let box = new Mesh(boxGeo, material);
```

### The following table explains all the properties:

| Property       | Mandatory | Description                                                                                                                                                                                                                                                                                                                                                             |
| -------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width          | Yes       | This is the width of the cube. This is the length of the vertices of the cube along the x axis.                                                                                                                                                                                                                                                                         |
| height         | Yes       | This is the height of the cube. This is the length of the vertices of the cube along the y axis.                                                                                                                                                                                                                                                                        |
| depth          | Yes       | This is the depth of the cube. This is the length of the vertices of the cube along the z axis.                                                                                                                                                                                                                                                                         |
| widthSegments  | No        | This is the number of segments into which we divide a face along the cube's x axis. The default value is 1. The more segments you define, the more faces a side has. If this property and the next two are set to 1, each side of the cube will just have two faces. If this property is set to 2, the face will be divided into two segments, resulting in four faces. |
| heightSegments | No        | This is the number of segments into which we divide a face along the cube's y axis. The default value is 1.                                                                                                                                                                                                                                                             |
| depthSegments  | No        | This is the number of segments into which we divide a face along the cube's z axis. The default value is 1.                                                                                                                                                                                                                                                             |

## `THREE.SphereGeometry`

- you can create a 3D sphere

```javascript
SphereGeometry(
  (radius: Float),
  (widthSegments: Integer),
  (heightSegments: Integer),
  (phiStart: Float),
  (phiLength: Float),
  (thetaStart: Float),
  (thetaLength: Float)
);
```

### Properties

| Property       | Mandatory | Description                                                                                                                                                                  |
| -------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| radius         | No        | This is used to set the radius for the sphere. This defines how large the resulting mesh will be. The default value is 50.                                                   |
| widthSegments  | No        | This is the number of segments to be used vertically. More segments means a smoother surface. The default value is 8 and the minimum value is 3.                             |
| heightSegments | No        | This is the number of segments to be used horizontally. The more segments, the smoother the surface of the sphere. The default value is 6 and the minimum value is 2.        |
| phiStart       | No        | This determines where to start drawing the sphere along its x axis. This can range from 0 to 2 \_ PI. The default value is 0.                                                |
| phiLength      | No        | This determines how far from phiStart the sphere is to be drawn. 2 _ PI will draw a full sphere and 0.5 _ PI will draw an open quarter sphere. The default value is 2 \_ PI. |
| thetaStart     | No        | This determines where to start drawing the sphere along its x axis. This can range from 0 to 2\*PI, and the default value is 0.                                              |
| thetaLength    | No        | This determines how far from thetaStart the sphere is drawn. The 2\*PI value is a full sphere, whereas PI will draw only half of the sphere. The default value is 2\*PI.     |

## `THREE.CylinderGeometry`

```javascript
CylinderGeometry(
  (radiusTop: Float),
  (radiusBottom: Float),
  (height: Float),
  (radialSegments: Integer),
  (heightSegments: Integer),
  (openEnded: Boolean),
  (thetaStart: Float),
  (thetaLength: Float)
);

const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);
```

### Properties

| Propertyz      | Mandatory | Description                                                                                                                                                                      |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| radiusTop      | No        | This sets the size this cylinder will be at the top. The default value is 20.                                                                                                    |
| radiusBottom   | No        | This sets the size this cylinder will be at the bottom. The default value is 20.                                                                                                 |
| height         | No        | This property sets the height of the cylinder. The default height is 100.                                                                                                        |
| radialSegments | No        | This determines the number of segments along the radius of the cylinder. This defaults to 8. More segments means a smoother cylinder.                                            |
| heightSegments | No        | This determines the number of segments along the height of the cylinder. The default value is 1. More segments means more faces.                                                 |
| openEnded      | No        | This determines whether or not the mesh is closed at the top and the bottom. The default value is false.                                                                         |
| thetaStart     | No        | This determines where to start drawing the cylinder along its x axis. This can range from 0 to `2\*PI`, and the default value is 0.                                              |
| thetaLength    | No        | This determines how far from thetaStart the cylinder is drawn. The `2*PI` value is a full cylinder, whereas PI will draw only half of the cylinder. The default value is `2*PI`. |

## `THREE.ConeGeometry`

- The THREE.ConeGeometry is pretty much the same as the THREE.CylinderGeometry. It uses all the same properties, except it only allows you to set the radius instead of a separate radiusTop and radiusBottom:

## `THREE.TorusGeometry`

```javascript
TorusGeometry(radius : Float, tube : Float, radialSegments : Integer, tubularSegments : Integer, arc : Float)

radius - Radius of the torus, from the center of the torus to the center of the tube. Default is 1.
tube — Radius of the tube. Default is 0.4.
radialSegments — Default is 8
tubularSegments — Default is 6.
arc — Central angle. Default is Math.PI * 2.
```

```javascript
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);
```

### Properties

| Property        | Mandatory | Description                                                                                                                                                 |
| --------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| radius          | No        | This sets the size of the complete torus. The default value is 100.                                                                                         |
| tube            | No        | This sets the radius of the tube (the actual donut). The default value for this attribute is 40.                                                            |
| radialSegments  | No        | This determines the number of segments to be used along the length of the torus. The default value is 8. See the effect of changing this value in the demo. |
| tubularSegments | No        | This determines the number of segments to be used along the width of the torus. The default value is 6. See the effect of changing this value in the demo.  |
| arc             | No        | With this property, you can control whether the torus has drawl a full circle. The default of this value is 2 \* PI (a full circle).                        |

## `THREE.TorusKnotGeometry`

## `THREE.PolyhedronGeometry`

Read up on page 293

# Advanced Geometries and Binary Operations

## `THREE.ConvexGeometry`

With THREE.ConvexGeometry, we can create a convex hull from a set of points. A convex hull is the minimal shape that encompasses all these points.

> An array containing vertices (of the THREE.Vector3 type) is the only argument `THREE.ConvexGeometry` takes

```javascript
let material = new MeshBasicMaterial({ color: 0xff0000 });

var points = [];
//generate the points
for (var i = 0; i < 10; i++) {
  var randomX = -15 + Math.round(Math.random() * 30);
  var randomY = -15 + Math.round(Math.random() * 30);
  var randomZ = -15 + Math.round(Math.random() * 30);
  points.push(new Vector3(randomX, randomY, randomZ));
}
let convexGeo = new ConvexGeometry(points);
let convexGeometry = new Mesh(convexGeo, material);
convexGeometry.position.set(1, 10, 1);

// create small balls at each vertivces
points.forEach((point) => {
  let material = new MeshBasicMaterial({ color: "yellow" });
  let sphereGeo = new SphereGeometry(0.5);
  let sphere = new Mesh(sphereGeo, material);
  sphere.position.copy(point);
  convexGeometry.add(sphere);
});

scene.add(convexGeometry);
```

## `THREE.LatheGeometry`

THREE.LatheGeometry allows you to create shapes from a smooth curve

The following table lists all the arguments:

| Property  | Mandatory | Description                                                                                                                                                                     |
| --------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| points    | Yes       | These are the points that make up the spline used to generate the bell/vase shape.                                                                                              |
| segments  | No        | These are the number of segments used when creating the shape. The higher this number, the more round and smooth the resulting shape will be. The default value for this is 12. |
| phiStart  | No        | This determines where to start on a circle when generating the shape. This can range from 0 to 2\*PI. The default value is 0.                                                   |
| phiLength | No        | This defines how fully generated the shape is. For instance, a quarter shape will be `0.5*PI`. The default value is the full 360 degrees or `2*P`I.                             |

# Creating a geometry by extruding

## `THREE.ExtrudeGeometry`

Options you can pass in to THREE.ExtrudeGeometry

| Property       | Mandatory | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| shapes         | Yes       | One or more shapes (THREE.Shape objects) are required to extrude the geometry from. See the preceding chapter on how to create such a shape.                                                                                                                                                                                                                                                                                                                    |
| amount         | No        | This determines how far (the depth) the shape should be extruded. The default value is 100.                                                                                                                                                                                                                                                                                                                                                                     |
| bevelThickness | No        | This determines the depth of the bevel. The bevel is the rounded corner between the front and back faces and the extrusion. This value defines how deep into the shape the bevel goes. The default value is 6                                                                                                                                                                                                                                                   |
| bevelSize      | No        | This determines the height of the bevel. This is added to the normal height of the shape. The default value is bevelThickness - 2.                                                                                                                                                                                                                                                                                                                              |
| bevelSegments  | No        | This defines the number of segments that will be used by the bevel. The more the number of segments used, the smoother the bevel will look. The default value is 3.                                                                                                                                                                                                                                                                                             |
| bevelEnabled   | No        | If this is set to true, a bevel is added. The default value is true.                                                                                                                                                                                                                                                                                                                                                                                            |
| curveSegments  | No        | This determines how many segments will be used when extruding the curves of shapes. The more the number of segments used, the smoother the curves will look. The default value is 12.                                                                                                                                                                                                                                                                           |
| steps          | No        | This defines the number of segments into the extrusion will be divided along its depth. The default value is 1. A higher value will result in more individual faces.                                                                                                                                                                                                                                                                                            |
| extrudePath    | No        | This is the path (THREE.CurvePath) along which the shape should be extruded. If this isn't specified, the shape is extruded along the z axis.                                                                                                                                                                                                                                                                                                                   |
| uvGenerator    | No        | When you use a texture with your material, the UV mapping determines what part of a texture is used for a specific face. With the uvGenerator property, you can pass in your own object that will create the UV settings for the faces that are created for the shapes that are passed in. More information on UV settings can be found in Chapter 10, Loading and Workingwith Textures. If none are specified, THREE.ExtrudeGeometry.WorldUVGenerator is used. |

## `THREE.TubeGeometry`

THREE.TubeGeometry creates a tube that extrudes along a **3D spline**
