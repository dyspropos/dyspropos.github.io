
import init, { snow_initialize, compile_and_run, create_document } from './snowflake/snowflake_wasm.js';

const compile_button = document.querySelector('#compile')
const code_area = document.getElementById("code")

function getExample(name) {
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
      }
    }
  }
}


async function load() {
  console.log("Initializing snowflake");
  await init();
  snow_initialize();
}

export function compile_code() {
  const code = document.getElementById("code").value;
  const input = create_document(code, 1, 10);

  const result = compile_and_run(input);
  //console.log(result);

  document.getElementById("output").outerHTML += result;
}

load()

getExample("./examples/koch_snowflake.snow")

// attach to button?
compile_button.addEventListener('click', compile_code)
