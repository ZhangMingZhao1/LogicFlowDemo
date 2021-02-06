import './App.css';
import LogicFlow from '@logicflow/core';
import '@logicflow/core/dist/style/index.css';
import { useEffect } from 'react';

function App() {
  const data = {
    // 节点
    nodes: [
      {
        id: 50,
        type: 'rect',
        x: 100,
        y: 150,
        text: '你好',
      },
      {
        id: 21,
        type: 'circle',
        x: 300,
        y: 150,
      },
    ],
    // 边
    edges:[
      {
        type: 'polyline',
        sourceNodeId: 50,
        targetNodeId: 21,
      }
    ]
  }
  function CreateIns() { 
    const lf = new LogicFlow({
      container: document.querySelector('#container'),
      stopScrollGraph: true,
      stopZoomGraph: true,
      grid: {
        type: 'dot',
        size: 20,
      },
    });
    lf.render(data);
  }
  useEffect(() => {
    CreateIns();
  }, []);
  return (
    <div id="container">

    </div>
  );
}

export default App;
