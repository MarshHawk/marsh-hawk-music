import React from 'react';
//import * as midiconvert from 'midiconvert';
//import MotownMilonga from '../midi/MotownMilonga.mid';
//import {Player, midiToSequenceProto } from '@magenta/music';
import 'bootstrap/dist/css/bootstrap.css';
//import MIDI from 'midi.js';

let Article = () => (
    <article id="layout-multicolumn" className="page-section text-center py-5">
        <section>
            <section>
                <h3>Motown Milonga Music</h3>
                <button type="button" className="btn btn-primary" onClick={(e) => console.log('Play on')}>Play</button>
                <h5>Original track</h5>
            </section>
        </section>
    </article>
)

export default Article;