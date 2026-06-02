import { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PerspectiveCamera, Environment, RoundedBox, Center } from '@react-three/drei'
import * as THREE from 'three'

function StartRusLogo3D() {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.4
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.15
    meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.5) * 0.1
  })

  const sparkleShape = useMemo(() => {
    const s = new THREE.Shape()
    const size = 0.8
    const curve = 0.05
    s.moveTo(0, size)
    s.quadraticCurveTo(curve, curve, size, 0)
    s.quadraticCurveTo(curve, -curve, 0, -size)
    s.quadraticCurveTo(-curve, -curve, -size, 0)
    s.quadraticCurveTo(-curve, curve, 0, size)
    return s
  }, [])

  const extrudeSettings = { 
    depth: 0.8, 
    bevelEnabled: true, 
    bevelSegments: 4, 
    steps: 1, 
    bevelSize: 0.03, 
    bevelThickness: 0.03 
  }

  return (
    <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={meshRef} scale={1.2}>
        {/* The Red App Icon Box */}
        <RoundedBox args={[2.5, 2.5, 0.6]} radius={0.6} smoothness={8}>
          <meshStandardMaterial 
            color="#FF3B30" 
            emissive="#E8352A"
            emissiveIntensity={0.4}
            roughness={0.2} 
            metalness={0.1} 
          />
        </RoundedBox>
        
        {/* The White Sparkle inside */}
        <Center position={[0, 0, 0]}>
          <mesh>
            <extrudeGeometry args={[sparkleShape, extrudeSettings]} />
            <meshStandardMaterial 
              color="#FFFFFF" 
              emissive="#FFFFFF" 
              emissiveIntensity={0.8} 
              roughness={0.1}
            />
          </mesh>
        </Center>
      </group>
    </Float>
  )
}

function Particles({ count = 200 }) {
  const mesh = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  const [particles] = useState(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.005 + Math.random() / 200
      const xFactor = -20 + Math.random() * 40
      const yFactor = -20 + Math.random() * 40
      const zFactor = -20 + Math.random() * 40
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  })

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { factor, speed, xFactor, yFactor, zFactor } = particle
      particle.t += speed / 2
      const t = particle.t
      const s = Math.cos(t) * 0.5 + 0.5
      
      dummy.position.set(
        xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.set(s, s, s)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#26C6DA" />
    </instancedMesh>
  )
}

function MouseParallax() {
  useFrame((state) => {
    state.camera.position.x += (state.pointer.x * 2 - state.camera.position.x) * 0.05
    state.camera.position.y += (state.pointer.y * 2 - state.camera.position.y) * 0.05
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function StarScene() {
  return (
    <div className="fixed inset-0 z-0 opacity-80 pointer-events-auto">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#1565C0" />
        <pointLight position={[0, 0, 5]} intensity={1.5} color="#ffffff" />
        
        <MouseParallax />
        <StartRusLogo3D />
        <Particles count={250} />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
