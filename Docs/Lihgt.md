
# Light

---

Available lights in threejs

| Name                     | Description                                                                                                                                                                                                                   |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `THREE.AmbientLight `    | This is a basic light, the color of which is added to the current color of the objects in the scene.                                                                                                                          |
| `THREE.PointLight`       | This is a single point in space from which light spreads in all directions. This light can't be used to create shadows.                                                                                                       |
| `THREE.SpotLight `       | This light source has a cone-like effect like that of a desk lamp, a spot in the ceiling, or a torch. This light can cast shadows.                                                                                            |
| `THREE.DirectionalLight` | This is also called infinite light. The light rays from this light can be seen as parallel, like, for instance, the light from the sun. This light can also be used to create shadows.                                        |
| ` THREE.HemisphereLight` | This is a special light and can be used to create more natural-looking outdoors lighting by simulating a reflective surface and a faintly illuminating sky. This light also doesn't provide any shadow-related functionality. |
| `THREE.AreaLight `       | With this light source, instead of a single point in space, you can specify an area from which light emanates. THREE.AreaLight doesn't cast any shadows.                                                                      |
| ` THREE.LensFlare`       | This is not a light source, but with THREE.LensFlare, you can add a lens flare effect to the lights in your scene.                                                                                                            |

## Basic lights

### `THREE.AmbientLight`

When you create THREE.AmbientLight, the color is applied globally. There isn't a specific direction this light comes from, and `THREE.AmbientLight` doesn't contribute to any shadows. The standard color we set in the code for this scene is `#606008`.

- It comes fron no specific direction.
- It does not cast any shadows
- It colors all the objects the same color no matter the shape.
- You use it together with other lighting sources, such as `THREE.SpotLight` or `THREE.DirectionalLight`, to soften the shadows or add some additional color to the scene

#### How to create a `THREE.AmbientLight`

```js
let ambientLight = new THREE.AmbientLight("#606008");
scene.add(ambientLiht);
```

#### How to connect `THREE.AmbientLight` to the GUI Controls menu

```javascript
let ambientLight = customeAmbientLight();
let gui = new dat.GUI();
let control = new (function () {
  this.ambientColor = ambientLight.color.getStyle();
})();

/**
 * instead of using the gui.add(...) function, we use the gui.addColor(...) function to control the color. This creates an option in the Controls menu, with which we can directly change the color of the passed-in variable
 */
gui.addColor(control, "ambientColor").onChange(() => {
  ambientLight.color = new Color(control.ambientColor);
});
```

### `THREE.SpotLight`

#### Profperties of psotlight

| Property   | Description                                                                                                                                                                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| angle      | This determines how wide the beam emerging from this light is. This is measured in radians <br /> <br /> defaults to `Math.PI`/3.                                                                                                                                        |
| castShadow | If set to true, this light will create shadows. See the following table on how to configure the shadows.                                                                                                                                                                 |
| color      | This is the color of the light.                                                                                                                                                                                                                                          |
| decay      | This is the amount the intensity diminishes the farther away from the light source it gets. A decay of 2 leads to more realistic light, and **the default value is 1**. This property only has effect when the physicallyCorrectLights property is set on the WebGLRenderer. |
| distance   | When this property is set to a non 0 value, the light intensity will decrease linearly from the set intensity at the light's position to 0 at this distance.                                                                                                             |
| intensity  | This is the intensity the light shines with.**This defaults to 1**.                                                                                                                                                                                                      |
| penumbra   | The percentage at the edge of the spotlight's coin, which is smoothed (blurred) to 0. Takes a value between 0 and 1, and the **default is 0**.                                                                                                                           |
| position   | This is the position of the light in THREE.Scene.                                                                                                                                                                                                                        |
| power      | The light's power when being rendered in physical correct mode (enable this by setting the physicallyCorrectLights property set on the WebGLRenderer). This is measured in lumens and the **default value is 4\*Math**.PI.                                               |
| target     | With THREE.SpotLight, the direction it is pointed in is important. With the target property, you can point THREE.SpotLight to look at a specific object or position in the scene. Note that this property requires a THREE.Object3D object (such as THREE.Mesh).         |
| visible    | If this is set to true (the default), this light is turned on, and if this is set to false, the light is turned off.                                                                                                                                                     |
