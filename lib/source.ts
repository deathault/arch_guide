import { docs, meta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { icons } from 'lucide-react';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';

export const source = loader({
  baseUrl: '/docs',
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  source: createMDXSource(docs, meta),
  
});
