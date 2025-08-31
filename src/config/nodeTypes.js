// ============================================
// src/config/nodeTypes.js
// ============================================

export const availableNodeTypes = [
  {
    type: 'textNode',
    label: 'Text Message',
    icon: '💬',
    defaultData: { text: 'Hello! How can I help you today?' },
  },
  // Easy to extend with new node types:
  // {
  //   type: 'imageNode',
  //   label: 'Image',
  //   icon: '🖼️',
  //   defaultData: { text: 'Send image', imageUrl: '' },
  // },
  // {
  //   type: 'buttonNode',
  //   label: 'Button',
  //   icon: '🔘',
  //   defaultData: { text: 'Click me', action: '' },
  // },
];