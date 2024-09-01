/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DeviceOrientationControls, LocationBased, WebcamRenderer } from '@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js';

import {
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
} from 'three';

export const setupScene = () => {
	const canvas = document.getElementById('canvas1');
    const scene = new Scene();
    const camera = new PerspectiveCamera(60, 1.33, 0.1, 10000); // todo: more proper variables
    const renderer = new WebGLRenderer({canvas: canvas});
	renderer.xr.enabled = true;

	const deviceOrientationControls = new DeviceOrientationControls(camera);
	const arjs = new LocationBased(scene, camera);
    const webcam = new WebcamRenderer(renderer);

	window.addEventListener('resize', function () {
		renderer.setSize(canvas.clientWidth, canvas.clientHeight);
		const aspect = canvas.clientWidth / canvas.clientHeight;
		camera.aspect = aspect;
		camera.updateProjectionMatrix();
	});

	return { scene, camera, renderer, arjs, webcam, deviceOrientationControls };
};
