import BackgroundShader, {
  type BackgroundShaderProps,
  type ShaderTheme,
  type ShaderOptions,
  type ShaderHandle,
  WebGPUBackgroundShader,
} from "./BackgroundShader.webgpu";
import WebGLBackgroundShader from "./BackgroundShader.webgl";

export {
  BackgroundShader,
  WebGPUBackgroundShader,
  WebGLBackgroundShader,
  type BackgroundShaderProps,
  type ShaderTheme,
  type ShaderOptions,
  type ShaderHandle,
};
export default BackgroundShader;
