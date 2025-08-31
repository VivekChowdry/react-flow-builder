import React, { useRef, useCallback } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { nodeTypes } from './components/nodes';
import { Sidebar } from './components/layouts/Sidebar';
import { useFlowLogic } from './hooks/useFlowLogic';
import { availableNodeTypes } from './config/nodeTypes';

// Flow Canvas Component
const FlowCanvas = () => {
  const reactFlowWrapper = useRef(null);
  const { screenToFlowPosition } = useReactFlow();
  
  const {
    nodes,
    edges,
    selectedNode,
    errorMessage,
    successMessage,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onNodeClick,
    onPaneClick,
    addNode,
    updateNodeText,
    deleteSelectedNode,
    onSave,
    setSelectedNode,
  } = useFlowLogic();

  // Drop handler
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData('application/reactflow');
      if (!type) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const nodeConfig = availableNodeTypes.find(n => n.type === type);
      if (nodeConfig) {
        addNode(type, position, nodeConfig.defaultData);
      }
    },
    [screenToFlowPosition, addNode]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      backgroundColor: '#f9fafb'
    }}>
      {/* Sidebar */}
      <Sidebar
        selectedNode={selectedNode}
        availableNodes={availableNodeTypes}
        onUpdateNodeText={updateNodeText}
        onDeleteNode={deleteSelectedNode}
        onDeselectNode={() => setSelectedNode(null)}
        onSave={onSave}
        errorMessage={errorMessage}
        successMessage={successMessage}
      />

      {/* Main Canvas */}
      <div
        ref={reactFlowWrapper}
        style={{ flex: 1, height: '100%' }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          onDragOver={onDragOver}
          onDrop={onDrop}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-left"
        >
          <Background 
            color="#e5e7eb" 
            gap={20} 
            size={1}
            variant="dots"
          />
          <Controls 
            style={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />
          <MiniMap 
            style={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
            maskColor="rgba(0,0,0,0.1)"
          />
        </ReactFlow>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  );
};

export default App;