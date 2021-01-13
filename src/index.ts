import * as tf from "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-wasm";
import { setWasmPaths } from "@tensorflow/tfjs-backend-wasm";


async function main() {
  setWasmPaths('wasm/');
  await tf.setBackend('wasm');
  console.log(`Backend: ${tf.getBackend()}`);
  const data = tf.tensor3d([10, 30, 50, 70], [2, 2, 1]);
  const rdata = data.clone();
  console.log(rdata);
}

main();
