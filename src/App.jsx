import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { useEffect, useRef, useState } from "react"
import { getEarthShaderMaterial } from "./earthShader"
import { getFresnelMat } from "./getFresnelMat"
import "./style.css"

const ThreeScene = () => {
  const mountRef = useRef(null)
  const gitLink = "https://github.com/rudraxDragon"
  const [showControls, setShowControls] = useState(false)

  const cloudsMeshRef = useRef(null)
  const [showClouds, setShowClouds] = useState(true)

  const glowMeshRef = useRef(null)
  const [showGlow, setShowGlow] = useState(true)

  const speedRef = useRef(0.0003)
  const [speedLevel, setSpeedLevel] = useState(3) // Default speed level

  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const scene = new THREE.Scene()
    const fov = 75,
      aspect = window.innerWidth / window.innerHeight,
      near = 0.1,
      far = 100
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(-1.22, 0.73, -1.5)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    const loader = new THREE.TextureLoader()

    const loadTexture = (url, index, total) => {
      return new Promise((resolve) => {
        loader.load(url, (texture) => {
          setLoadingProgress(((index + 1) / total) * 100)
          resolve(texture)
        })
      })
    }

    const loadAssets = async () => {
      const textures = await Promise.all([
        loadTexture("/earth_daymap.png", 0, 4),
        loadTexture("/earth_nightmap.jpg", 1, 4),
        loadTexture("/earthclouds.jpg", 2, 4),
        loadTexture("/stars_milky_way.jpg", 3, 4),
      ])

      const [dayTexture, nightTexture, cloudTexture, starTexture] = textures

      const earthGeometry = new THREE.SphereGeometry(1, 64, 64)
      const earthMaterial = getEarthShaderMaterial(dayTexture, nightTexture)
      const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial)
      scene.add(earthMesh)

      const cloudGeometry = new THREE.SphereGeometry(1.01, 64, 64)
      const cloudMaterial = new THREE.MeshBasicMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.2,
      })
      const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial)
      cloudMesh.visible = showClouds
      cloudsMeshRef.current = cloudMesh
      scene.add(cloudMesh)

      const starsGeometry = new THREE.SphereGeometry(10, 32, 32)
      const starsMaterial = new THREE.MeshBasicMaterial({
        map: starTexture,
        side: THREE.BackSide,
      })
      const starsMesh = new THREE.Mesh(starsGeometry, starsMaterial)
      scene.add(starsMesh)

      const glowGeometry = new THREE.SphereGeometry(1.01, 64, 64)
      const glowMaterial = getFresnelMat()
      const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial)
      glowMesh.visible = showGlow
      glowMeshRef.current = glowMesh
      scene.add(glowMesh)

      setIsLoaded(true)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.05
      controls.minDistance = 1.1
      controls.maxDistance = 5
      controls.target.set(0, 0, 0)
      controls.mouseButtons.RIGHT = null

      const animate = () => {
        requestAnimationFrame(animate)
        const currentSpeed = speedRef.current
        earthMesh.rotation.y += currentSpeed
        cloudMesh.rotation.y += currentSpeed + 0.0001
        glowMesh.rotation.y += currentSpeed + 0.0001
        controls.update()
        renderer.render(scene, camera)
      }

      animate()
    }

    loadAssets()
  }, [])

  const toggleClouds = () => {
    if (cloudsMeshRef.current) {
      cloudsMeshRef.current.visible = !cloudsMeshRef.current.visible
    }
    setShowClouds((prev) => !prev)
  }

  const toggleGlow = () => {
    if (glowMeshRef.current) {
      glowMeshRef.current.visible = !glowMeshRef.current.visible
    }
    setShowGlow((prev) => !prev)
  }

  const increaseSpeed = () => {
    if (speedLevel < 10) {
      speedRef.current += 0.0001
      setSpeedLevel((prev) => prev + 1)
    }
  }

  const decreaseSpeed = () => {
    if (speedLevel > 1) {
      speedRef.current -= 0.0001
      setSpeedLevel((prev) => prev - 1)
    }
  }

  const toggleControls = () => {
    setShowControls((prev) => !prev)
  }

  return (
    <>
      {!isLoaded && (
        <div className="loading-screen">
          <div className="loading-container">
            <h2>🌍 Loading Earth...</h2>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${loadingProgress}%` }}></div>
            </div>
            <p>{Math.round(loadingProgress)}%</p>
            <p className="loading-text">Rendering a beautiful view of Earth...</p>
          </div>
        </div>
      )}

      <div ref={mountRef} className="earth"></div>

      {/* Navigation */}
      <div className="navigation">
        <h1 className="Heading" onClick={toggleControls}>पृथ्वी</h1>
        <div className="contacts">
          <a href={gitLink}><img src="/me.jpg" alt="Photo of Rudraksh Prasad" className="profilePic" /></a>
          <div className="nameAndLink">
            <h1 className="name">Rudraksh Prasad</h1>
            <hr />
            <img src="/github.svg" alt="github logo" className="githubLogo" />
            <a href={gitLink} className="link">rudraxDragon</a>
          </div>
        </div>
      </div>

      {/* Dropdown Controls */}
      <div className={`controls-container ${showControls ? "show" : ""}`}>
        <div className="control-item">
          <span>Clouds:</span>
          <button className={`toggle-btn ${showClouds ? "" : "off"}`} onClick={toggleClouds}>
            {showClouds ? "ON" : "OFF"}
          </button>
        </div>
        <div className="control-item">
          <span>Glow:</span>
          <button className={`toggle-btn ${showGlow ? "" : "off"}`} onClick={toggleGlow}>
            {showGlow ? "ON" : "OFF"}
          </button>
        </div>
        <div className="control-item speed-control">
          <span>Speed:</span>
          <button className="speed-btn" onClick={decreaseSpeed}>◀</button>
          <span className="speed-value">{speedLevel}</span>
          <button className="speed-btn" onClick={increaseSpeed}>▶</button>
        </div>
      </div>
    </>
  )
}

export default ThreeScene
