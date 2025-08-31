import { useCallback, useState, useEffect } from 'react';
import { useNodesState, useEdgesState, addEdge } from '@xyflow/react';

export const useFlowLogic = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  let nodeCounter = 0;
  const generateId = () => `node_${++nodeCounter}`;

  // Auto-hide messages
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  // Connection handler
  const onConnect = useCallback(
    (params) => {
      const sourceHasEdge = edges.some(
        (e) => e.source === params.source && e.sourceHandle === params.sourceHandle
      );
      if (!sourceHasEdge) {
        setEdges((eds) => addEdge({
          ...params,
          style: { strokeWidth: 2 },
          markerEnd: { type: 'arrowclosed' }
        }, eds));
      }
    },
    [edges, setEdges]
  );

  // Node selection
  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
    setErrorMessage(null);
  }, []);

  // Deselect node
  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  // Add new node
  const addNode = useCallback((type, position, data) => {
    const newNode = {
      id: generateId(),
      type,
      position,
      data,
    };
    setNodes((nds) => [...nds, newNode]);
  }, [setNodes]);

  // Update node text
  const updateNodeText = useCallback((text) => {
    if (!selectedNode) return;
    
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNode.id
          ? { ...node, data: { ...node.data, text } }
          : node
      )
    );
    
    setSelectedNode((prev) => 
      prev ? { ...prev, data: { ...prev.data, text } } : null
    );
  }, [selectedNode, setNodes]);

  // Delete node
  const deleteNode = useCallback((nodeId) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => 
      edge.source !== nodeId && edge.target !== nodeId
    ));
    setSelectedNode(null);
    setSuccessMessage('Node deleted successfully');
  }, [setNodes, setEdges]);

  const deleteSelectedNode = useCallback(() => {
    if (selectedNode) {
      deleteNode(selectedNode.id);
    }
  }, [selectedNode, deleteNode]);

  // Keyboard shortcuts removed - only button delete available

  // Save validation
  const onSave = useCallback(() => {
    setErrorMessage(null);
    
    if (nodes.length === 0) {
      setErrorMessage('Cannot save empty flow');
      return;
    }

    if (nodes.length > 1) {
      const nodesWithoutIncoming = nodes.filter(
        (node) => !edges.some((edge) => edge.target === node.id)
      );
      
      if (nodesWithoutIncoming.length > 1) {
        setErrorMessage('Flow has multiple starting nodes');
        return;
      }
    }

    // Simulate save
    console.log('Saving flow:', { nodes, edges });
    setSuccessMessage('Flow saved successfully!');
  }, [nodes, edges]);

  return {
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
  };
};