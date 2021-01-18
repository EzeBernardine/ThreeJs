# Materials

The material is like the skin of the object that defines what the outside of a geometry looks like. For example, a skin defines whether a geometry is metallic-looking, transparent, or shown as a wireframe. The resulting THREE.Mesh object can then be added to the scene to be rendered by Three.js.

Some materials in threejs inludes

| Name                 | Description                                                                                                                                                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MeshBasicMaterial    | This is a basic material that you can use to give your geometries a simple color or show the wireframe of your geometries. **This material isn't influenced by lights.**                                                                                              |
| MeshDepthMaterial    | This is a material that uses the distance from the camera to determine how to color your mesh.                                                                                                                                                                        |
| MeshNormalMaterial   | This is a simple material that bases the color of a face on its normal vector.                                                                                                                                                                                        |
| MeshLambertMaterial  | This is a material that takes lighting into account and is used to create dull, non-shiny-looking objects.                                                                                                                                                            |
| MeshPhongMaterial    | This is a material that also takes lighting into account and can be used to create shiny objects.                                                                                                                                                                     |
| MeshStandardMaterial | This is a material that uses physical-based rendering to render the object. With physical-based rendering, a physically correct model is used to determine how light interacts with a surface. This allows you to create more accurate and realistic-looking objects. |
| MeshPhysicalMaterial | An extension of MeshStandardMaterial that allows more control over the reflection.                                                                                                                                                                                    |
| MeshToonMaterial     | This is an extension of MeshPhongMaterial that tries to make objects look hand-drawn.                                                                                                                                                                                 |
| ShadowMaterial       | This is a specific material that can receive shadows, but the rest is rendered transparent.                                                                                                                                                                           |
| ShaderMaterial       | This material allows you to specify your own shader programs to directly control how vertices are positioned and pixels are colored.                                                                                                                                  |
| LineBasicMaterial    | This is a material that can be used on the THREE.Line geometry to create colored lines.                                                                                                                                                                               |
| LineDashMaterial     | This is the same as LineBasicMaterial, but this material also allows you to create a dashed effect.                                                                                                                                                                   |

## Common material properties

Three.js provides a material base class, `THREE.Material`, that lists all the common properties. I've divided these common material properties into the following three categories:

- **Basic properties**: These are the properties you'll use most often. With these properties, you can, for instance, control the opacity of the object, whether it is visible, and how it is referenced (by ID or custom name).
- **Blending properties**: Every object has a set of blending properties. These properties define how the color of each point of the material is combined with the color behind it.
- **Advanced properties**: There are a number of advanced properties that control how the low-level WebGL context renders objects. In most cases, you won't need to deal with these properties.

## Basic properties

