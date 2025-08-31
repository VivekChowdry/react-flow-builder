import React from 'react';

export const NodesPanel = ({ availableNodes }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="nodes-panel">
      <h3 style={{ 
        margin: '0 0 20px 0', 
        color: '#374151',
        fontSize: '18px',
        fontWeight: '600'
      }}>
        Add Nodes
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {availableNodes.map((node) => (
          <div
            key={node.type}
            className="draggable-node"
            draggable
            onDragStart={(event) => onDragStart(event, node.type)}
            style={{
              padding: '16px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              backgroundColor: 'white',
              cursor: 'grab',
              textAlign: 'center',
              color: '#4f46e5',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.2s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              e.currentTarget.style.borderColor = '#6366f1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#f3f4f6',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
              }}
            >
              {node.icon}
            </div>
            {node.label}
          </div>
        ))}
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '12px', 
        backgroundColor: '#f0f9ff',
        borderRadius: '6px',
        border: '1px solid #e0f2fe'
      }}>
        <p style={{ 
          margin: 0, 
          fontSize: '12px', 
          color: '#0369a1',
          textAlign: 'center'
        }}>
          💡 Drag nodes onto the canvas to add them
        </p>
      </div>
    </div>
  );
};