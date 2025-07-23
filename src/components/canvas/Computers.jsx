<Canvas
  style={{ width: "100%", height: "100vh" }}
  frameloop="demand"
  shadows
  dpr={[1, 2]}
  camera={{ position: [20, 3, 5], fov: 25 }}
  gl={{ preserveDrawingBuffer: true }}
>
  <Suspense fallback={<CanvasLoader />}>
    <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
    <Computers isMobile={isMobile} />
  </Suspense>

  <Preload all />
</Canvas>
