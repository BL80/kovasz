/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  docs: [
    'sourdough',
    'sourdough-matrix',
    {
      type: 'category',
      label: 'BakingBread101',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'baking-bread/ingredients',
        'baking-bread/preparations',
        'baking-bread/assembly',
        'baking-bread/kneading',
        'baking-bread/formatting',
        'baking-bread/baking',
        'baking-bread/tips',
      ],
    },
  ],

};

module.exports = sidebars;
