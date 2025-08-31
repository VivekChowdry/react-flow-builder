import React from 'react';

export const SettingsPanel = ({
  node,
  onUpdateNodeText,
  onDeleteNode,
  onBack,
}) => {
  return (
    <div className="settings-panel">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '24px',
          gap: '12px',
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            color: '#6b7280',
            padding: '4px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ←
        </button>
        <h3 style={{ 
          margin: 0, 
          color: '#374151',
          fontSize: '18px',
          fontWeight: '600'
        }}>
          Node Settings
        </h3>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '10px',
            fontWeight: '500',
            color: '#374151',
            fontSize: '14px',
          }}
        >
          💬 Message Text
        </label>
        
        <textarea
          value={node.data.text}
          onChange={(e) => onUpdateNodeText(e.target.value)}
          placeholder="Enter your message here..."
          rows={4}
          style={{
            width: '100%',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            padding: '12px',
            fontSize: '14px',
            color: '#374151',
            backgroundColor: 'white',
            resize: 'vertical',
            fontFamily: 'inherit',
            outline: 'none',
            transition: 'border-color 0.2s ease',
            boxSizing: 'border-box',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#6366f1';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e5e7eb';
          }}
        />
      </div>

      {/* Node Info */}
      <div style={{
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '6px',
        padding: '12px',
        marginBottom: '20px'
      }}>
        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
          Node ID: <code style={{ backgroundColor: '#e2e8f0', padding: '2px 4px', borderRadius: '3px' }}>{node.id}</code>
        </div>
        <div style={{ fontSize: '12px', color: '#64748b' }}>
          Type: <code style={{ backgroundColor: '#e2e8f0', padding: '2px 4px', borderRadius: '3px' }}>{node.type}</code>
        </div>
      </div>

      {/* Delete Section */}
      <div style={{
        borderTop: '1px solid #e5e7eb',
        paddingTop: '20px'
      }}>
        <button
          onClick={onDeleteNode}
          style={{
            width: '100%',
            padding: '12px 16px',
            backgroundColor: '#fee2e2',
            border: '2px solid #fca5a5',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            color: '#dc2626',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '14px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#fecaca';
            e.currentTarget.style.borderColor = '#f87171';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#fee2e2';
            e.currentTarget.style.borderColor = '#fca5a5';
          }}
        >
          🗑️ Delete Node
        </button>
        
        <div
          style={{
            fontSize: '12px',
            color: '#6b7280',
            textAlign: 'center',
            marginTop: '8px',
          }}
        >
          Or press <kbd style={{ 
            backgroundColor: '#f3f4f6', 
            border: '1px solid #d1d5db',
            borderRadius: '3px',
            padding: '2px 6px',
            fontSize: '11px'
          }}>Delete</kbd> / <kbd style={{ 
            backgroundColor: '#f3f4f6', 
            border: '1px solid #d1d5db',
            borderRadius: '3px',
            padding: '2px 6px',
            fontSize: '11px'
          }}>Backspace</kbd>
        </div>
      </div>
    </div>
  );
};