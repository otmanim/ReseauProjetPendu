import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ReactDOM } from 'react-dom'
import React, { Component } from 'react'
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import {useRef} from 'react';
import { useState } from 'react';

const client = new W3CWebSocket('ws://127.0.0.1:7890');

export default class App extends Component {

  componentDidMount() {
    console.log("hey")
    client.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
      }
  }

  sayHello() {
    client.send(document.getElementById('msg').value)
  }

  render() {
    
    return (
      <div>
        <input id='msg' type={'text'} />
        <button onClick={this.sayHello}>Click here to send hey to serv</button>
      </div>
    )
  }
}