| Property           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id                 | This is used to identify a material and is assigned when you create a material. This starts at 0 for the first material and is increased by 1 for each additional material that is created.                                                                                                                                                                                                                                                                                                                                                                        |
| uuid               | This is a uniquely generated ID and is used internally.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| name               | You can assign a name to a material with this property. This can be used for debugging purposes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| opacity            | This defines how transparent an object is. Use this together with the transparent property. The range of this property is from 0 to 1.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| transparent        | If this is set to true, Three.js will render this object with the set opacity. If this is set to false, the object won't be transparent, just more lightly colored. This property should also be set to true if you use a texture that uses an alpha (transparency) channel.                                                                                                                                                                                                                                                                                       |
| overdraw           | When you use THREE.CanvasRenderer, it is possible you will see small gaps between the triangles. By setting this property, you can prevent this. **A good value is 0.5, and the default is 0**.                                                                                                                                                                                                                                                                                                                                                                    |
| visible            | This defines whether this material is visible. If you set this to false, you won't see the object in the scene.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| side               | With this property, you can define to which side of the geometry a material is applied. The default is `THREE.Frontside`, which applies the material to the front (outside) of an object. You can also set this to `THREE.BackSide`, which applies it to the back (inside), or `THREE.DoubleSide`, which applies it to both sides.                                                                                                                                                                                                                                 |
| needsUpdate        | When Three.js creates a material, it converts it to a set of WebGL instructions. When you want the changes you made in the material to also result in an update to the WebGL instructions, you can set this property to true.                                                                                                                                                                                                                                                                                                                                      |
| colorWrite         | If set to false, the color of this material won't be shown (in effect, you'll create invisible objects, which occlude objects behind them).                                                                                                                                                                                                                                                                                                                                                                                                                        |
| flatShading        | Determines whether this material is rendered using flat shading. With flat shading, the individual triangles which make up an object are rendered separately, and aren't combined into a smooth surface.                                                                                                                                                                                                                                                                                                                                                           |
| lights             | This is Boolean value that determines whether this material is affected by lights. The default value is true.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| premultipliedAlpha | Changes the way the transparency of an object is rendered. Defaults to false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| dithering          | Applies a dithering effect to the rendering material. This can be used to avoid banding. The default is false.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| shadowSide         | Just like the side property but, this time, determines which side of the faces casts the shadows. The default is null. <br /><br />If null, this is determined based on the side property like this: <br /><br />`THREE.Frontside`: Back side <br />`THREE.Backside`: Front side <br />`THREE.DoubleSide`: Both sides                                                                                                                                                                                                                                              |
| vertexColors       | You can define individual colors to be applied to each vertex with this property. The default value is `THREE.NoColors`. If you set this value to `THREE.VertexColors`, the colors set in a `THREE.Face3` vertexColors array are used to color the individual vertices; if set to THREE.FaceColors, the color property of each face is used to color that face. <br /> <br />This property doesn't work on CanvasRenderer but does work on WebGLRenderer. Look at the LineBasicMaterial example, where we use this property to color the various parts of a line.  |
| fog                | This property determines whether this material is affected by global fog settings. This is not shown in action, but if this is set to false, the global fog we saw in Chapter 2, Basic Components That Make Up a Three.js Scene doesn't affect how this object is rendered.                                                                                                                                                                                                                                                                                        |

## Blending properties

| Name          | Description                                                                                                                                                                                                                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blending      | This determines how the material on this object blends with the background. The normal mode is THREE.NormalBlending, which only shows the top layer.                                                                                                                                                                                  |
| blendSrc      | Besides using the standard blending modes, you can also create custom blend modes by setting blendsrc, blenddst, and blendequation. This property defines how this object (the source) is blended into the background (the destination). The default THREE.SrcAlphaFactor setting uses the alpha (transparency) channel for blending. |
| blendSrcAlpha | This is the transparency of blendSrc. **The default is null**.                                                                                                                                                                                                                                                                        |
| blendDst      | This property defines how the background (the destination) is used in blending and defaults to THREE.OneMinusSrcAlphaFactor, which means this property too uses the alpha channel of the source for blending but uses 1 ( the alpha channel of the source) as the value.                                                              |
| blendDstAlpha | This is the transparency of blendDst. **The default is null**.                                                                                                                                                                                                                                                                        |
| blendEquation | This defines how the blendsrc and blenddst values are used. The default is to add them (AddEquation). With these three properties, you can create your own custom blend modes.                                                                                                                                                        |

## Advanced properties

The is mostly used internally and controls the specifics of how WebGL is used to render the scene.

| Name                                                       | Description                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| depthTest                                                  | This is an advanced WebGL property. With this property, you can enable or disable the GL_DEPTH_TEST parameter. This parameter controls whether the depth of a pixel is used to determine a new pixel's value. Normally, you wouldn't need to change this. More information can be found in the OpenGL specifications we mentioned earlier. |
| depthWrite                                                 | This is another internal property. This property can be used to determine whether this material affects the WebGL depth buffer. If you use an object for a 2D overlay (for example, a hub), you should set this property to false. Usually, though, you shouldn't need to change this property.                                            |
| depthFunc                                                  | The function to use to compare a pixel's depth. This corresponds to the glDepthFunc from the WebGL specifications.                                                                                                                                                                                                                         |
| polygonOffset, polygonOffsetFactor, and polygonOffsetUnits | With these properties, you can control the POLYGON_OFFSET_FILL WebGL feature. These are normally not needed. For an explanation of what they do in detail, you can look at the OpenGL specifications.                                                                                                                                      |
| alphatest                                                  | This value can be set to a specific value (0 to 1). Whenever a pixel has an alpha value smaller than this value, it won't be drawn. You can use this property to remove some transparency-related artifacts.                                                                                                                               |
| precision                                                  | Set the precision for this material to one of the following WebGL values: highp, mediump, or lowp.                                                                                                                                                                                                                                         |

