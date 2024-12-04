// global.d.ts or text-encoding.d.ts
declare module "text-encoding" {
  export class TextEncoder {
    constructor(encoding?: string);
    encode(input?: string): Uint8Array;
    encoding: string;
    encodeInto(
      source: string,
      destination: Uint8Array
    ): TextEncoderEncodeIntoResult;
  }

  export class TextDecoder {
    constructor(encoding?: string, options?: { fatal?: boolean });
    decode(input?: ArrayBuffer | DataView | Uint8Array): string;
  }
}
