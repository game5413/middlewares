import { Options } from 'ajv';
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types, eslint-comments/disable-enable-pair */
type LoadOptions = { attach: string; method: string };

interface ISchemator {
  load(
    options: (LoadOptions & { path: string }) | (LoadOptions & { raw: object }),
    ajvConfig?: Options,
    enableSmartFunctions?: boolean
  ): PromiseLike<any>;
  define<Type>(app: Type): Type;
}

declare function schemator(
  // eslint-disable-next-line @typescript-eslint/naming-convention
  options: { swaggerPath: string } | { swaggerRAW: object }
): ISchemator;

export = schemator;
