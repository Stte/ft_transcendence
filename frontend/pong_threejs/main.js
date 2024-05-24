import * as THREE from 'three';

const speed = 2.5

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(5, 5, 5)
const material = new THREE.MeshStandardMaterial({color: 0xFF0000, roughness: 0.5, metalness: 0., emissive: 0x00})
const cube = new THREE.Mesh(geometry, material)

const light = new THREE.DirectionalLight(0xFFFFFF, 1)
light.position.set(0, 2, 200)

const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 50

scene.add(camera, cube, light)

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
		}
}

//Event listener for keypress
document.addEventListener('keypress', handleKeyPress)

function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}

animate()