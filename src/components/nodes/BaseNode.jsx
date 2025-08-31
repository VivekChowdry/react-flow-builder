import React from 'react';
import { Handle, Position } from '@xyflow/react';

export const BaseNode = ({
  data,
  selected,
  title,
  icon,
  backgroundColor,
  borderColor,
  children,
}) => {
  return (
    <div
      className={`base-node ${selected ? 'selected' : ''}`}
      style={{
        background: backgroundColor,
        border: `2px solid ${borderColor}`,
        borderRadius: '8px',
        padding: '12px',
        minWidth: '180px',
        textAlign: 'center',
        boxShadow: selected 
          ? '0 4px 12px rgba(0,0,0,0.15)' 
          : '0 2px 6px rgba(0,0,0,0.1)',
        transition: 'all 0.2s ease',
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        id="target"
        style={{ 
          background: borderColor,
          width: '12px',
          height: '12px',
          border: '2px solid white'
        }}
      />
      
      <div
        style={{
          fontWeight: 'bold',
          color: borderColor,
          fontSize: '11px',
          marginBottom: '8px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
        }}
      >
        <span>{icon}</span>
        {title}
      </div>
      
      <div style={{ color: '#374151', fontSize: '14px' }}>
        {children || data.text}
      </div>
      
      <Handle
        type="source"
        position={Position.Bottom}
        id="source"
        style={{ 
          background: borderColor,
          width: '12px',
          height: '12px',
          border: '2px solid white'
        }}
      />
    </div>
  );
};