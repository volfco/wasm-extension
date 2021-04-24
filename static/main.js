const wasm_path = browser.runtime.getURL("pkg/wasm_extension_bg.wasm");

const { greet } = wasm_bindgen;

async function init_wasm() {
    await wasm_bindgen(wasm_path);

    greet("foo-bar")
}

init_wasm();