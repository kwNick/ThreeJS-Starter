import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { VRButton } from 'three/addons/webxr/VRButton.js';

if (WebGL.isWebGLAvailable()) {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth
        / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    const geo = new THREE.BoxGeometry(1, 1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff6ff8 });

    const cube = new THREE.Mesh(geo, material);
    // scene.add(cube);
    // camera.position.z = 5;

    const materialLine = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points = [];
    points.push(new THREE.Vector3(- 10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geoLine = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geoLine, materialLine);
    // scene.add(line);

    document.body.appendChild(VRButton.createButton(renderer));
    renderer.xr.enabled = true;

    // function animate() {
    //     requestAnimationFrame(animate);
    //     // cube.rotation.x += 0.05;
    //     // cube.rotation.y += 0.03;
    //     renderer.render(scene, camera);
    // }
    // animate();

    renderer.setAnimationLoop(function () {

        renderer.render(scene, camera);

    });

} else {

    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}