## Difference between MeshLambertMaterial and MeshPhongMaterial as implemented in three.js.

You have to differentiate between the shading model and the illumination model. Three.js does not implement 'pure' Phong or Lambert models.

- For `MeshLambertMaterial`, the illumination calculation is performed at each vertex, and the resulting color is interpolated across the face of the polygon. ( Gouraud shading; (generalized) Lambert illumination model )

- For `MeshPhongMaterial`, vertex normals are interpolated across the surface of the polygon, and the illumination calculation is performed at each texel. ( Phong shading; (generalized) Phong illumination model )

You will see a clear difference when you have a pointLight that is close to a face -- especially if the light's attenuation distance is less than the distance to the face's vertices.

For both materials, in the case of FlatShading, the face normal replaces each vertex normal.

three.js.r.66
