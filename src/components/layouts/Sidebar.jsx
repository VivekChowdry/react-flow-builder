import React from 'react';
import { NodesPanel } from '../panels/NodesPanel';
import { SettingsPanel } from '../panels/SettingsPanel';

export const Sidebar = ({
  selectedNode,
  availableNodes,
  onUpdateNodeText,
  onDeleteNode,
  onDeselectNode,
  onSave,
  errorMessage,
  successMessage,
}) => {
  return (
    <div
      style={{
        width: '320px',
        backgroundColor: '#ffffff',
        borderRight: '1px solid #e5e7eb',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
      }}
    >
      {/* Header */}
      <div style={{ 
        marginBottom: '24px',
        borderBottom: '1px solid #f3f4f6',
        paddingBottom: '16px'
      }}>
        <h2 style={{ 
          margin: 0, 
          color: '#111827',
          fontSize: '20px',
          fontWeight: '700'
        }}>
          Flow Builder
        </h2>
        <p style={{ 
          margin: '4px 0 0 0', 
          color: '#6b7280',
          fontSize: '14px'
        }}>
          Create and manage your chatbot flow
        </p>
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        {selectedNode ? (
          <SettingsPanel
            node={selectedNode}
            onUpdateNodeText={onUpdateNodeText}
            onDeleteNode={onDeleteNode}
            onBack={onDeselectNode}
          />
        ) : (
          <NodesPanel availableNodes={availableNodes} />
        )}
      </div>

      {/* Footer Actions */}
      <div style={{ 
        borderTop: '1px solid #f3f4f6',
        paddingTop: '20px',
        marginTop: 'auto'
      }}>
        <button
          onClick={onSave}
          style={{
            width: '100%',
            padding: '12px 16px',
            backgroundColor: '#4f46e5',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            color: 'white',
            fontSize: '14px',
            transition: 'all 0.2s ease',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4338ca';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4f46e5';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
          }}
        >
          💾 Save Flow
        </button>

        {/* Error/Success Messages */}
        {errorMessage && (
          <div
            style={{
              marginTop: '12px',
              padding: '10px',
              backgroundColor: '#fee2e2',
              color: '#dc2626',
              borderRadius: '6px',
              border: '1px solid #fca5a5',
              fontSize: '13px',
              textAlign: 'center',
              fontWeight: '500',
            }}
          >
            ❌ {errorMessage}
          </div>
        )}

        {successMessage && (
          <div
            style={{
              marginTop: '12px',
              padding: '10px',
              backgroundColor: '#dcfce7',
              color: '#16a34a',
              borderRadius: '6px',
              border: '1px solid #86efac',
              fontSize: '13px',
              textAlign: 'center',
              fontWeight: '500',
            }}
          >
            ✅ {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};