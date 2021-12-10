import React, {Component} from 'react';
import styles from './hero.scss';
import './hero.scss';


function Hero(){
    return (
        <div className={styles.hero}> <h1>{this.props.label}</h1></div>
    );
}

export default Hero;