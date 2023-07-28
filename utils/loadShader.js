export const lightOpt = () => ({
  u_radius: 500,
  u_blur: 64,
  u_resolution: vec2(width(), height()),
  u_mouse: center(),
})

export function loadLightEffect() {
  loadShaderURL("light", null, "./shaders/light.glsl")
}
