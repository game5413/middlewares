// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import IncomingForm from '@types/formidable/Formidable';
import { Options } from 'formidable';
import { RequestListener } from 'http';

declare function formidable(
  options?: Options,
  initialize?: (formidable: IncomingForm) => void
): Promise<RequestListener>;

export = formidable;
