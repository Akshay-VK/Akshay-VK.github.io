#ifdef GL_ES
precision mediump float;
#endif

// grab texcoords from vert shader
varying vec2 vTexCoord;

void main() {
        vec2 uv = vTexCoord;

        // the texture is loaded upside down and backwards by default so lets flip it
        uv.y = 1.0 - uv.y;

        vec4 tex = texture2D(tex0, uv);
        vec4 tex1=texture2D(tex1,uv);

        gl_GragColor=vec4(1.0,0.0,0.0,1.0);
}