## Mesh

Passing in properties to configure a mesh materials. There are two options:

- You can pass in the arguments in the constructor as a parameters object,
  like this:

  ```javascript
  var material = new THREE.MeshBasicMaterial(
  {
  color: 0xff0000, name: 'material-1', opacity: 0.5,
  transparency: true, ...
  });
  ```

- Alternatively, you can also create an instance and set the properties individually, like this:

  ```javascript
  var material = new THREE.MeshBasicMaterial();
  material.color = new THREE.Color(0xff0000);
  material.name = "material-1";
  material.opacity = 0.5;
  material.transparency = true;
  ```

### `THREE.MeshBasicMaterial`

MeshBasicMaterial it doesn't take into account the lights that are available in the scene. Meshes with this material will be rendered as simple, flat polygons, and you also have the option to show the geometry's wireframe.

#### Propeties of `THREE.MeshBasicMaterial`

| Name               | Description                                                                                                                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| color              | This property allows you to set the color of the material.                                                                                                                                                                                                                                                         |
| wireframe          | This allows you to render the material as a wireframe. This is great for debugging purposes.                                                                                                                                                                                                                       |
| wireframeLineWidth | If you enable the wireframe, this property defines the width of the wires from the wireframe.                                                                                                                                                                                                                      |
| wireframeLinecap   | This property defines how the ends of lines look in wireframe mode. The possible values are butt, round, and square. The default value is round. In practice, the results from changing this property are very difficult to see. This property isn't supported on `WebGLRenderer`.                                 |
| wireframeLinejoin  | This defines how the line joints are visualized. The possible values are **round**, **bevel**, and **miter**. The default value is round. If you look very closely, you can see this in the example using low opacity and a very large wireframeLinewidth value. This property isn't supported on `WebGLRenderer`. |

### `THREE.MeshDepthMaterial`

With this material, the way an object looks isn't defined by lights or by a specific material property; it is defined by the distance from the object to the camera.

> Creating THREE.MeshDepthMaterial is very easy and the object **doesn't require any arguments**

### Properties of `THREE.MeshDepthMaterial`

| Name               | Description                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| wireframe          | This determines whether or not to show the wireframe.                                           |
| wireframeLineWidth | This determines the width of the wireframe (this will only work with the THREE.CanvasRenderer). |

#### Combining materials

```javascript
let bodyMaterial = new THREE.MeshDepthMaterial();
let colorMaterial = new THREE.MeshBasicMaterial({
  color: "green",
  transparent: true,
  blending: MultiplyBlending,
});
let geo = new THREE.BoxGeometry(7, 7, 7);
let mixedCube = new THREE.SceneUtils.createMultiMaterialObject(geo, [
  colorMaterial,
  bodyMaterial,
]);
mixedCube.children[1].scale.set(0.59, 0.59, 0.59);
mixedCube.position.set(-10, 2, 12);
mixedCube.castShadow = true;
```

### `THREE.MeshNormalMaterial`

The color of each face is based on the normal pointing out from the face. This normal is the vector perpendicular to the face. The normal vector is used in many different parts of Three.js. It is used to determine light reflections, helps with mapping textures to 3D models, and gives information on how to light, shade, and color pixels on the surface.

```javascript
const meshNormalGeo = new BoxGeometry(4, 4, 4);
const meshNormalMaterial = new MeshNormalMaterial();
const meshNormal = new Mesh(meshNormalGeo, meshNormalMaterial);
meshNormal.position.set(-20, 5, 15);
```

