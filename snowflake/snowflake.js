
import init, { snow_initialize, compile_and_run, create_document } from './snowflake/snowflake_wasm.js';

const compile_button = document.querySelector('#compile')
const code_area = document.getElementById("code")

export async function getExample(name) {
  // read text from URL location
  var request = new XMLHttpRequest();
  console.log("Loading " + name)
  request.open('GET', name, true);
  request.send(null);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var type = request.getResponseHeader('Content-Type');
      if (type.indexOf("text") !== 1) {
        code_area.value = request.responseText
        compile_code()
      }
    }
  }
}


async function load() {
  console.log("Initializing snowflake");
  await init();
  snow_initialize();

  getExample("./examples/koch_snowflake.snow")
}

export function compile_code() {
  const code = document.getElementById("code").value;
  const input = create_document(code, 1, 10);

  const result = compile_and_run(input);
  //console.log(result);

  document.getElementById("output").innerHTML = result
  code_area.focus()
}

load()

// attach to button?
compile_button.addEventListener('click', compile_code)
document.querySelector("#snowflake").addEventListener("click", () => getExample("./examples/koch_snowflake.snow"))
document.querySelector("#snowflake_random").addEventListener("click", () => getExample("./examples/koch_snowflake_random.snow"))
document.querySelector("#boxes").addEventListener("click", () => getExample("./examples/box_divide.snow"))