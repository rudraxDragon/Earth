import * as THREE from "three";

const earthVertexShader = `
  varying vec2 vUv;
  varying vec3 vWorldNormal;
  
  void main() {
    vUv = uv;
    vWorldNormal = normalize(modelMatrix * vec4(normal, 0.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`


const earthFragmentShader = `
  uniform sampler2D dayTexture;
  uniform sampler2D nightTexture;
  
  varying vec2 vUv;
  varying vec3 vWorldNormal;

  void main() {
    vec3 sunDirection = normalize(vec3(-1.0, 0.0, 1.0));

    float lightIntensity = dot(vWorldNormal, sunDirection);

    float transitionStart = -0.1; 
    float transitionEnd = 0.1;  

    vec4 dayColor = texture2D(dayTexture, vUv);
    vec4 nightColor = texture2D(nightTexture, vUv);
    
    float mixFactor = smoothstep(transitionStart, transitionEnd, lightIntensity);
    
    vec4 finalColor = mix(nightColor, dayColor, clamp(mixFactor, 0.0, 1.0));

    gl_FragColor = finalColor;
  }
`


export function getEarthShaderMaterial(dayMap, nightMap) {
  return new THREE.ShaderMaterial({
    uniforms: {
      dayTexture: { value: dayMap },
      nightTexture: { value: nightMap },
    },
    vertexShader: earthVertexShader,
    fragmentShader: earthFragmentShader,
    side: THREE.DoubleSide
  })
}
