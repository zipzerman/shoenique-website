import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useGLTF,OrbitControls, ContactShadows, Environment } from '@react-three/drei'
import { Canvas, useFrame } from 'react-three-fiber'
import { proxy, useProxy } from 'valtio'
import { HexColorPicker, HexColorInput } from 'react-colorful'


const state = proxy({
  current: null,
  items: {
    laces: '#ffffff',
    mesh: '#ffffff',
    caps: '#ffffff',
    inner: '#ffffff',
    sole: '#ffffff',
    stripes: '#ffffff',
    band: '#ffffff',
    patch: '#ffffff'
  }
})

function Shoe(props) {
  const group = useRef()
  const snap = useProxy(state)
  const { nodes, materials } = useGLTF('shoe.glb')
  const [hovered, set] = useState(null)

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(hovered ? cursor : auto)}'), auto`
  })
  
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={(e) => {
        e.stopPropagation(), set(e.object.material.name)
      }}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}>
      onPointerMissed={(e) => (state.current = null)}
      
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={snap.items.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={snap.items.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={snap.items.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={snap.items.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={snap.items.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={snap.items.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={snap.items.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={snap.items.patch} />
    </group>
  )
}

function Picker() {
  const snap = useProxy(state)
  return (
    <div className="picker">
      <HexColorPicker className="picker" 
      color={snap.items[snap.current]} 
      onChange={(color) => (state.items[snap.current] = color)} />

      <HexColorInput className="inputpicker" 
      color={snap.items[snap.current]} 
      onChange={(color) => (state.items[snap.current] = color)} />
      <h1>{snap.current}</h1>
      
    </div>
  )
}

export default function Shoenique() {
  return (
    <>
      <Picker />
      <Canvas>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Shoe />
          <Environment files="royal_esplanade_1k copy.hdr"/>
        </Suspense>
        <OrbitControls/>
      </Canvas>
    </>
  )
}
