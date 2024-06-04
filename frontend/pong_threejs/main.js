import * as THREE from 'three';
import { Loop } from './loop.js';

const speed = 2.5
let loop;

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(5, 15, 5)
const material = new THREE.MeshStandardMaterial({color: 0xFF0000, roughness: 0.5, metalness: 0., emissive: 0x00})
const cube = new THREE.Mesh(geometry, material)
cube.position.x = -70

const geometry_sphere = new THREE.SphereGeometry(2, 32, 32)
const material_sphere = new THREE.MeshStandardMaterial({color: 0x00FF00, roughness: 0.5, metalness: 0., emissive: 0x00})
const sphere = new THREE.Mesh(geometry_sphere, material_sphere)

const geometry2 = new THREE.BoxGeometry(5, 15, 5)
const material2 = new THREE.MeshStandardMaterial({color: 0xFF0000, roughness: 0.5, metalness: 0., emissive: 0x00})
const cube2 = new THREE.Mesh(geometry2, material2)
cube2.position.x = 70

const light = new THREE.PointLight(0xFFFFFF, 1, 500)
light.position.set(0, 2, 200)

const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 50

scene.add(camera, sphere, cube, cube2, light)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


//Function for handling keypress
const handleKeyPress = (e) => {
	switch(e.key) {
		case 'w':
			cube.position.y += speed
			break
		case 's':
			cube.position.y -= speed
			break
		//Player 2, up
		case 'ArrowUp':
			cube2.position.y += speed
			break
		//Player 2, down
		case 'ArrowDown':
			cube2.position.y -= speed
			break
		}
}

//Event listener for keypress
document.addEventListener('keydown', handleKeyPress)

function animate() {
	loop = new Loop(camera, scene, renderer);
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
	sphere.position.x += 0.1
}

animate()