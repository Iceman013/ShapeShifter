import { Shape } from "./shape.js";
export const shapeList = [
    // new Shape("Test Shape", [{"x": 0, "y": 0}, {"x": 1, "y": 0}, {"x": 1, "y": 1}, {"x": 0, "y": 1}]),
    // new Shape("Speech Bubble", [{"x": 0.5, "y": 0.05}, {"x": 0.95, "y": 0.35, "type": "Q"}, {"x": 0.5, "y": 0.5}, {"x": 0.4, "y": 0.8}, {"x": 0.3, "y": 0.5}, {"x": 0.05, "y": 0.35, "type": "Q"}]),
    
    new Shape("Triangle", [{"x": 0.5, "y": 0.1}, {"x": 0.07, "y": 0.85}, {"x": 0.93, "y": 0.85}]),
    new Shape("Square", [{"x": 0.15, "y": 0.15}, {"x": 0.85, "y": 0.15}, {"x": 0.85, "y": 0.85}, {"x": 0.15, "y": 0.85}]),
    new Shape("Pentagon", [{"x": 0.5, "y": 0.05}, {"x": 0.98, "y": 0.4}, {"x": 0.79, "y": 0.95}, {"x": 0.21, "y": 0.95}, {"x": 0.02, "y": 0.4}]),
    new Shape("Hexagon", [{"x": 0.25, "y": 0.07}, {"x": 0.75, "y": 0.07}, {"x": 1, "y": 0.5}, {"x": 0.75, "y": 0.93}, {"x": 0.25, "y": 0.93}, {"x": 0, "y": 0.5}]),
    new Shape("Septagon", [{"x": 0.5, "y": 0}, {"x": 0.89, "y": 0.19}, {"x": 0.99, "y": 0.61}, {"x": 0.72, "y": 0.95}, {"x": 0.28, "y": 0.95}, {"x": 0.01, "y": 0.61}, {"x": 0.11, "y": 0.19}]),
    new Shape("Octagon", [{"x": 0.31, "y": 0.04}, {"x": 0.69, "y": 0.04}, {"x": 0.96, "y": 0.31}, {"x": 0.96, "y": 0.69}, {"x": 0.69, "y": 0.96}, {"x": 0.31, "y": 0.96}, {"x": 0.04, "y": 0.69}, {"x": 0.04, "y": 0.31}]),
    new Shape("Nonagon", [{"x": 0.5, "y": 0.025}, {"x": 0.8135, "y": 0.139}, {"x": 0.975, "y": 0.4335}, {"x": 0.918, "y": 0.766}, {"x": 0.671, "y": 0.975}, {"x": 0.329, "y": 0.975}, {"x": 0.082, "y": 0.766}, {"x": 0.025, "y": 0.4335}, {"x": 0.1865, "y": 0.139}]),
    new Shape("Decagon", [{"x": 0.5, "y": 0.025}, {"x": 0.785, "y": 0.0975}, {"x": 0.975, "y": 0.3575}, {"x": 0.975, "y": 0.69}, {"x": 0.785, "y": 0.88}, {"x": 0.5, "y": 0.975}, {"x": 0.215, "y": 0.88}, {"x": 0.025, "y": 0.69}, {"x": 0.025, "y": 0.3575}, {"x": 0.215, "y": 0.0975}]),
    
    new Shape("Trapezoid", [{"x": 0.25, "y": 0.15}, {"x": 0.75, "y": 0.15}, {"x": 0.95, "y": 0.85}, {"x": 0.05, "y": 0.85}]),
    new Shape("Parallelogram", [{"x": 0.3, "y": 0.05}, {"x": 0.95, "y": 0.05}, {"x": 0.7, "y": 0.95}, {"x": 0.05, "y": 0.95}]),
    new Shape("Rhombus", [{"x": 0.5, "y": 0.05}, {"x": 0.95, "y": 0.5}, {"x": 0.5, "y": 0.95}, {"x": 0.05, "y": 0.5}]),
    
    new Shape("Bevel", [{"x": 0.15, "y": 0.05}, {"x": 0.85, "y": 0.05}, {"x": 0.95, "y": 0.15}, {"x": 0.95, "y": 0.85}, {"x": 0.85, "y": 0.95}, {"x": 0.15, "y": 0.95}, {"x": 0.05, "y": 0.85}, {"x": 0.05, "y": 0.15}]),
    new Shape("Rabbet", [{"x": 0.05, "y": 0.2}, {"x": 0.2, "y": 0.2}, {"x": 0.2, "y": 0.05}, {"x": 0.8, "y": 0.05}, {"x": 0.8, "y": 0.2}, {"x": 0.95, "y": 0.2}, {"x": 0.95, "y": 0.8}, {"x": 0.8, "y": 0.8}, {"x": 0.8, "y": 0.95}, {"x": 0.2, "y": 0.95}, {"x": 0.2, "y": 0.8}, {"x": 0.05, "y": 0.8}]),

    new Shape("Left Arrow", [{"x": 0.4, "y": 0.05}, {"x": 0.4, "y": 0.25}, {"x": 0.95, "y": 0.25}, {"x": 0.95, "y": 0.75}, {"x": 0.4, "y": 0.75}, {"x": 0.4, "y": 0.95}, {"x": 0.05, "y": 0.5}]),
    new Shape("Right Arrow", [{"x": 0.05, "y": 0.25}, {"x": 0.6, "y": 0.25}, {"x": 0.6, "y": 0.05}, {"x": 0.95, "y": 0.5}, {"x": 0.6, "y": 0.95}, {"x": 0.6, "y": 0.75}, {"x": 0.05, "y": 0.75}]),
    new Shape("Left Point", [{"x": 0.35, "y": 0.05}, {"x": 0.95, "y": 0.05}, {"x": 0.95, "y": 0.95}, {"x": 0.35, "y": 0.95}, {"x": 0.05, "y": 0.5}]),
    new Shape("Right Point", [{"x": 0.05, "y": 0.05}, {"x": 0.65, "y": 0.05}, {"x": 0.95, "y": 0.5}, {"x": 0.65, "y": 0.95}, {"x": 0.05, "y": 0.95}]),
    new Shape("Left Chevron", [{"x": 0.95, "y": 0.05}, {"x": 0.7, "y": 0.5}, {"x": 0.95, "y": 0.95}, {"x": 0.3, "y": 0.95}, {"x": 0.05, "y": 0.5}, {"x": 0.3, "y": 0.05}]),
    new Shape("Right Chevron", [{"x": 0.7, "y": 0.05}, {"x": 0.95, "y": 0.5}, {"x": 0.7, "y": 0.95}, {"x": 0.05, "y": 0.95}, {"x": 0.3, "y": 0.5}, {"x": 0.05, "y": 0.05}]),
    new Shape("Arrowhead Left", [{"x": 0.95, "y": 0.05}, {"x": 0.7, "y": 0.5}, {"x": 0.95, "y": 0.95}, {"x": 0.05, "y": 0.5}]),
    new Shape("Arrowhead Right", [{"x": 0.05, "y": 0.05}, {"x": 0.95, "y": 0.5}, {"x": 0.05, "y": 0.95}, {"x": 0.3, "y": 0.5}]),

    new Shape("Cross", [{"x": 0.1, "y": 0.25}, {"x": 0.35, "y": 0.25}, {"x": 0.35, "y": 0.05}, {"x": 0.65, "y": 0.05}, {"x": 0.65, "y": 0.25}, {"x": 0.9, "y": 0.25}, {"x": 0.9, "y": 0.5}, {"x": 0.65, "y": 0.5}, {"x": 0.65, "y": 0.95}, {"x": 0.35, "y": 0.95}, {"x": 0.35, "y": 0.5}, {"x": 0.1, "y": 0.5}]),
    new Shape("X", [{"x": 0.2, "y": 0.05}, {"x": 0.05, "y": 0.2}, {"x": 0.35, "y": 0.5}, {"x": 0.05, "y": 0.8}, {"x": 0.2, "y": 0.95}, {"x": 0.5, "y": 0.65}, {"x": 0.8, "y": 0.95}, {"x": 0.95, "y": 0.8}, {"x": 0.65, "y": 0.5}, {"x": 0.95, "y": 0.2}, {"x": 0.8, "y": 0.05}, {"x": 0.5, "y": 0.35}]),
    new Shape("Frame", [{"x": 0.05, "y": 0.05}, {"x": 0.05, "y": 0.95}, {"x": 0.25, "y": 0.95}, {"x": 0.25, "y": 0.25}, {"x": 0.75, "y": 0.25}, {"x": 0.75, "y": 0.75}, {"x": 0.25, "y": 0.75}, {"x": 0.25, "y": 0.95}, {"x": 0.95, "y": 0.95}, {"x": 0.95, "y": 0.05}]),

    new Shape("Square Speech Bubble", [{"x": 0.05, "y": 0.05}, {"x": 0.95, "y": 0.05}, {"x": 0.95, "y": 0.65}, {"x": 0.5, "y": 0.65}, {"x": 0.25, "y": 0.9}, {"x": 0.25, "y": 0.65}, {"x": 0.05, "y": 0.65}]),
    new Shape("Rounded Speech Bubble", [{"x": 0.8, "y": 0.05}, {"x": 0.95, "y": 0.05, "type": "Q"}, {"x": 0.95, "y": 0.2}, {"x": 0.95, "y": 0.5}, {"x": 0.95, "y": 0.65, "type": "Q"}, {"x": 0.8, "y": 0.65}, {"x": 0.5, "y": 0.65}, {"x": 0.3, "y": 0.9}, {"x": 0.3, "y": 0.65}, {"x": 0.2, "y": 0.65}, {"x": 0.05, "y": 0.65, "type": "Q"}, {"x": 0.05, "y": 0.5}, {"x": 0.05, "y": 0.2}, {"x": 0.05, "y": 0.05, "type": "Q"}, {"x": 0.2, "y": 0.05}]),

    new Shape("Star", [{"x": 0.5, "y": 0.05}, {"x": 0.6045, "y": 0.3825}, {"x": 0.956, "y": 0.3825}, {"x": 0.671, "y": 0.5915}, {"x": 0.7755, "y": 0.9145}, {"x": 0.5, "y": 0.715}, {"x": 0.2245, "y": 0.9145}, {"x": 0.329, "y": 0.5915}, {"x": 0.044, "y": 0.3825}, {"x": 0.3955, "y": 0.3825}]),
    new Shape("Lightning", [{"x": 0.25, "y": 0.05}, {"x": 0.65, "y": 0.05}, {"x": 0.4, "y": 0.35}, {"x": 0.9, "y": 0.35}, {"x": 0.2, "y": 0.95}, {"x": 0.4, "y": 0.55}, {"x": 0.05, "y": 0.55}]),
    new Shape("House", [{"x": 0.5, "y": 0.05}, {"x": 0.65, "y": 0.15}, {"x": 0.65, "y": 0.05}, {"x": 0.85, "y": 0.05}, {"x": 0.85, "y": 0.3}, {"x": 0.95, "y": 0.4}, {"x": 0.95, "y": 0.95}, {"x": 0.65, "y": 0.95}, {"x": 0.65, "y": 0.65}, {"x": 0.35, "y": 0.65}, {"x": 0.35, "y": 0.95}, {"x": 0.05, "y": 0.95}, {"x": 0.05, "y": 0.4}]),
    new Shape("Diamond", [{"x": 0.25, "y": 0.05}, {"x": 0.75, "y": 0.05}, {"x": 0.95, "y": 0.25}, {"x": 0.5, "y": 0.95}, {"x": 0.05, "y": 0.25}]),
    new Shape("Heart", [{"x": 0.3, "y": 0.05}, {"x": 0.5, "y": 0.2}, {"x": 0.7, "y": 0.05}, {"x": 0.9, "y": 0.1}, {"x": 0.95, "y": 0.35}, {"x": 0.8, "y": 0.65}, {"x": 0.5, "y": 0.95}, {"x": 0.2, "y": 0.65}, {"x": 0.05, "y": 0.35}, {"x": 0.1, "y": 0.1}]),
    
];