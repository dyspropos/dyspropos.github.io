/* tslint:disable */
/* eslint-disable */
/**
* @param {string} source
* @param {number} seed
* @param {number} depth
* @returns {Document}
*/
export function create_document(source: string, seed: number, depth: number): Document;
/**
* @param {Document} doc
* @returns {string}
*/
export function compile_and_run(doc: Document): string;
/**
*/
export function snow_initialize(): void;
/**
*/
export class Document {
  free(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_document_free: (a: number) => void;
  readonly create_document: (a: number, b: number, c: number, d: number) => number;
  readonly compile_and_run: (a: number, b: number) => void;
  readonly snow_initialize: () => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
