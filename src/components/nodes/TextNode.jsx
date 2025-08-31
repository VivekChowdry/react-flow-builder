import React from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = (props) => {
  return (
    <BaseNode
      {...props}
      title="Send Message"
      icon="💬"
      backgroundColor="#a7f3d0"
      borderColor="#059669"
    />
  );
};