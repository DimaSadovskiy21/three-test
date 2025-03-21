// ToyViewer.tsx
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import './App.css';

function ToyModel() {
  const gltf = useGLTF("/Untitled.glb");

  return (
    <Center>
      <primitive object={gltf.scene} />
    </Center>
  );
}

export default function ToyViewer() {
  return (
    <Canvas
      style={{
        width: "80vw",
        height: "80vh",
        background: "radial-gradient(circle, #5a9c39 40%, #2d5a1f 100%)",
        cursor: "grab",
        borderRadius: "12px",
      }}
      camera={{ position: [0, 2, 1000], fov: 50, near: 0.1, far: 10000 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[-2, 2, 2]} intensity={1} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <directionalLight position={[2, -2, 2]} intensity={1} />
      <directionalLight position={[-2, -2, 2]} intensity={1} />

      <Suspense fallback={null}>
        <ToyModel />
      </Suspense>
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}
