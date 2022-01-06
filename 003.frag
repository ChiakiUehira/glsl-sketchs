
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(void) {
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  p += vec2(cos(u_time * 5.0), sin(u_time)) * 0.5;
  float l = abs(sin(u_time)) * 0.2 / length(p);
  gl_FragColor = vec4(vec3(l), 1.0);
}
