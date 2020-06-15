import React from 'react';
import { SPRITE_SIZE } from '../../config/constants';
import { connect } from 'react-redux';

import './styles.css';

function getTileSprite(type) {
	switch (type) {
		case 0:
			return 'grass1';
		case 1:
			return 'grass2';
		case 2:
			return 'road';
		case 3:
			return 'path-hor';
		case 4:
			return 'path-ver';
		case 5:
			return 'tree2';
		case 6:
			return 'tree1';
		case 7:
			return 'chest';
		case 8:
			return 'red-house-bl';
		case 9:
			return 'red-house-br';
		case 10:
			return 'red-house-tr';
		case 11:
			return 'red-house-tl';
		case 12:
			return 'orange-shop-left';
		case 13:
			return 'orange-shop-right';
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
				height: '800px',
				border: '1px solid white'
			}}
		>
			{props.tiles.map((row) => <MapRow tiles={row} />)}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		tiles: state.map.tiles
	};
}

export default connect(mapStateToProps)(Map);
