import * as THREE from 'three';

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(5, 5, 5)
const material = new THREE.MeshStandardMaterial({color: 0xFF0000})
const cube = new THREE.Mesh(geometry, material)

const light = new THREE.DirectionalLight(0xFFFFFF, 1)
light.position.set(0, 2, 200)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 20

scene.add(camera, cube, light)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function animate() {
	requestAnimationFrame(animate)
	cube.rotation.x += 0.01
	cube.rotation.y += 0.01

	renderer.render(scene, camera)
}

animate()