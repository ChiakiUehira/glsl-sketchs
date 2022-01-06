
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(void) {
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  vec3 destColor = vec3(0.0);
  for (float i = 0.0; i < 6.0; i++) {
    float j = i + 1.0;
    vec2 q = p + vec2(cos(u_time + j), sin(u_time + j)) * 0.5;
    destColor += 0.01 / length(q);
  }
  gl_FragColor = vec4(destColor, 1.0);
}
