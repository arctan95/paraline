/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



// import {
// 	BoxGeometry,
// 	Mesh,
// 	MeshBasicMaterial,
// } from 'three';

import { Component, System } from 'elics';

export class PositionComponent extends Component {}

export class PositionSystem extends System {

	_init() {

		// const geom = new BoxGeometry(20, 20, 20);
		// const mtl = new MeshBasicMaterial({color: 0xff0000});
		// const box = new Mesh(geom, mtl);
		// arjs.add(box, -0.72, 51.051); 
	
		// arjs.fakeGps(-0.72, 30.05);
	}

	update() {
		const gps = this.getEntities(this.queries.gps)[0].getComponent(
			PositionComponent,
		);
		const gpsCamera = gps.webcam;
		gpsCamera.update();
	}
}

PositionSystem.queries = {
	gps: { required: [PositionComponent] },
};
