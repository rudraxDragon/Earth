import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { useEffect, useRef, useState } from "react"
import { getEarthShaderMaterial } from "./earthShader"
import { getFresnelMat } from "./getFresnelMat"
import "./style.css"

const ThreeScene = () => {
  const mountRef = useRef(null)
  const earthMeshRef = useRef(null)
  const gitLink = "https://github.com/rudraxDragon"
  const [showControls, setShowControls] = useState(false)
  const [showHelpDialog, setShowHelpDialog] = useState(false)

  const closeHelpDialog = () => {
    setShowHelpDialog(false)
  }

  const handleGlobalClick = (event) => {
    if (showHelpDialog && event.target.classList.contains('help-dialog')) {
      closeHelpDialog()
    }
  }
  useEffect(() => {
    if (showHelpDialog) {
      document.addEventListener('click', handleGlobalClick)
    }

    return () => {
      document.removeEventListener('click', handleGlobalClick)
    }
  }, [showHelpDialog])

  const handleControlsClick = (event) => {
    if (showControls &&
      !event.target.closest('.controls-container') &&
      !event.target.classList.contains('Heading')) {
      setShowControls(false)
    }
  }
  useEffect(() => {
    if (showControls) {
      document.addEventListener('click', handleControlsClick)
    }

    return () => {
      document.removeEventListener('click', handleControlsClick)
    }
  }, [showControls])


  const cloudsMeshRef = useRef(null)
  const [showClouds, setShowClouds] = useState(true)

  const glowMeshRef = useRef(null)
  const [showGlow, setShowGlow] = useState(true)

  const speedRef = useRef(0.0004)
  const [speedLevel, setSpeedLevel] = useState(4)

  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const [showAxis, setShowAxis] = useState(true)

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
        loadTexture("images/earth_daymap.png", 0, 4),
        loadTexture("images/earth_nightmap.jpg", 1, 4),
        loadTexture("images/earthclouds.jpg", 2, 4),
        loadTexture("images/stars_milky_way.jpg", 3, 4),
      ])

      const [dayTexture, nightTexture, cloudTexture, starTexture] = textures

      const earthGeometry = new THREE.SphereGeometry(1, 64, 64)
      const earthMaterial = getEarthShaderMaterial(dayTexture, nightTexture)
      const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial)
      earthMeshRef.current = earthMesh
      earthMesh.rotation.x = THREE.MathUtils.degToRad(showAxis ? 23.5 : 0)
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
      controls.minDistance = 1.5
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

  useEffect(() => {
    if (isLoaded) {
      setShowHelpDialog(true)
    }
  }, [isLoaded])

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  useEffect(() => {
    if (!earthMeshRef.current) return

    const targetTilt = THREE.MathUtils.degToRad(showAxis ? 23.5 : 0)
    const startTilt = earthMeshRef.current.rotation.x
    let progress = 0
    const duration = 0.5
    const frameRate = 60
    const totalFrames = duration * frameRate

    const animateTilt = () => {
      if (progress >= 1) {
        earthMeshRef.current.rotation.x = targetTilt
        return
      }

      progress += 1 / totalFrames
      const easedProgress = easeInOutCubic(progress)
      earthMeshRef.current.rotation.x = startTilt + (targetTilt - startTilt) * easedProgress

      requestAnimationFrame(animateTilt)
    };

    animateTilt()
  }, [showAxis])


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

  const toggleAxis = () => {
    setShowAxis((prev) => !prev)
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

      <div className="navigation">
        <h1 className="Heading" onClick={toggleControls}>पृथ्वी</h1>
        <div className="contacts">
          <a href={gitLink}><img src="images/me.jpg" alt="Photo of Rudraksh Prasad" className="profilePic" /></a>
          <div className="nameAndLink">
            <h1 className="name">Rudraksh Prasad</h1>
            <hr />
            <img src="images/github.svg" alt="github logo" className="githubLogo" />
            <a href={gitLink} className="link">rudraxDragon</a>
          </div>
        </div>
      </div>


      {showHelpDialog && (
        <div className="help-dialog">
          <div className="dialog-content">
            <button className="close-btn" onClick={closeHelpDialog}>X</button>
            <h2>How to Use the Controls</h2>
            <p>Welcome to the Earth Sandbox! Here's how you can interact:</p>
            <ul>
              <li><strong>Click on "पृथ्वी" (Earth) at the top of the screen</strong> to reveal the control panel where you can toggle clouds, glow, and adjust speed.</li>
              <li><strong>Clouds:</strong> Toggle clouds on/off by clicking the <strong>"Clouds: ON/OFF"</strong> button in the control panel below the Earth.</li>
              <li><strong>Glow:</strong> Toggle the glow effect on/off by clicking the <strong>"Glow: ON/OFF"</strong> button in the same control panel.</li>
              <li><strong>Speed:</strong> Adjust Earth's rotation speed by clicking the <strong>left (◀)</strong> and <strong>right (▶)</strong> arrows next to "Speed" in the control panel. Each click increases or decreases the rotation speed.</li>
              <li><strong>Zoom:</strong> Use the mouse scroll wheel or drag with your fingers to zoom in and out. You can also use the <strong>OrbitControls</strong> (move around the Earth by dragging) to adjust your view.</li>
        <li><strong>Axis:</strong> Click the <strong>"Axis: ON/OFF"</strong> button to toggle the 23.5° tilt axis line. This helps visualize Earth's tilt.</li>
            </ul>
            <p className="footer"><strong>Click on पृथ्वी at the top to start interacting with the controls!</strong></p>
          </div>
        </div>
      )}


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
        <div className="control-item">
          <span>Axis:</span>
          <button className={`toggle-btn ${showAxis ? "" : "off"}`} onClick={toggleAxis}>
            {showAxis ? "ON" : "OFF"}
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
