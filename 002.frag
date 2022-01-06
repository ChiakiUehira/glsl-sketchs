
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main(void) {
  float t = u_time * 20.0;
  gl_FragColor = vec4(abs(sin(t)), 1.0, 1.0, 1.0);
}