#### Properties that you can set on `THREE.MeshNormalMaterial`

| Name               | Description                                           |
| ------------------ | ----------------------------------------------------- |
| wireframe          | This determines whether or not to show the wireframe. |
| wireframeLinewidth | This determines the width of the wireframe.           |

## Advanced materials

### 1. `THREE.MeshLambertMaterial`

- Used to create dull-looking, non-shiny surfaces
- It responds to the lighting sources in the scene

#### properties:

| Name     | Description                                                                                                                                                                                                                             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color    | This is the color of the material.                                                                                                                                                                                                      |
| emissive | This is the color this material emits. It doesn't really act as a light source, but this is a solid color that is unaffected by another lighting. This defaults to black. You can use this to create objects that looks like they glow. |

### `THREE.MeshPhongMaterial`

- can create a material that is shiny

### Properties

| Name      | Description                                                                                                                                                                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color     | This is the ambient color of the material. This works together with the ambient light we saw in the previous chapter. This color is multiplied with the color provided by the ambient light. This defaults to white.                                    |
| emissive  | This is the color this material emits. It doesn't really act as a light source, but this is a solid color that is unaffected by another lighting. This defaults to black.                                                                               |
| specular  | This property defines how shiny the material is and with what color it shines. If this is set to the same color as the color property, you get a more metallic-looking material. If this is set to gray, it results in a more plastic-looking material. |
| shininess | This property defines how shiny the specular highlight is. The default value for the shininess is 30. The higher this value is, the shinier the object is.                                                                                              |

### `THREE.MeshStandardMaterial`

- It is a great material for shiny and metal-like materials,
- is a material that takes a physics approach to determine how to react to the lighting in the scene

#### properties

| Name      | Description                                                                                                                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| metalness | This property determines how much like metal this material is. Non-metallic materials should use a value of 0, metallic materials should use a value close to 1, and the default is 0.5.                              |
| roughness | You can also set how rough the material is. This determines how the light that hits this material is diffused. The default is 0.5, a value of 0 is a mirror-like reflection, and a value of 1 diffuses all the light. |

### `THREE.MeshPhysicalMaterial`

- It is close to `THREE.MeshStandardMaterial`
- With this material, you have more control over the reflectivity of the material

#### properties

| Name               | Description                                                                                                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| clearCoat          | A value indicating a coating layer on top of the material. The higher this value is, the more coating is applied, and the more effective the clearCoatRoughness parameter is. This value ranges from 0 to 1 with a default of 0. |
| clearCoatRoughness | The roughness used for the coating of the material. The rougher it is, the more light is diffused. This is used together with the clearCoat property. This value ranges from 0 to 1 with a default of 0.                         |
| reflectivity       | You can use this property to set the reflectivity of non-metallic materials. So if the metalness property is 1 (or near 1), you won't see any effect. The default is 0.5, the minimum is 0, and the maximum is 1.                |

### `THREE.ShaderMaterial`

#### Creating your own shaders with `THREE.ShaderMaterial`.

- With this material, you can pass in your own custom shaders that are directly run in the WebGL context
- A shader converts Three.js JavaScript meshes to pixels on screen.

#### Properties of THREE.Material that are passed into the shader

