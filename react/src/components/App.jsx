import { Button } from "@swc-react/button";
import { Theme } from "@swc-react/theme";
import { ButtonGroup } from '@swc-react/button-group';
import { FieldLabel } from '@swc-react/field-label';
import { MenuItem } from '@swc-react/menu';
import { Picker } from '@swc-react/picker';
import { Slider } from '@swc-react/slider';
import { Swatch } from '@swc-react/swatch';
import { Switch } from "@swc-react/switch";
import "@spectrum-web-components/theme/express/scale-medium.js";
import "@spectrum-web-components/theme/express/theme-light.js";


import React, { useState, useRef } from "react";

import "../style/style.css";
import "../style/controls.css";

import "../cow.js";

function goBack() {
    document.getElementById("shapeSelector").style.display = "block";
    document.getElementById("shapeEditor").style.display = "none";
}

function App({ addOnUISdk }) {
    return (
        <Theme
            theme="express"
            color="light"
            scale="medium"
        >
            <div className="hidden">
                <div id="hiddenCopy"></div>
                <div id="png-container"></div>
                <canvas id="myCanvas"></canvas>
            </div>
            <div id="shapeSelector">
                <div id="title">
                    <h1>Shape Shifter</h1>
                </div>
                <p>Pick a shape template</p>
                <div id="shapePicker"></div>
            </div>
            <div id="shapeEditor">
                <div id="editTitle">
                    <div className="autoAlign">
                        <button onClick={goBack} className="googleButton"><span className="material-symbols-outlined">arrow_back_ios</span></button>
                    </div>
                    <div>
                        <h1>Shape Editor</h1>
                    </div>
                </div>
                <div id="shapeViewer"></div>
                <div id="controls">
                    <div>
                        <button id="flipH" className="moveControls">
                            <span className="material-symbols-outlined">flip</span>
                        </button>
                        <button id="flipV" className="moveControls">
                            <span className="material-symbols-outlined" style={{transform: "rotate(90deg)"}}>flip</span>
                        </button>
                        <button id="rotR" className="moveControls">
                            <span className="material-symbols-outlined">rotate_right</span>
                        </button>
                        <button id="rotL" className="moveControls">
                            <span className="material-symbols-outlined">rotate_left</span>
                        </button>
                    </div>
                    <hr />
                    <div id="colorPicker">
                        <div>
                            <div className="colorPicker">
                                <label htmlFor="fillColor">Fill</label>
                                <input id="fillColor" type="color"></input>
                            </div>
                            <Slider id="fill" type="range" value="1" min="0" max="1" step="0.01" className="opacity range"></Slider>
                        </div>
                        <div>
                            <button id="swap" className="googleButton swapDiv"><span className="material-symbols-outlined">swap_horiz</span></button>
                        </div>
                        <div>
                            <div className="colorPicker">
                                <label htmlFor="borderColor">Border</label>
                                <input id="borderColor" type="color"></input>
                            </div>
                            <Slider id="border" type="range" value="1" min="0" max="1" step="0.01" className="opacity range"></Slider>
                        </div>
                    </div>
                    <br />
                    <label htmlFor="weight">Border Thickness</label>
                    <br />
                    <Slider id="weight" type="range" value="4" min="1" max="30" step="1" className="range"></Slider>
                    <br />
                    <div id="borderPicker">
                        <div>
                            <button id="noDash" className="dashPicker">
                                <span className="material-symbols-outlined">horizontal_rule</span>
                            </button>
                            <button id="dashed" className="dashPicker">
                                <span className="material-symbols-outlined">unknown_med</span>
                            </button>
                            <button id="dotted" className="dashPicker">
                                <span className="material-symbols-outlined">more_horiz</span>
                            </button>
                        </div>
                        <div>
                            <button id="arcs" className="cornerPicker">
                                <img src="https://raw.githubusercontent.com/Iceman013/ShapeShifter/e760e75dad20f5a7f24381d236bcc51400c31ac1/main/src/images/cornerArcs.png" />
                            </button>
                            <button id="bevel" className="cornerPicker">
                                <img src="https://raw.githubusercontent.com/Iceman013/ShapeShifter/e760e75dad20f5a7f24381d236bcc51400c31ac1/main/src/images/cornerBevel.png" />
                            </button>
                            <button id="round" className="cornerPicker">
                                <img src="https://raw.githubusercontent.com/Iceman013/ShapeShifter/e760e75dad20f5a7f24381d236bcc51400c31ac1/main/src/images/cornerRound.png" />
                            </button>
                        </div>
                    </div>
                    <hr />
                    <button className="submit button" id="addShape">Add Shape</button>
                </div>
            </div>
            <p id="output"></p>
            <script defer type="module" src="cow.js"></script>
        </Theme>
    );
}

export default App;