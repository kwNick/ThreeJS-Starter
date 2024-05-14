import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';


if (WebGL.isWebGLAvailable()) {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth
        / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geo = new THREE.BoxGeometry(1, 1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff6ff8 });

    const cube = new THREE.Mesh(geo, material);
    scene.add(cube);
    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.05;
        cube.rotation.y += 0.03;
        renderer.render(scene, camera);
    }
    animate();

} else {

    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}