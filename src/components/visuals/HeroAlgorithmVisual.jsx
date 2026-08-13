import React, { useRef, useEffect, useState } from 'react';

export function HeroAlgorithmVisual() {
  const canvasRef = useRef(null);
  const [activeMetrics, setActiveMetrics] = useState({ nodes: 12, edges: 18, fps: 60 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement.clientHeight || 420);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Node layout generation: Binary tree + Graph hybrid structure
    let nodes = [];
    let edges = [];
    let packets = [];
    let pulseRings = [];

    const initNodes = () => {
      nodes = [];
      edges = [];
      packets = [];

      const centerX = width / 2;
      const centerY = height / 2;

      // Core graph nodes
      const rawNodes = [
        { id: 0, x: centerX, y: centerY - 100, label: 'ROOT', color: '#06B6D4' },
        { id: 1, x: centerX - 120, y: centerY - 30, label: 'L_HEAP', color: '#6366F1' },
        { id: 2, x: centerX + 120, y: centerY - 30, label: 'R_TREE', color: '#38BDF8' },
        { id: 3, x: centerX - 160, y: centerY + 60, label: 'NN_IN', color: '#10B981' },
        { id: 4, x: centerX - 50, y: centerY + 70, label: 'GRAPH_V', color: '#F59E0B' },
        { id: 5, x: centerX + 50, y: centerY + 70, label: 'BFS_Q', color: '#06B6D4' },
        { id: 6, x: centerX + 160, y: centerY + 60, label: 'ML_OUT', color: '#EC4899' },
        { id: 7, x: centerX - 90, y: centerY + 130, label: 'CACHE', color: '#6366F1' },
        { id: 8, x: centerX + 90, y: centerY + 130, label: 'DB_IDX', color: '#10B981' },
      ];

      nodes = rawNodes.map(n => ({
        ...n,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 6,
        baseX: n.x,
        baseY: n.y
      }));

      // Edge connections
      const edgePairs = [
        [0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6],
        [3, 7], [4, 7], [5, 8], [6, 8], [1, 2], [4, 5]
      ];

      edges = edgePairs.map(([from, to]) => ({ from, to }));

      // Data packets moving along edges
      for (let i = 0; i < 6; i++) {
        const edgeIndex = Math.floor(Math.random() * edges.length);
        packets.push({
          edgeIndex,
          progress: Math.random(),
          speed: 0.005 + Math.random() * 0.008,
          color: Math.random() > 0.5 ? '#06B6D4' : '#10B981'
        });
      }

      setActiveMetrics({ nodes: nodes.length, edges: edges.length, fps: 60 });
    };

    initNodes();

    // Mouse interactive trigger
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      pulseRings.push({
        x: clickX,
        y: clickY,
        radius: 5,
        maxRadius: 120,
        opacity: 0.9,
        color: '#06B6D4'
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    // Render loop
    let lastTime = performance.now();
    let frameCount = 0;

    const render = (time) => {
      frameCount++;
      if (time - lastTime >= 1000) {
        setActiveMetrics(prev => ({ ...prev, fps: frameCount }));
        frameCount = 0;
        lastTime = time;
      }

      ctx.clearRect(0, 0, width, height);

      // Render Pulse Rings (BFS Trigger)
      for (let i = pulseRings.length - 1; i >= 0; i--) {
        const ring = pulseRings[i];
        ring.radius += 2.5;
        ring.opacity -= 0.015;

        if (ring.opacity <= 0 || ring.radius >= ring.maxRadius) {
          pulseRings.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
        ctx.strokeStyle = ring.color;
        ctx.globalAlpha = ring.opacity;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      }

      // Update Node micro movement & mouse interaction
      nodes.forEach(node => {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 80) {
          const force = (80 - dist) / 80;
          node.x -= (dx / dist) * force * 2;
          node.y -= (dy / dist) * force * 2;
        } else {
          // Soft return to base
          node.x += (node.baseX - node.x) * 0.05;
          node.y += (node.baseY - node.y) * 0.05;
        }
      });

      // Render Edges
      edges.forEach(edge => {
        const fromNode = nodes[edge.from];
        const toNode = nodes[edge.to];

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = 'rgba(51, 65, 85, 0.45)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });

      // Render Packets
      packets.forEach(packet => {
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packet.progress = 0;
          packet.edgeIndex = Math.floor(Math.random() * edges.length);
        }

        const edge = edges[packet.edgeIndex];
        const fromNode = nodes[edge.from];
        const toNode = nodes[edge.to];

        const px = fromNode.x + (toNode.x - fromNode.x) * packet.progress;
        const py = fromNode.y + (toNode.y - fromNode.y) * packet.progress;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = packet.color;
        ctx.shadowColor = packet.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Render Nodes & Labels
      nodes.forEach(node => {
        // Outer aura ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
        ctx.fill();
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Core Dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius - 2, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Mono Label tag
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillStyle = '#94A3B8';
        ctx.fillText(node.label, node.x - 20, node.y + 20);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render(performance.now());

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] md:h-[440px] rounded-3xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col justify-between p-4 group">
      {/* Top Graphic Header */}
      <div className="flex items-center justify-between z-10 font-mono text-[11px] text-slate-400 border-b border-slate-800/60 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-cyan-400 font-semibold">GRAPH_SIMULATOR::BFS</span>
        </div>
        <div className="flex items-center gap-3 text-slate-500">
          <span>NODES: {activeMetrics.nodes}</span>
          <span>EDGES: {activeMetrics.edges}</span>
          <span className="text-emerald-400 font-semibold">{activeMetrics.fps} FPS</span>
        </div>
      </div>

      {/* Main Canvas Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair" />

      {/* Bottom Hint */}
      <div className="z-10 flex items-center justify-between font-mono text-[10px] text-slate-500 pt-2 border-t border-slate-800/40">
        <span>[CLICK CANVAS TO EMIT BFS WAVE]</span>
        <span className="text-cyan-400/80">O(V + E) TRAVERSAL</span>
      </div>
    </div>
  );
}
