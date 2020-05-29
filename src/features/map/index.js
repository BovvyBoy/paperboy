import React from 'react';
import { SPRITE_SIZE } from '../../config/constants';

import './styles.css';

function getTileSprite(type) {
	switch (type) {
		case 0:
			return 'grass';
		case 5:
			return 'rock1';
		case 6:
			return 'tree1';
		case 7:
			return 'chest';
		default:
			return 'grass';
	}
}

function MapTile(props) {
	return (
		<div
			className={`tile ${getTileSprite(props.tile)}`}
			style={{
				height: SPRITE_SIZE,
				width: SPRITE_SIZE
			}}
		/>
	);
}

function MapRow(props) {
	return (
		<div className="row" style={{ height: '40px' }}>
			{props.tiles.map((tile) => <MapTile tile={tile} />)}
		</div>
	);
}

function Map(props) {
	return (
		<div
			style={{
				position: 'relative',
				top: '0px',
				left: '0px',
				width: '800px',
				height: '400px',
				border: '1px solid white'
			}}
		>
			{props.tiles.map((row) => <MapRow tiles={row} />)}
		</div>
	);
}

export default Map;
