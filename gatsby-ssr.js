import 'prismjs/plugins/command-line/prism-command-line.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'katex/dist/katex.min.css';
import './src/styles/reset.scss';
import './src/styles/static-global.scss';
import './src/styles/codeblock.scss';
import './src/styles/katex.scss';

import { WrapRootElement, WrapPageElement } from './src/components';

export const wrapRootElement = WrapRootElement;
export const wrapPageElement = WrapPageElement;