| Name                   | Description                                                                                                                                                                                                                                                            |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wireframe              | This renders the material as a wireframe. This is great for debugging purposes.                                                                                                                                                                                        |
| Wireframelinewidth     | If you enable the wireframe, this property defines the width of the wires from the wireframe.                                                                                                                                                                          |
| linewidth              | This defines the width of the line to be drawn.                                                                                                                                                                                                                        |
| Shading                | This defines how shading is applied. The possible values are THREE.SmoothShading and THREE.FlatShading. This property isn't enabled in the example for this material. For example, look at the section on MeshNormalMaterial.                                          |
| vertexColors           | You can define individual colors to be applied to each vertex with this property. This property doesn't work on CanvasRenderer but does work on WebGLRenderer. Look at the LineBasicMaterial example, where we use this property to color the various parts of a line. |
| fog                    | This determines whether this material is affected by global fog settings. This is not shown in action. If this is set to false, the global fog we saw in Chapter 2, Basic Components That Make Up a Three.js Scene, doesn't affect how this object is rendered.        |
| **More obscure props** |                                                                                                                                                                                                                                                                        |
| fragmentShader         | This shader defines the color of each pixel that is passed in. Here, you need to pass in the string value of your fragment shader program.                                                                                                                             |
| vertextShader          | This shader allows you to change the position of each vertex that is passed in. Here, you need to pass in the string value of your vertex shader program.                                                                                                              |
| uniforms               | This allows you to send information to your shader. The same information is sent to each vertex and fragment.                                                                                                                                                          |
| defines                | Converts to #define code fragments. With these fragments, you can set some additional global variables in the shader programs.                                                                                                                                         |
| attributes             | These can change between each vertex and fragment. They are usually used to pass positional and normal-related data. If you want to use this, you need to provide information for all the vertices of the geometry.                                                    |
| lights                 | This determines whether light data should be passed into the shaders. This defaults to false.                                                                                                                                                                          |

- To work with this material, we have to pass in two different shaders:
  - `vertexShader`: This is run on each vertex of the geometry. You can use this shader to transform the geometry by moving the position of the vertices around.
  - `fragmentShader`: This is run on each fragment of the geometry. In vertexShader, we return the color that should be shown for

```javascript
let shadeMaterialFragment = document.getElementById("fragment-shader")
  .innerHTML;

let shadeMaterialVertex = document.getElementById("vertex-shader").innerHTML;

let uniforms = {
  time: {
    value: 0.2,
  },

  resolution: {
    value: new Vector2(),
  },
};

let meshMaterial = new ShaderMaterial({
  uniforms: uniforms,
  vertexShader: shadeMaterialVertex,
  fragmentShader: shadeMaterialFragment,
  transparent: true,
});

let cubeGeometry = new BoxGeometry(20, 20, 20);
let arr = [
  meshMaterial,
  meshMaterial,
  meshMaterial,
  meshMaterial,
  meshMaterial,
  meshMaterial,
];
let shaderMaetrial = new Mesh(cubeGeometry, arr);
```

## THREE.Line geometry

Three.js provides two different materials you can use on a THREE.Line geometry, which are as follows:

- `THREE.LineBasicMaterial`: The basic material for a line allows you to set the colors, linewidth, linecap, and linejoin properties.
- `THREE.LineDashedMaterial`: This has the same properties as `THREE.LineBasicMaterial` but allows you to create a dashed line effect by specifying dash and spacing sizes

### `THREE.LineBasicMaterial`

#### Properties

| Name         | Description                                                                                                                                                                                                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color        | This determines the color of the line. If you specify vertexColors, this property is ignored.                                                                                                                                                                                             |
| linewidth    | This determines the width of the line.                                                                                                                                                                                                                                                    |
| linecap      | This property defines how the ends of lines look in the wireframe mode. The possible values are butt, round, and square. The default is round. In practice, the results from changing this property are very difficult to see. This property isn't supported on WebGLRenderer.            |
| linejoin     | Defines how the line joints are visualized. The possible values are round, bevel, and miter. The default value is round. If you look very closely, you can see this in the example using low opacity and a very large wireframeLinewidth. This property isn't supported on WebGLRenderer. |
| vertexColors | You can supply a specific color for each vertex by setting this property to the THREE.VertexColors value.                                                                                                                                                                                 |

### `THREE.LineDashedMaterial`

This material has the same properties as THREE.LineBasicMaterial and two additional ones you can use to define the dash width and the width of the gaps between the dashes, which are as follows:

| Name     | Description                                                                                                                                                          |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scale    | This scales dashSize and gapSize. If the scale is smaller than 1, dashSize, and gapSize increase, and if the scale is larger than 1, dashSize, and gapSize decrease. |
| dashSize | This is the size of the dash.                                                                                                                                        |
| gapSize  | This is the size of the gap.                                                                                                                                         |
